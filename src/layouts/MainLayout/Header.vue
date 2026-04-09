<template>
  <div class="header" :class="{ 'dark-theme': isDarkTheme, 'scrolled': isScrolled }">
    <RouterLink to="/" class="logo-link">
      <Logo />
    </RouterLink>

    <div class="menus">
      <div
        class="menu-item-wrapper"
        v-for="item in menus"
        :key="item.name"
        @click="gotoHandler(item.href)"
      >
        <span class="menu-item" :class="{ 'active': route.path === item.href }">
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
import { computed, watch, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router/index.ts';

const route = useRoute();
const isScrolled = ref(false);

const [isVisible, onVisibleChange] = useVisible();
const isDarkTheme = useDarkTheme(isVisible);
const paths = computed(() => menus.map((m) => m.href));

const gotoHandler = (path: string) => {
  router.push(path);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

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
  height: 7.2rem;
  padding: 0 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all var(--transition-base);
  background: transparent;
}

.header.scrolled {
  height: 6.4rem;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-lg);
}

.header.dark-theme {
  background-color: var(--color-background);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);

  .menu-item {
    color: #fff;
  }

  .menu-item-wrapper:hover {
    .menu-item {
      color: var(--color-accent);
    }
  }
}

.logo-link {
  transition: transform var(--transition-fast);
}

.logo-link:hover {
  transform: scale(1.05);
}

.menus {
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .menu-item-wrapper {
    height: 7.2rem;
    display: flex;
    align-items: center;
    color: var(--color-primary);
    transition: height var(--transition-base);
    cursor: pointer;

    &.about-us:hover {
      .sub-menus {
        display: block;
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }

    &:hover .menu-item {
      color: var(--color-accent);

      &::after {
        width: 100%;
      }
    }
  }

  .header.scrolled & .menu-item-wrapper {
    height: 6.4rem;
  }

  .menu-item {
    margin: 0 1.6rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: color var(--transition-fast);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.8rem;
      left: 0;
      width: 0;
      height: 0.2rem;
      transition: width var(--transition-base);
      background: linear-gradient(90deg, var(--color-accent), #3b82f6);
      border-radius: 0.2rem;
    }

    &.active {
      color: var(--color-accent);

      &::after {
        width: 100%;
      }
    }
  }
}

.sub-menus {
  display: none;
  opacity: 0;
  width: 14rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-1rem);
  padding: 1.2rem 0;
  box-shadow: var(--shadow-xl);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  color: var(--color-primary);
  transition: all var(--transition-base);
  margin-top: 0.8rem;

  .sub-menu-item {
    padding: 1.2rem 2.4rem;
    display: block;
    font-size: 1.4rem;
    width: 100%;
    color: var(--color-primary);
    font-weight: 500;
    transition: all var(--transition-fast);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 0.3rem;
      background: var(--color-accent);
      transform: scaleY(0);
      transition: transform var(--transition-fast);
    }

    &:hover {
      background: rgba(37, 99, 235, 0.08);
      color: var(--color-accent);
      padding-left: 2.8rem;

      &::before {
        transform: scaleY(1);
      }
    }
  }
}
</style>
