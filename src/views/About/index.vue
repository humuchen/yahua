<template>
  <!-- <Banner
    id="join"
    title="走进亚华"
    subtitle="专业从事大型化工装备设计、制造与服务"
    :src="bannerPic"
  /> -->

  <div class="header">
    <h1>江苏亚华化工装备有限公司</h1>
    <p>专业从事大型化工装备设计、制造与服务</p>
  </div>

  <div class="container">
    <!-- 公司概况 -->
    <div class="section">
      <h2 class="section-title">公司概况</h2>
      <div class="content-grid">
        <div class="card">
          <h3>企业背景</h3>
          <p>
            江苏亚华化工装备有限公司隶属于南通亚华船舶制造集团有限公司。集团始建于2002年，是一家集设计、制造、服务于一体的专业企业，致力于为国内外客户提供高质量的装备和服务。
          </p>
        </div>
        <div class="card">
          <h3>战略定位</h3>
          <p>
            公司发展方向是大型化工装备制造，致力于大型A1、A2化工装备的设计、制造与服务，开发高端材料制品及新型化工、能源装备的生产，力争在化工装备制造行业取得新的辉煌。
          </p>
        </div>
      </div>
    </div>

    <!-- 主要指标 -->
    <div class="section">
      <h2 class="section-title">主要指标</h2>
      <div class="stats">
        <div class="stat-item">
          <div class="number">8000万</div>
          <div class="label">固定资产</div>
        </div>
        <div class="stat-item">
          <div class="number">81515㎡</div>
          <div class="label">占地面积</div>
        </div>
        <div class="stat-item">
          <div class="number">35476㎡</div>
          <div class="label">厂房面积</div>
        </div>
        <div class="stat-item">
          <div class="number">180人</div>
          <div class="label">现有员工</div>
        </div>
      </div>
    </div>

    <!-- 生产能力 -->
    <div class="section">
      <h2 class="section-title">生产能力</h2>
      <div class="capabilities">
        <div class="capability-item">
          <strong>压力容器</strong>
          <p>年生产能力<br />5000吨</p>
        </div>
        <div class="capability-item">
          <strong>钢结构产品</strong>
          <p>年生产能力<br />10000吨</p>
        </div>
        <div class="capability-item">
          <strong>起吊能力</strong>
          <p>当前100吨<br />规划300吨</p>
        </div>
      </div>
    </div>

    <!-- 主要设备 -->
    <div class="section">
      <h2 class="section-title">主要设备</h2>
      <div class="equipment-grid">
        <div class="equipment-item">
          <strong>数控等离子切割机</strong>
        </div>
        <div class="equipment-item">
          <strong>数控卷板机</strong>
          <p>90mm×3200mm</p>
        </div>
        <div class="equipment-item">
          <strong>400吨冷弯机 & 630吨油压机</strong>
        </div>
        <div class="equipment-item">
          <strong>新型焊接设备 & 涂装设备</strong>
        </div>
      </div>
    </div>

    <!-- 技术团队 -->
    <div class="section">
      <h2 class="section-title">技术团队</h2>
      <div class="content-grid">
        <div class="card">
          <h3>工程技术人员</h3>
          <p>
            拥有化工机械、焊接、材料、机械制造等专业的高级工程师、工程师、助理工程师共25名
          </p>
        </div>
        <div class="card">
          <h3>特种作业人员</h3>
          <p>
            持证无损检测人员4名、持证焊工20名，以及131名训练有素、技术精湛的特种作业人员
          </p>
        </div>
      </div>
    </div>

    <!-- 资质认证 -->
    <div class="section">
      <h2 class="section-title">资质认证</h2>
      <div class="honors-list">
        <div class="honor-item">
          <strong>特种设备制造许可证</strong>
          <p>A1、A2级</p>
        </div>
        <div class="honor-item">
          <strong>特种设备设计许可证</strong>
          <p>A2级</p>
        </div>
      </div>
    </div>

    <!-- 地理优势 -->
    <div class="section">
      <h2 class="section-title">地理位置与运输优势</h2>
      <div class="content-grid">
        <div class="card">
          <h3>地理位置</h3>
          <p>
            位于滨江临海的南通市港闸区，毗邻沿海高速、宁启高速和204国道，具有得天独厚的地理优势。
          </p>
        </div>
        <div class="card">
          <h3>运输条件</h3>
          <p>
            厂区内建有自备码头，能接卸2000吨的运输船舶，自备码头距离长江5公里，距离长江入海口约100公里，运输路线通江达海。
          </p>
        </div>
      </div>
    </div>

    <!-- 荣誉与成就 -->
    <div class="section">
      <h2 class="section-title">集团公司荣誉与成就</h2>
      <div class="honors-list">
        <div class="honor-item">南通市"小巨人"企业称号</div>
        <div class="honor-item">南通市港闸区20强民营企业</div>
        <div class="honor-item">江苏省船舶工业优先扶持重点企业</div>
        <div class="honor-item">江苏名优企业</div>
        <div class="honor-item">南通市"十一五"优秀民营企业</div>
        <div class="honor-item">市区工业规模攀升先进企业</div>
        <div class="honor-item">企业纳税大户</div>
        <div class="honor-item">最具有爱心慈善捐赠企业</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/components/Banner/index.vue';
</script>

<style scoped>
.header {
  background: var(--color-background);
  color: var(--color-primary);
  padding: 60px 20px;
  text-align: center;
}
.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1.4rem;
  opacity: 0.9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 2rem;
  color: #1e3c72;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #2a5298;
  display: inline-block;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #2a5298;
}

.card h3 {
  color: #1e3c72;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.card p {
  color: #555;
  line-height: 1.8;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.stat-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.stat-item .number {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-item .label {
  font-size: 1.2em;
  opacity: 0.9;
}

.capabilities {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.capability-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.capability-item strong {
  color: #2a5298;
  display: block;
  margin-bottom: 8px;
}

.honors-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.honor-item {
  background: #e8f4f8;
  padding: 15px;
  border-radius: 6px;
  border-left: 3px solid #17a2b8;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.equipment-item {
  padding: 15px;
  background: #f0f7ff;
  border-radius: 6px;
}

.equipment-item strong {
  color: #1e3c72;
}

.card p,
.capability-item strong,
.capability-item p,
.equipment-item strong,
.equipment-item p,
.honor-item {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .capabilities {
    grid-template-columns: 1fr;
  }

  .honors-list {
    grid-template-columns: 1fr;
  }

  .equipment-grid {
    grid-template-columns: 1fr;
  }

  .header h1 {
    font-size: 2em;
  }
}
</style>
