<template>
  <div>
    <Swiper.Container
      ref="swiperRef"
      :interval="8000"
      :pause-on-hover="false"
      style="height: 100vh"
      @change="
        (index) => {
          current = index;
          if (videoRefs[index]) {
            // 重置播放的时间点
            videoRefs[index].currentTime = 0;
          }
        }
      "
    >
      <Swiper.Item v-for="(item, index) in videos" :key="item.title">
        <img
          v-if="item.pictureUrl"
          :src="item.pictureUrl"
          class="banner"
          alt=""
        />
        <video
          v-else-if="item.src"
          :src="item.src"
          :ref="(el) => (videoRefs[index] = el)"
          class="banner"
          autoplay
          muted
          loop
        />
        <div class="content-wrapper">
          <!-- <XIcon class="x" /> -->
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
import { ref } from 'vue';
import Grid from '@/components/Grid/Grid.vue';

const videos = [
  {
    src: 'https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore-v2.mp4',
    title: '科技创新，启航未来'
  },
  {
    src: 'https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4',
    title: '探索智能，连接世界'
  },
  {
    src: 'https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174751_66984.mp4',
    title: '创意视觉，展现无限'
  }
];

const current = ref(0);
const swiperRef = ref();
const videoRefs = ref(Array(videos.length));
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
</style>
