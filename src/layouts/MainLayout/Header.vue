<template>
  <div class="header" :class="{ 'dark-theme': isDarkTheme }">
    <RouterLink to="/">
      <Logo />
    </RouterLink>

    <div class="menus">
      <div
        class="menu-item-wrapper"
        v-for="item in menus"
        :key="item.name"
        @click="gotoHandler(item.href)"
      >
        <span class="menu-item">
          {{ item.name }}
        </span>
      </div>
      <div class="menu-item-wrapper about-us" v-if="subMenus.length">
        <a class="menu-item">关于我们</a>
        <div class="sub-menus">
          <a
            class="sub-menu-item"
            v-for="item in subMenus"
            :key="item.name"
            :href="item.href"
            target="_blank"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Icons/Logo.vue';
import { menus, subMenus } from './const.ts';
import { useDarkTheme, useVisible } from './helpers.ts';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router/index.ts';

const route = useRoute();

const [isVisible, onVisibleChange] = useVisible();
const isDarkTheme = useDarkTheme(isVisible);
const paths = computed(() => menus.map((m) => m.href));

const gotoHandler = (path: string) => {
  router.push(path);
};

watch(
  () => route.path,
  (val: string) => {
    onVisibleChange(paths.value.includes(val));
  },
  {
    immediate: true
  }
);
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 98;
  height: 5.6rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.dark-theme {
    background-color: var(--color-background);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);

    .menu-item,
    .btn {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }

    .menu-item-wrapper:hover {
      .menu-item {
        color: var(--color-primary);
      }
    }
  }
}

.menus {
  display: flex;
  align-items: center;
  padding-left: 12rem;

  .menu-item-wrapper {
    height: 5.6rem;
    display: flex;
    align-items: center;
    color: var(--color-primary);

    &.about-us:hover {
      .sub-menus {
        display: unset;
      }
    }

    &:hover .menu-item {
      color: hsla(0, 0%, 100%, 0.6);

      &::after {
        max-width: 100%;
      }
    }
  }

  .menu-item {
    margin: 0 2.8rem;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.4rem;
    color: #fff;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      max-width: 0;
      height: 0.2rem;
      margin-bottom: 0.1rem;
      transition: max-width 0.1s ease-in-out;
      background-color: var(--color-primary);
    }
  }
}

.sub-menus {
  display: none;
  width: 11.2rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 0.8rem 0;
  box-shadow: 0 0.4rem 0.3rem rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
  background-color: #fff;
  color: #000;

  .sub-menu-item {
    padding: 1.2rem 2.1rem;
    display: inline-block;
    font-size: 1.4rem;
    width: 100%;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
