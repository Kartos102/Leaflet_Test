<script setup lang="ts">
import { useLocationStore } from 'src/stores/location';

const locationStore = useLocationStore();

const { selectLocation } = locationStore;
</script>
<template>
  <q-card class="q-mx-sm full-height q-pt-md">
    <q-card-section>
      <div class="text-h6">Location List</div>
      <div v-if="locationStore.locations.length > 0">
        <q-item
          clickable
          class="shadow-4 q-my-md rounded-borders"
          v-ripple
          v-for="(location, index) in locationStore.locations"
          :key="index"
          @click="selectLocation(index)"
        >
          <q-item-section>
            <q-item-label>{{ location.location }}</q-item-label>
            <q-item-label caption
              >Longitude: {{ location.long }}, Latitude:
              {{ location.lati }}</q-item-label
            >
          </q-item-section>
          <q-tooltip class="text-body2" :offset="[10, 10]">
            {{ location.desc }}
          </q-tooltip>
        </q-item>
      </div>
      <div v-else class="text-subtitle2">There is no any location</div>
    </q-card-section>
  </q-card>
</template>
