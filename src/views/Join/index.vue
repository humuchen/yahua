<template>
  <Banner
    id="join"
    title="亚华化工装备"
    subtitle="致力于化工装备 大型钢结构件的制造及开发"
    :src="bannerPic"
  />

  <div class="job-module">
    <div class="job-module-wrapper">
      <div class="job-module-title">
        <span class="text">探索你感兴趣的职位板块</span>
      </div>
      <div class="job-module-content">
        <div class="job-card" v-for="item in jobs" :key="item.title">
          <span class="clamp-content job-title">
            <span class="text">{{ item.title }}</span>
          </span>
          <p class="job-des">
            <span class="clamp-content" style="max-width: calc(100% - 20px)">
              <span class="text">
                <span>{{ item.number }} 个</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <BasicComponentSection
    title="亚华价值观"
    desc="亚华同学们在面临选择时，心中的准则和信念；也是亚华内部个人或组织行为的内在驱动力。"
  >
    <SlideSwiper :options="jiazhiguan" />
  </BasicComponentSection>

  <BasicComponentSection
    title="亚华保障"
    desc="确保员工在全球市场上享有富有竞争力的薪酬和多元福利体系"
  >
    <Grid columns="3" item-width="41.8rem" gap="3.2rem">
      <div class="content-item" v-for="item in contents" :key="item.name">
        <ScalableImage :src="item.pictureUrl" />
        <div class="mask"></div>
        <div class="name">
          {{ item.name }}
          <span class="sub-content">{{ item.desc }}</span>
        </div>
      </div>
    </Grid>
  </BasicComponentSection>

  <BasicComponentSection
    title="亚华关怀"
    desc="落实落细多样关怀，持续提高每一位员工的获得感和幸福感"
  >
    <CardSwiper :options="guanhuai" />
  </BasicComponentSection>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner/index.vue';
import SlideSwiper from '@/components/SlideSwiper/SlideSwiper.vue';
import BasicComponentSection from '@/components/BasicComponentSection/index.vue';
import CardSwiper from '@/components/CardSwiper/CardSwiper.vue';
import Grid from '@/components/Grid/Grid.vue';
import ScalableImage from '@/components/ScalableImage/ScalableImage.vue';
import { jobs, jiazhiguan, guanhuai, contents } from './resources';
import bannerPic from '@/assets/banner.jpg';
</script>

<style scoped>
.job-module {
  background-color: rgb(243, 247, 249);
  min-height: 28.75rem;

  .job-module-wrapper {
    padding: 3.375rem 15rem;
  }

  .job-module-title {
    font-size: 3.8rem;
    font-weight: 400;
    text-align: center;

    .text {
      display: inline-block;
      word-break: break-word;
      color: rgb(0, 0, 0, 1);
      font-size: 3.8rem;
      font-weight: bolder;
      font-style: initial;
      font-style: initial;
    }
  }

  .job-module-content {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    padding: 3.375rem 0;

    .job-card {
      background-color: rgb(255, 255, 255);
      border: 1px solid transparent;
      box-sizing: border-box;
      padding: 0.75rem;
      width: 100%;
      max-width: 37.5rem;
      overflow: hidden;
      padding: 2.95rem 2.25rem;
      border-radius: 0.75rem;
      box-shadow:
        0px 4px 16px 4px rgba(31, 35, 41, 0.03),
        0px 4px 8px rgba(31, 35, 41, 0.02),
        0px 2px 4px -4px rgba(31, 35, 41, 0.02);

      &:hover {
        outline: 2px solid #105aba;
      }
    }
    .clamp-content {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
      white-space: nowrap;

      .text {
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        font-weight: bolder;
        font-style: initial;
        text-decoration: initial;
      }
    }
    .job-title {
      max-width: 100%;
      color: #1f2329;
      font-size: 1.85rem;
      font-weight: 500;
      line-height: 1.75rem;
      overflow: hidden;

      .text {
        font-size: 1.55rem;
      }
    }

    .job-des {
      -ms-flex-align: center;
      align-items: center;
      color: #646a73;
      display: -ms-flexbox;
      display: flex;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.5rem;
      margin-top: var(--gap-space);
      .text {
        font-size: 1.5rem;
        color: rgb(100, 106, 115);
      }
    }
  }
}

.slide-swiper,
.card-swiper {
  padding: 0;
}

.content-item {
  .name {
    position: absolute;
    bottom: 2.4rem;
    left: 3.2rem;
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
  }

  .sub-content {
    display: none;
    margin-top: 0.16rem;
    padding-right: 1.95rem;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(
      top,
      rgba(11, 20, 36, 0.77),
      rgba(13, 30, 65, 0) 43.72%
    );
    background: linear-gradient(
      180deg,
      rgba(11, 20, 36, 0.77),
      rgba(13, 30, 65, 0) 43.72%
    );
    -webkit-transform: matrix(1, 0, 0, -1, 0, 0);
    -ms-transform: matrix(1, 0, 0, -1, 0, 0);
    transform: matrix(1, 0, 0, -1, 0, 0);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
}

.content-item:hover .mask {
  background: rgba(0, 0, 0, 0.6);
}

.content-item:hover .sub-content {
  display: inline-block;
}
</style>
