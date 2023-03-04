<script setup lang="ts">
import { ref } from 'vue';
import { useLocationStore } from 'src/stores/location';
import { LocationType } from 'src/components/models';

const location = ref<string>('');
const desc = ref<string>('');
const lati = ref<number>();
const long = ref<number>();

const locationStore = useLocationStore();

const { addLocation } = locationStore;

const handleSubmit = () => {
  const newLocation = {
    location: location.value,
    desc: desc.value,
    lati: lati.value,
    long: long.value,
  } as LocationType;

  addLocation(newLocation);

  locationStore.selectedLocation = newLocation;
  formatForm();
};

const formatForm = () => {
  location.value = '';
  desc.value = '';
  lati.value = undefined;
  long.value = undefined;
};
</script>
<template>
  <q-card class="q-pa-md q-mx-sm full-height">
    <q-card-section>
      <div class="text-h6">Location Name</div>
      <q-input outlined v-model="location" dense>
        <template v-slot:append>
          <q-icon name="location_city"></q-icon>
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Description</div>
      <q-input v-model="desc" type="textarea" outlined autogrow dense>
        <template v-slot:append>
          <q-icon name="description"></q-icon>
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Latitude</div>
      <q-input outlined v-model="long" dense type="number">
        <template v-slot:append>
          <q-icon name="location_on"></q-icon>
        </template>
      </q-input>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Longitude</div>
      <q-input outlined v-model="lati" dense type="number">
        <template v-slot:append>
          <q-icon name="location_on"></q-icon>
        </template>
      </q-input>
    </q-card-section>
    <q-card-actions>
      <q-space />
      <q-btn
        color="primary"
        label="Submit"
        @click="handleSubmit"
        :disable="!location || !desc || !lati || !long"
      />
    </q-card-actions>
  </q-card>
</template>
