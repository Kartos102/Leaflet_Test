import { defineStore } from 'pinia';
import { LocationType } from 'src/components/models';

export const useLocationStore = defineStore('location', {
  state: () => ({
    locations: [] as LocationType[],
    selectedLocation: {} as LocationType,
  }),
  actions: {
    addLocation(location: LocationType) {
      this.locations.push(location);
    },
    selectLocation(index: number) {
      this.selectedLocation = this.locations[index];
    },
  },
});
