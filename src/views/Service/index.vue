<template>
  <div class="container">
    <AMap ref="mapRef" />
  </div>
</template>

<script setup lang="ts">
import AMap from '@/components/AMap/AMap.vue';
import { createApp, ref, watch } from 'vue';
import ServicePopover from './ServicePopover.vue';
import logo from '@/assets/logo.jpg';

const mapRef = ref<{ map: any }>();

const stores = [
  {
    id: 1,
    storeName: '江苏亚华化工装备有限公司',
    pictureUrl: logo,
    address: '南通市港闸区陈桥街道沿港路（荣盛路）8号',
    lng: 120.77539,
    lat: 32.102447,
    telephone: '0513-80779670',
    fax: '0513-85696288'
  }
];

const logoUrl = `url(${logo}) no-repeat 50%`;

watch(
  () => mapRef.value?.map,
  (map) => {
    const infoWindow = new window.AMap.InfoWindow({
      isCustom: true,
      closeWhenClickMap: true
    });

    const markers = stores.map((item) => {
      const marker: any = new window.AMap.Marker({
        position: new window.AMap.LngLat(item.lng, item.lat),
        content: '<div class="map-marker"/>'
      });

      let lastMarker: any;
      marker.on('click', async () => {
        if (lastMarker) {
          marker.setContent('<div class="map-marker"/>');
        }
        lastMarker = marker;
        map.panTo(marker.getPosition());
        marker.setContent('<div class="map-marker active"/>');
        const content = document.createElement('div');
        const app = createApp(ServicePopover, {
          ...item,
          infoWindow
        });
        app.mount(content);
        setTimeout(() => {
          infoWindow.setContent(content);
          infoWindow.open(map, marker.getPosition());
          infoWindow.on('close', () => {
            marker.setContent('<div class="map-marker"/>');
            app.unmount();
          });
        });
      });
      return marker;
    });

    // 加载点聚合插件
    map.plugin(['AMap.MarkerClusterer'], () => {
      new window.AMap.MarkerClusterer(map, markers, {
        zoomOnClick: true,
        renderClusterMarker({ marker, count }: { marker: any; count: number }) {
          marker.setContent(`<div class="map-marker-cluster">${count}</div>`);
        }
      });
      map.setFitView(markers);
    });
  }
);
</script>

<style scoped>
.container {
  width: 100vw;
  height: calc(100vh - 5.6rem);
  margin-top: 5.6rem;

  :deep(.map-marker-cluster) {
    height: 3.2rem;
    width: 3.3rem;
    line-height: 3.2rem;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    background: v-bind(logoUrl);
    background-size: cover;
  }

  :deep(.map-marker) {
    height: 3.2rem;
    width: 3.2rem;
    background: v-bind(logoUrl);
    background-size: cover;
    transition: 0.1s;
    border-radius: 50%;
  }

  :deep(.map-marker).active,
  :deep(.map-marker):hover {
    width: 4.2rem;
    height: 4.2rem;
    transform: translateX(-0.9rem) translateY(-1.5rem);
    background-image: v-bind(logoUrl);
    border-radius: 50%;
  }

  :deep(.amap-info) {
    transform: translate(1.4rem, -6.8rem);
  }

  :deep(.amap-info-contentContainer).bottom-center {
    padding-bottom: 0;
  }
}
</style>
