<template>
  <div ref="container" class="three-container"></div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { onMounted, ref, onUnmounted } from 'vue';

const props = defineProps<{ images: Array<String> }>();

const container = ref<HTMLDivElement | null>(null);
const emit = defineEmits(['image-click']);

// 放在组件外部避免重复创建
let animationId: number | null = null;
let isUnmounted = false;

onMounted(() => {
  if (!container.value) return;

  const scene = new THREE.Scene();
  const sphereGroup = new THREE.Group();

  const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance' // 优先使用高性能GPU
  });

  // 限制像素比，避免高 DPI 设备性能问题
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);
  camera.position.z = 300;

  const light = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(light);

  // 纹理加载器
  const textureLoader = new THREE.TextureLoader();
  const imageCount = 80;
  const radius = 100;

  // 创建占位纹理（使用灰色渐变更好看）
  const placeholderTexture = createPlaceholderTexture();

  // 共享几何体 - 减少内存占用
  const geometry = new THREE.PlaneGeometry(20, 20);

  // 用于控制渲染的标记
  let needsRender = true;

  // 存储所有材质用于后续纹理更新
  const materials: THREE.MeshBasicMaterial[] = [];

  // 先创建所有 mesh，使用占位纹理
  for (let i = 0; i < imageCount; i++) {
    const material = new THREE.MeshBasicMaterial({
      map: placeholderTexture,
      transparent: true
    });
    materials.push(material);

    const mesh = new THREE.Mesh(geometry, material);

    const phi = Math.acos(-1 + (2 * i) / imageCount);
    const theta = Math.sqrt(imageCount * Math.PI) * phi;
    mesh.position.setFromSphericalCoords(radius, phi, theta);
    mesh.lookAt(0, 0, 0);

    sphereGroup.add(mesh);
  }

  scene.add(sphereGroup);

  // 批量加载纹理，限制并发数避免网络拥堵
  loadTexturesInBatches(materials, props.images, textureLoader, () => {
    needsRender = true;
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  controls.enableZoom = isTouchDevice;

  // 监听控制器变化，触发渲染
  controls.addEventListener('change', () => {
    needsRender = true;
  });

  // Raycaster 点击检测
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onClick(event: MouseEvent) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(sphereGroup.children);
    if (intersects.length > 0) {
      const clicked = intersects[0].object as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
      if (clicked.material.map?.image) {
        emit('image-click', clicked.material.map.image.src);
      }
    }
  }

  // 使用被动事件监听器
  renderer.domElement.addEventListener('click', onClick);

  // 滚动放大动画 - 使用节流
  let scrollTimeout: number | null = null;
  function onScroll() {
    if (scrollTimeout) return;
    scrollTimeout = window.setTimeout(() => {
      scrollTimeout = null;
      const scrollY = window.scrollY;
      const targetScale = Math.min(2.5, 1 + scrollY / 800);
      gsap.to(sphereGroup.scale, {
        x: targetScale,
        y: targetScale,
        z: targetScale,
        duration: 0.5,
        onUpdate: () => {
          needsRender = true;
        }
      });
    }, 16); // ~60fps
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // 优化的动画循环 - 只在需要时渲染
  function animate() {
    if (isUnmounted) return;

    animationId = requestAnimationFrame(animate);

    // 控制器自动旋转时需要更新
    controls.update();

    // 只在需要时渲染
    if (needsRender) {
      renderer.render(scene, camera);
      needsRender = false;
    }
  }

  // 初始渲染
  needsRender = true;
  animate();

  // 窗口大小变化处理
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    needsRender = true;
  }
  window.addEventListener('resize', onResize);

  onUnmounted(() => {
    isUnmounted = true;

    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    renderer.domElement.removeEventListener('click', onClick);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    controls.removeEventListener('change', () => {});

    // 释放所有 mesh 的纹理、材质
    materials.forEach((material) => {
      if (material.map && material.map !== placeholderTexture) {
        material.map.dispose();
      }
      material.dispose();
    });

    // 释放占位纹理和几何体
    placeholderTexture.dispose();
    geometry.dispose();

    // 移除 group
    scene.remove(sphereGroup);

    // 销毁渲染器
    renderer.dispose();
    renderer.forceContextLoss();
  });
});

// 创建占位纹理
function createPlaceholderTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  // 创建渐变背景
  const gradient = ctx.createLinearGradient(0, 0, 64, 64);
  gradient.addColorStop(0, '#e0e0e0');
  gradient.addColorStop(1, '#f5f5f5');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// 批量加载纹理，限制并发数
async function loadTexturesInBatches(
  materials: THREE.MeshBasicMaterial[],
  images: Array<String>,
  loader: THREE.TextureLoader,
  onUpdate: () => void
) {
  const BATCH_SIZE = 4; // 每次最多并发 4 个请求
  const DELAY_BETWEEN_BATCHES = 50; // 批次间延迟，避免阻塞主线程

  for (let i = 0; i < materials.length; i += BATCH_SIZE) {
    const batch = materials.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map((material, batchIndex) => {
        const imageIndex = (i + batchIndex) % images.length;
        return loadTexture(loader, images[imageIndex] as string)
          .then((texture) => {
            if (texture) {
              // 优化纹理设置
              texture.minFilter = THREE.LinearFilter;
              texture.magFilter = THREE.LinearFilter;
              texture.generateMipmaps = false; // 禁用 mipmap 减少内存

              material.map = texture;
              material.needsUpdate = true;
              onUpdate();
            }
          })
          .catch(() => {
            // 加载失败保持占位纹理
          });
      })
    );

    // 批次间添加小延迟，让浏览器有时间处理其他任务
    if (i + BATCH_SIZE < materials.length) {
      await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
    }
  }
}

// 单个纹理加载 Promise 封装
function loadTexture(loader: THREE.TextureLoader, url: string): Promise<THREE.Texture | null> {
  return new Promise((resolve) => {
    loader.load(
      url,
      (texture: THREE.Texture) => resolve(texture),
      undefined,
      () => resolve(null)
    );
  });
}
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
