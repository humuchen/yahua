<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { footerLinks } from './const.ts';

const route = useRoute();
const paths = ['/service'];
const visible = computed(() => !paths.includes(route.path));
</script>

<template>
  <div class="footer" v-if="visible">
    <div class="footer-content">
      <div class="footer-left">
        <div class="website-list">
          <a
            v-for="item in footerLinks"
            :key="item.name"
            :href="item.href"
            target="_blank"
            class="item"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="record-info">
          <div class="copyright">©2013 江苏亚华集团 | 专业 · 创新 · 卓越</div>
          <div class="links">
            <a href="https://beian.miit.gov.cn" target="_blank">苏ICP备13040026号</a>
            <span class="separator">|</span>
            <a href="">营业执照</a>
          </div>
        </div>
      </div>

      <div class="footer-right">
        <div class="contact-section">
          <div class="media-info">
            <div class="social-item">
              <a class="media-item" href="" target="_blank" aria-label="微博">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </a>
            </div>
            <div class="weixin-wrapper">
              <a class="media-item" aria-label="微信">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
              <div class="weixin-popover">
                <div class="popover-title">微信</div>
                <img class="image-qrcode" src="" alt="微信二维码" />
              </div>
            </div>
          </div>
          <div class="phone-info">
            <span class="phone-label">亚华客服中心：</span>
            <a href="tel:0513-80779670" class="phone-number">0513-80779670</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  min-height: 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
  padding: 4rem 6rem;
  font-size: 1.4rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  color: rgba(255, 255, 255, 0.9);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.footer-content {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.footer-left {
  flex: 1;
}

.website-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  .item {
    padding: 0.8rem 1.6rem;
    line-height: 1.5;
    transition: all var(--transition-fast);
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    border-radius: var(--radius-sm);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(59, 130, 246, 0.1);
      transform: translateX(-100%);
      transition: transform var(--transition-base);
    }

    &:hover {
      color: var(--color-accent);

      &::before {
        transform: translateX(0);
      }
    }

    &:first-child {
      padding-left: 0;
    }
  }
}

.record-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.6);

  .copyright {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }

  .links {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      color: rgba(255, 255, 255, 0.6);
      transition: color var(--transition-fast);

      &:hover {
        color: var(--color-accent);
      }
    }

    .separator {
      color: rgba(255, 255, 255, 0.3);
    }
  }
}

.footer-right {
  flex-shrink: 0;
}

.contact-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-end;
}

.media-info {
  display: flex;
  align-items: center;
  gap: 2rem;

  .social-item,
  .weixin-wrapper {
    position: relative;
  }

  .media-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    transition: all var(--transition-fast);
    cursor: pointer;

    &:hover {
      background: var(--color-accent);
      color: white;
      transform: translateY(-0.2rem);
      box-shadow: 0 0.8rem 1.6rem rgba(37, 99, 235, 0.3);
    }
  }

  .weixin-wrapper:hover .weixin-popover {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-0.8rem);
  }

  .weixin-popover {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    bottom: 100%;
    box-shadow: var(--shadow-xl);
    width: 16rem;
    padding: 2rem 1.6rem;
    background: white;
    border-radius: var(--radius-md);
    transform: translateX(-50%) translateY(0);
    transition: all var(--transition-base);
    z-index: 10;

    .popover-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .image-qrcode {
      width: 100%;
      height: 12.8rem;
      background: #f1f5f9;
      border-radius: var(--radius-sm);
    }

    &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.6rem;
      margin: 0 auto;
      transform: rotate(45deg);
      box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    }
  }
}

.phone-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .phone-label {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }

  .phone-number {
    color: white;
    font-weight: 600;
    font-size: 1.8rem;
    transition: color var(--transition-fast);

    &:hover {
      color: var(--color-accent);
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 2rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 3rem;
  }

  .contact-section {
    align-items: flex-start;
  }
}
</style>
