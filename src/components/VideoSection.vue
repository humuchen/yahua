<template>
  <div class="video-section">
    <!-- 加载中的占位提示 -->
    <div v-if="!isFirstVideoReady" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>

    <Swiper.Container
      ref="swiperRef"
      :interval="8000"
      :pause-on-hover="true"
      style="height: 100vh"
      @change="onSlideChange"
    >
      <Swiper.Item v-for="(item, index) in videos" :key="item.title">
        <img
          v-if="item.pictureUrl"
          :src="item.pictureUrl"
          class="banner"
          alt=""
        />
        <!-- 只有当前和相邻的视频才加载 -->
        <video
          v-else-if="item.src && shouldLoadVideo(index)"
          :src="item.src"
          :ref="(el) => setVideoRef(el, index)"
          :poster="item.poster"
          :preload="index === current ? 'auto' : 'metadata'"
          class="banner"
          :class="{ ready: loadedVideos.has(index) }"
          autoplay
          muted
          loop
          playsinline
          @canplay="onVideoCanPlay(index)"
          @loadeddata="onVideoLoaded(index)"
        />
        <!-- 未加载的视频显示封面占位 -->
        <div
          v-else-if="item.src && !shouldLoadVideo(index)"
          class="banner video-placeholder"
          :style="item.poster ? { backgroundImage: `url(${item.poster})` } : {}"
        />
        <div class="content-wrapper">
          <div class="title" v-html="item.title" />
        </div>
      </Swiper.Item>
    </Swiper.Container>

    <Grid :columns="videos.length" gap="0.4rem" class="dots">
      <div
        class="dot-item"
        :key="item.title"
        v-for="(item, index) in videos"
        @click="swiperRef.goTo(index)"
      >
        <div class="line" :class="{ active: index === current }" />
      </div>
    </Grid>
  </div>
</template>

<script setup>
import * as Swiper from '@/components/Swiper';
import { ref, computed, onMounted, nextTick } from 'vue';
import Grid from '@/components/Grid/Grid.vue';
import video1 from '../../public/image/video1.mp4';
import video2 from '../../public/image/video2.mp4';
import video3 from '../../public/image/video3.mp4';

const videos = [
  {
    src: video3,
    title: '科技创新，启航未来',
    poster: '' // 可以添加视频封面图 URL
  },
  {
    src: video2,
    title: '探索智能，连接世界',
    poster: ''
  },
  {
    src: video1,
    title: '创意视觉，展现无限',
    poster: ''
  }
];

const current = ref(0);
const swiperRef = ref();
const videoRefs = ref(Array(videos.length));
const loadedVideos = ref(new Set());
const isFirstVideoReady = ref(false);

// 设置视频引用
function setVideoRef(el, index) {
  if (el) {
    videoRefs.value[index] = el;
  }
}

// 判断是否应该加载视频（当前、前一个、后一个）
function shouldLoadVideo(index) {
  const diff = Math.abs(index - current.value);
  // 加载当前和相邻的视频（考虑循环）
  return diff <= 1 || diff === videos.length - 1;
}

// 视频可以播放时触发
function onVideoCanPlay(index) {
  if (index === 0 && !isFirstVideoReady.value) {
    isFirstVideoReady.value = true;
  }
}

// 视频数据加载完成
function onVideoLoaded(index) {
  loadedVideos.value.add(index);
}

// 轮播切换事件
function onSlideChange(index) {
  current.value = index;

  // 重置当前视频播放时间
  const currentVideo = videoRefs.value[index];
  if (currentVideo) {
    currentVideo.currentTime = 0;
    // 确保播放
    currentVideo.play().catch(() => {
      // 自动播放被阻止时静默处理
    });
  }

  // 暂停其他视频以节省资源
  videoRefs.value.forEach((video, i) => {
    if (video && i !== index) {
      video.pause();
    }
  });
}

// 组件挂载后，预加载下一个视频
onMounted(() => {
  // 使用 requestIdleCallback 在空闲时预加载其他视频
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // 预热下一个视频
      const nextIndex = (current.value + 1) % videos.length;
      if (videoRefs.value[nextIndex]) {
        videoRefs.value[nextIndex].load();
      }
    });
  }
});
</script>

<style scoped>
.dots {
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  gap: 1.2rem;

  .dot-item {
    width: 6rem;
    height: 4.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-fast);

    &:hover {
      transform: scale(1.1);
    }

    .line {
      width: 4.8rem;
      height: 0.4rem;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 0.2rem;
      transition: all var(--transition-base);
      overflow: hidden;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, var(--color-accent), #3b82f6);
        transform: translateX(-100%);
        transition: transform var(--transition-base);
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 2rem rgba(37, 99, 235, 0.3);

        &::before {
          transform: translateX(0);
        }
      }
    }
  }
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.content-wrapper {
  position: absolute;
  left: 12%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  max-width: 60rem;
  animation: slideInUp 0.8s var(--transition-base) 0.3s both;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(-50%);
    }
  }

  .x {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: inline-block;
    left: 0;
    top: 0;
    transform: translate(-100%, -30%);
  }

  .title {
    color: #fff;
    font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 4.8rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
    line-height: 1.3;
    text-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.4);
  }
}

.video-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.6) 0%,
    rgba(30, 58, 138, 0.4) 50%,
    rgba(15, 23, 42, 0.7) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.loading-spinner {
  width: 6rem;
  height: 6rem;
  border: 0.3rem solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  box-shadow: 0 0 2rem rgba(37, 99, 235, 0.3);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.video-placeholder {
  background-color: #0f172a;
  background-size: cover;
  background-position: center;
}

video.banner {
  opacity: 0;
  transition: opacity var(--transition-base);
}

video.banner.ready {
  opacity: 1;
}
</style>
