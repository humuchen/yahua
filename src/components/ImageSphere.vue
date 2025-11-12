<template>
  <div ref="container" class="three-container"></div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { onMounted, ref, defineEmits, onUnmounted } from 'vue';

const props = defineProps<{ images: Array<String> }>();

const container = ref<any>(null);
const emit = defineEmits(['image-click']);
const sphereGroup = new THREE.Group();

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);
  camera.position.z = 300;

  const light = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(light);

  // 多张图片纹理
  const textureLoader = new THREE.TextureLoader();
  const imageCount = 80;
  const radius = 100;

  const placeholderTexture = new THREE.TextureLoader().load(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAC4nK1dAAAAKUlEQVR4nO3BMQEAAAgDINc/9K3hA4AAAAAAAAAAAAAAAAAAAAAAADwG4QAAQFQk9QAAAAASUVORK5CYII='
  );

  const geometry = new THREE.PlaneGeometry(20, 20);

  for (let i = 0; i < imageCount; i++) {
    // const texture = textureLoader.load(props.images[i % props.images.length]);
    // const material = new THREE.MeshBasicMaterial({ map: texture });
    //const geometry = new THREE.PlaneGeometry(20, 20);
    //const mesh = new THREE.Mesh(geometry, material);

    const material = new THREE.MeshBasicMaterial({ map: placeholderTexture });
    const mesh = new THREE.Mesh(geometry, material);

    const phi = Math.acos(-1 + (2 * i) / imageCount);
    const theta = Math.sqrt(imageCount * Math.PI) * phi;
    mesh.position.setFromSphericalCoords(radius, phi, theta);

    mesh.lookAt(0, 0, 0);
    sphereGroup.add(mesh);

    textureLoader.load(
      props.images[i % props.images.length],
      (texture: any) => {
        material.map = texture;
        material.needsUpdate = true;
      }
    );
  }

  scene.add(sphereGroup);

  const controls = new OrbitControls(camera, renderer.domElement);
  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0;

  controls.enableZoom = isTouchDevice;

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
      const clicked = intersects[0].object;
      const img = clicked.material.map.image;
      emit('image-click', img.src);
    }
  }
  window.addEventListener('click', onClick);

  // 滚动放大动画
  window.addEventListener('scroll', onScroll);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  function onScroll() {
    const scrollY = window.scrollY;
    const targetScale = Math.min(2.5, 1 + scrollY / 800);
    gsap.to(sphereGroup.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: 0.5
    });
  }
  animate();

  onUnmounted(() => {
    window.removeEventListener('click', onClick);
    window.removeEventListener('scroll', onScroll);

    // 释放所有 mesh 的纹理、材质、几何体
    sphereGroup.children.forEach((mesh: any) => {
      if (mesh.material.map) {
        mesh.material.map.dispose();
      }
      mesh.material.dispose();
      mesh.geometry.dispose();
    });

    // 移除 group
    scene.remove(sphereGroup);

    // 销毁渲染器
    renderer.dispose();
  });
});
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
