<template>
  <div class="header">
    <h1>产品中心</h1>
    <p>探索我们的产品范围，满足您的需求</p>
  </div>
  <div class="container">
    <div class="nav">
      <div class="nav-container">
        <template v-for="item in NavList" :key="item.value">
          <button
            class="nav-btn"
            :class="{ active: item.value === activeNav }"
            @click="navHandler(item.value)"
          >
            {{ item.label }}
          </button>
        </template>
      </div>
    </div>

    <div class="container">
      <div :class="['category-section', 'active']">
        <h2 class="section-title">{{ currentProducts?.title }}</h2>
        <p style="margin-bottom: 30px; color: #666">
          {{ currentProducts?.desc }}
        </p>
        <div class="products-grid">
          <div class="product-card" v-for="item in currentProducts?.items">
            <div class="product-image">{{ item.img }}</div>
            <div class="product-content">
              <div class="product-name">{{ item.title }}</div>
              <div class="product-desc">{{ item.desc }}</div>
              <div class="product-specs">
                <div class="product-spec-item" v-for="spec in item.specs">
                  <strong>
                    {{ spec.title }}
                  </strong>
                  {{ spec.desc }}
                </div>
              </div>
              <button class="btn-details" @click="showModal(item.title)">
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" @click="visible = false" v-show="visible">
    <div class="modal-content" @click="(e) => e.stopPropagation()">
      <button class="close-btn" @click="visible = false">&times;</button>
      <h2 class="modal-title">
        {{ modalItem?.title }}
      </h2>

      <div class="modal-section">
        <h3>产品概述</h3>
        <p>{{ modalItem?.overview }}</p>
      </div>

      <div class="modal-section">
        <h3>技术参数</h3>
        <p id="modalSpecs">{{ modalItem?.specs }}</p>
      </div>

      <div class="modal-section">
        <h3>应用领域</h3>
        <p id="modalApplication">{{ modalItem?.application }}</p>
      </div>

      <div class="modal-section">
        <h3>我们的优势</h3>
        <p id="modalAdvantage">{{ modalItem?.advantage }}</p>
      </div>

      <div class="modal-section">
        <button class="btn-details" @click="contactUs">立即咨询</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { NavList, NavItems, productData } from './product';

const activeNav = ref('pressure');
const visible = ref(false);

const currentProducts = computed(() => {
  return NavItems.get(activeNav.value);
});

const modalItem = ref();

const navHandler = (key: string) => {
  activeNav.value = key;
};
const showModal = (title: string) => {
  modalItem.value = productData[title];
  visible.value = true;
};

const contactUs = () => {
  alert(
    '感谢您的咨询！\n\n联系方式：\n电话：0513-80779670\n邮箱：info@yahua.com\n地址：南通市港闸区\n\n我们的工作人员将尽快与您联系。'
  );
};
</script>

<style scoped>
.header {
  background: var(--color-background);
  color: white;
  padding: 7rem 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.4rem;
  opacity: 0.9;
}

.nav {
  background: white;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  /* z-index: 100; */
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-btn {
  padding: 10px 20px;
  background: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s;
  color: #333;
  font-weight: 500;
}

.nav-btn:hover,
.nav-btn.active {
  background: var(--color-background);
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

.category-section {
  margin-bottom: 50px;
  display: none;
}

.category-section.active {
  display: block;
  animation: fadeIn 0.5s;
}

.category-section p {
  font-size: 1.6rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.section-title {
  font-size: 2rem;
  color: #1e3c72;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #2a5298;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.product-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 220px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
}

.product-content {
  padding: 20px;
}

.product-name {
  font-size: 1.6em;
  font-weight: bold;
  color: #1e3c72;
  margin-bottom: 10px;
}

.product-desc {
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.product-specs {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 5px;
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 15px;
}

.product-spec-item {
  margin-bottom: 8px;
}

.product-spec-item strong {
  color: var(--color-background);
  &::after {
    content: '：';
  }
}

.btn-details {
  background: var(--color-background);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.btn-details:hover {
  background: #1e3c72;
}

.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideDown 0.3s;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-btn {
  position: absolute;
  top: 1.125rem;
  right: 0.9375rem;
  width: 3rem;
  height: 3rem;
  font-size: 2.8rem;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
  border: none;
  background: none;
}

.close-btn:hover {
  color: #000;
}

.modal-title {
  color: #1e3c72;
  font-size: 2.5rem;
  margin-bottom: 20px;
  clear: both;
}

.modal-section {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.modal-section h3 {
  color: var(--color-background);
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8em;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .nav-container {
    flex-direction: column;
  }

  .nav-btn {
    width: 100%;
  }
}
</style>
