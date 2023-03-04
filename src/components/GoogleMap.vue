<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocationStore } from 'src/stores/location';
import { isEmpty } from 'src/utils/isEmpty';

const locationStore = useLocationStore();

const zoom = ref<number>(10);
const latitude = computed(() => {
  if (!isEmpty(locationStore.selectedLocation)) {
    return locationStore.selectedLocation.lati;
  }
  return -31.95;
});

const longitude = computed(() => {
  if (!isEmpty(locationStore.selectedLocation)) {
    return locationStore.selectedLocation.long;
  }
  return 115.86;
});

const description = computed(() => {
  if (!isEmpty(locationStore.selectedLocation)) {
    return locationStore.selectedLocation.desc;
  }
  return 'Perth';
});

const location = computed(() => {
  if (!isEmpty(locationStore.selectedLocation)) {
    return locationStore.selectedLocation.location;
  }
  return 'Australia';
});
</script>

<template>
  <q-card class="q-pa-md q-mx-sm">
    <div style="height: 75vh; width: 100%">
      <l-map v-model="zoom" v-model:zoom="zoom" :center="[latitude, longitude]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker :lat-lng="[latitude, longitude]" draggable>
          <l-tooltip>
            <p>Location: {{ location }}</p>
            <p>Description: {{ description }}</p>
          </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </q-card>
</template>
