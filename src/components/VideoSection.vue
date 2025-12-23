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
/* .video-carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-swiper {
  width: 100%;
  height: 100%;
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 30%;
  left: 15%;
}

.video-title {
  color: #fff;
  font-size: 3.2rem;
  letter-spacing: 0.6rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
} */

.dots {
  position: absolute;
  bottom: 2.8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  .dot-item {
    width: 4.4rem;
    height: 4.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    .line {
      width: 4rem;
      height: 0.3rem;
      background-color: hsla(0, 0%, 100%, 0.3);
      transform: skewX(-30deg);

      &.active {
        background-color: var(--color-background);
      }
    }
  }
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  position: absolute;
  left: 15%;
  top: 30%;

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
    font-family: HYYakuHei, serif;
    font-size: 3.2rem;
    letter-spacing: 0.6rem;
    line-height: 1.5;
  }
}

/* 视频区域容器 */
.video-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* 加载中遮罩 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

/* 加载动画 */
.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 视频占位符 */
.video-placeholder {
  background-color: #1a1a2e;
  background-size: cover;
  background-position: center;
}

/* 视频加载完成渐显效果 */
video.banner {
  opacity: 0;
  transition: opacity 0.3s ease;
}

video.banner.ready {
  opacity: 1;
}
</style>
