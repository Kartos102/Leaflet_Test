<script setup lang="ts">
import GoogleMap from 'src/components/GoogleMap.vue';
import LocationSelector from 'src/components/LocationSelector.vue';
import LocationList from 'src/components/LocationList.vue';
</script>

<template>
  <div class="tite">
    <div class="text-center text-h4 q-mt-lg">Leaflet App Test</div>
  </div>
  <div class="row justify-center">
    <div class="col-10 col-md-6 order-first q-mt-lg">
      <google-map />
    </div>
    <div class="col-10 col-md-3 q-mt-lg">
      <location-selector />
    </div>
    <div class="col-10 col-md-3 q-mt-lg">
      <location-list />
    </div>
  </div>
</template>
