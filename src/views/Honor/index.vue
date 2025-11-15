<template>
  <!-- <BasicComponentSection title="荣誉资质" class="basic-component-section">
    <Grid columns="3" item-width="31.8rem" gap="2.2rem">
      <div class="content-item" v-for="item in honors" :key="item.title">
        <ScalableImage :src="item.pictureUrl" />
        <div class="name">
          {{ item.title }}
        </div>
      </div>
    </Grid>
  </BasicComponentSection> -->
  <div class="header">
    <h1>荣誉资质</h1>
    <p>江苏亚华化工装备有限公司 - 专业认证与荣誉展示</p>
  </div>

  <div class="container">
    <div class="intro-card">
      <h2>质量第一，客户至上</h2>
      <p>
        江苏亚华化工装备有限公司获得多项国际认证和行业荣誉。我们坚持将质量置于第一选项，致力于为客户提供高质量的产品和完善的服务。凭借专业的技术团队、先进的制造工艺和严格的质量管理体系，我们在行业中树立了良好的信誉。
      </p>
    </div>

    <!-- 特种设备资质 -->
    <div class="section">
      <h2 class="section-title">🏆 特种设备资质</h2>
      <div class="certificates-grid">
        <div class="cert-card">
          <div class="cert-icon">📜</div>
          <div class="cert-name">A1级制造许可证</div>
          <div class="cert-desc">
            特种设备制造许可，覆盖大型压力容器、不同介质、不同工况的制造
          </div>
          <div class="cert-date">✓ 已认证</div>
        </div>

        <div class="cert-card">
          <div class="cert-icon">📜</div>
          <div class="cert-name">A2级制造许可证</div>
          <div class="cert-desc">
            特种设备制造许可，适用于中等压力容器及相关产品的制造
          </div>
          <div class="cert-date">✓ 已认证</div>
        </div>

        <div class="cert-card">
          <div class="cert-icon">🎓</div>
          <div class="cert-name">A2级设计许可证</div>
          <div class="cert-desc">
            特种设备设计许可，拥有独立进行A2级压力容器设计的资质
          </div>
          <div class="cert-date">✓ 已认证</div>
        </div>
      </div>
    </div>

    <!-- 国际认证 -->
    <div class="section">
      <h2 class="section-title">🌍 国际船级社认证</h2>
      <div class="certificates-grid">
        <div class="cert-card">
          <div class="cert-icon">⚓</div>
          <div class="cert-name">美国ABS认证</div>
          <div class="cert-desc">
            获得美国船级社(American Bureau of Shipping)质量认可
          </div>
          <div class="cert-date">质量可靠</div>
        </div>

        <div class="cert-card">
          <div class="cert-icon">⚓</div>
          <div class="cert-name">英国LR认证</div>
          <div class="cert-desc">获得英国船级社(Lloyd's Register)质量认可</div>
          <div class="cert-date">国际通行</div>
        </div>

        <div class="cert-card">
          <div class="cert-icon">⚓</div>
          <div class="cert-name">日本NK认证</div>
          <div class="cert-desc">
            获得日本船级社(Nippon Kaiji Kyokai)质量认可
          </div>
          <div class="cert-date">标准认证</div>
        </div>

        <div class="cert-card">
          <div class="cert-icon">⚓</div>
          <div class="cert-name">法国BV认证</div>
          <div class="cert-desc">获得法国船级社(Bureau Veritas)质量认可</div>
          <div class="cert-date">权威认证</div>
        </div>

        <div class="cert-card">
          <div class="cert-icon">⚓</div>
          <div class="cert-name">中国CCS认证</div>
          <div class="cert-desc">
            获得中国船级社(China Classification Society)质量认可
          </div>
          <div class="cert-date">国内权威</div>
        </div>
      </div>
    </div>

    <!-- 重点企业及荣誉 -->
    <div class="section">
      <h2 class="section-title">⭐ 企业荣誉与资质</h2>
      <div class="honors-grid">
        <div class="honor-item">
          <div class="honor-icon">🏅</div>
          <div class="honor-text">南通市"小巨人"企业</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">🏆</div>
          <div class="honor-text">南通市港闸区20强民营企业</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">🎯</div>
          <div class="honor-text">江苏省船舶工业优先扶持重点企业</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">⭐</div>
          <div class="honor-text">江苏名优企业</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">🎖️</div>
          <div class="honor-text">南通市"十一五"优秀民营企业</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">📈</div>
          <div class="honor-text">市区工业规模攀升先进企业</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">💰</div>
          <div class="honor-text">企业纳税大户</div>
        </div>

        <div class="honor-item">
          <div class="honor-icon">❤️</div>
          <div class="honor-text">最具有爱心慈善捐赠企业</div>
        </div>
      </div>
    </div>

    <!-- 企业成就统计 -->
    <div class="stats-section">
      <div class="stats-grid">
        <div class="stat">
          <div class="stat-number">6.2亿元</div>
          <div class="stat-label">集团公司总资产</div>
        </div>
        <div class="stat">
          <div class="stat-number">1000+</div>
          <div class="stat-label">集团员工总数</div>
        </div>
        <div class="stat">
          <div class="stat-number">10亿元+</div>
          <div class="stat-label">连续四年应税销售收入</div>
        </div>
        <div class="stat">
          <div class="stat-number">25项</div>
          <div class="stat-label">主要生产及质量认证</div>
        </div>
      </div>
    </div>

    <!-- 质量管理体系 -->
    <div class="section">
      <h2 class="section-title">📋 质量管理体系标准</h2>
      <div class="standards-grid">
        <div class="standard-card">
          <div class="standard-title">ISO 9001</div>
          <div class="standard-desc">
            质量管理体系认证，覆盖设计、制造、安装、调试全流程
          </div>
        </div>

        <div class="standard-card">
          <div class="standard-title">GB 50017</div>
          <div class="standard-desc">
            钢结构设计标准，确保钢结构产品的安全可靠性
          </div>
        </div>

        <div class="standard-card">
          <div class="standard-title">GB 50160</div>
          <div class="standard-desc">
            石油化工企业设计防火规范，严格遵循安全标准
          </div>
        </div>

        <div class="standard-card">
          <div class="standard-title">GB/T 1184</div>
          <div class="standard-desc">钢材几何公差标准，精度等级达到CT4级</div>
        </div>

        <div class="standard-card">
          <div class="standard-title">特种设备规范</div>
          <div class="standard-desc">严格执行《特种设备安全法》及相关规定</div>
        </div>

        <div class="standard-card">
          <div class="standard-title">国际标准</div>
          <div class="standard-desc">
            产品达到国际先进标准，符合ASME、EN等要求
          </div>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="section">
      <h2 class="section-title">📅 发展历程</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-year">2002年</div>
            <div class="timeline-text">
              南通亚华船舶制造集团成立，开始专业化工和船舶设备制造
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-year">2008年</div>
            <div class="timeline-text">
              实现应税销售收入超10亿元，成为行业翘楚
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-year">2012年</div>
            <div class="timeline-text">
              组建江苏亚华化工装备有限公司，实现多元化发展
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-year">2015-2020年</div>
            <div class="timeline-text">
              获得A1、A2级特种设备制造许可证及设计许可证
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-year">至今</div>
            <div class="timeline-text">
              持续创新发展，产品销往日本、新加坡、荷兰等多国
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 出口市场 -->
    <div class="section">
      <h2 class="section-title">🌐 国际出口市场</h2>
      <div class="section-cotent">
        <p>
          <span>🇯🇵 日本</span>
          <span>🇸🇬 新加坡</span>
          <span>🇲🇾 马来西亚</span>
          <span>🇮🇳 印度</span>
          <span>🇳🇱 荷兰</span>
          <span>🇭🇰 香港</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Grid from '@/components/Grid/Grid.vue';
// import ScalableImage from '@/components/ScalableImage/ScalableImage.vue';
// import BasicComponentSection from '@/components/BasicComponentSection/index.vue';
import { honors } from './resources';
</script>

<style scoped>
/* .basic-component-section {
  padding-top: 10rem;
}

.content-item {
  border: 1px solid #0b248d;
  border-radius: 4px;
  .name {
    position: absolute;
    bottom: 0;
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
    width: 100%;
    padding-left: 3.2rem;
    background: rgba(0, 0, 0, 0.3);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
} */

.header {
  background: var(--color-background);
  color: white;
  padding: 60px 20px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.header p {
  font-size: 1.4rem;
  opacity: 0.95;
}

.container {
  max-width: 1200px;
  margin: -30px auto 0;
  padding: 0 20px 40px;
  position: relative;
  z-index: 10;
}

.intro-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  text-align: center;
}

.intro-card h2 {
  color: #1e3c72;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.intro-card p {
  font-size: 1.3rem;
  color: #666;
  line-height: 1.8;
}

.section {
  margin-bottom: 50px;
}

.section-content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section p {
  font-size: 1.4rem;
  color: #666;
  line-height: 2;
  text-align: center;
}

.section p span {
  display: inline-block;
  margin: 10px 15px;
  padding: 10px 20px;
  background: #f0f7ff;
  border-radius: 5px;
  color: #2a5298;
  font-weight: 600;
}

.section-title {
  font-size: 2rem;
  color: #1e3c72;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 4px solid #2a5298;
  position: relative;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 4px;
  width: 60px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.cert-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 4px solid #2a5298;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.cert-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100px;
  height: 100px;
  background: rgba(42, 82, 152, 0.1);
  border-radius: 50%;
  transition: all 0.3s;
}

.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.cert-card:hover::before {
  top: -25%;
  right: -25%;
}

.cert-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.cert-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #1e3c72;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.cert-desc {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.cert-date {
  font-size: 1.1rem;
  color: #999;
  margin-top: 15px;
  position: relative;
  z-index: 1;
}

.honors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.honor-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.honor-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
}

.honor-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.6);
}

.honor-item:hover::after {
  opacity: 1;
}

.honor-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
  display: inline-block;
}

.honor-text {
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
  line-height: 1.6;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.standard-card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.standard-card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transform: translateX(5px);
}

.standard-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #1e3c72;
  margin-bottom: 10px;
}

.standard-desc {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.stats-section {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 50px 20px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1em;
  opacity: 0.9;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  margin-bottom: 30px;
  width: 45%;
}

.timeline-item:nth-child(odd) {
  margin-left: 0;
  text-align: right;
  padding-right: 5%;
}

.timeline-item:nth-child(even) {
  margin-left: 55%;
  text-align: left;
  padding-left: 5%;
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.timeline-year {
  font-weight: bold;
  color: #1e3c72;
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.timeline-text {
  color: #666;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .certificates-grid,
  .honors-grid,
  .standards-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    margin-left: 0 !important;
    padding-left: 60px !important;
    padding-right: 0 !important;
    text-align: left !important;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    width: 20px;
    height: 20px;
    background: #667eea;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #667eea;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
