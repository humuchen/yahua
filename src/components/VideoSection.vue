<!-- <template>
  <div class='video-wrapper'>
    <video ref='video' playsinline muted loop autoplay :poster='poster' style='width:100%;height:100%;object-fit:cover;border-radius:8px'>
      <source :src='videoSrc' type='video/mp4' />
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const videoSrc = '/src/assets/video/sample.mp4'
    const poster = '/src/assets/images/poster.jpg'
    const video = ref(null)
    return { videoSrc, poster, video }
  }
}
</script> -->

<template>
  <div class="video-carousel" style="--swiper-pagination-bullet-width:4.4rem;--swiper-pagination-bullet-height:0.2rem;--swiper-pagination-bullet-border-radius:0;--swiper-pagination-bullet-inactive-color:hsla(0, 0%, 100%, 0.3)">
    <swiper
      :modules="[Autoplay, EffectFade, Navigation, Pagination]"
      :autoplay="{ delay: 8000, disableOnInteraction: false }"
      :loop="true"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      effect="fade"
      class="video-swiper"
    >
      <swiper-slide v-for="(video, index) in videos" :key="index">
        <video
          class="video-player"
          :src="video.src"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <div class="video-overlay">
          <h1 class="video-title">{{ video.title }}</h1>
        </div>
      </swiper-slide>

      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  {
    src: "https://xps02.xiaopeng.com/cms/material/video/2023/01-06/video_20230106135720_85074.mp4",
    title: '科技创新，启航未来'
  },
  {
    src: "https://xps02.xiaopeng.com/cms/material/video/2023/06-29/video_20230629100416_00416.mp4",
    title: '探索智能，连接世界'
  },
  {
    src: "https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174751_66984.mp4",
    title: '创意视觉，展现无限'
  }
];
</script>

<style scoped>
.video-carousel {
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
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
}

.video-title {
  color: #fff;
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

</style>
