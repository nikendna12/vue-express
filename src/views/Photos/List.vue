<template>
  <div>
    <h1>Photos</h1>
    <div class="container">
      <div class="row" v-if="loading">
        <div class="col-md-4">
          <LoaderRounded />
        </div>
        <div class="col-md-4">
          <LoaderRounded />
        </div>
        <div class="col-md-4">
          <LoaderRounded />
        </div>
        <div class="col-md-4">
          <LoaderRounded />
        </div>
        <div class="col-md-4">
          <LoaderRounded />
        </div>
        <div class="col-md-4">
          <LoaderRounded />
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-md-4"
          v-bind:key="index"
          v-for="(photo, index) in photos.slice(0, 30)"
        >
          <div class="card">
            <img :src="photo.thumbnailUrl" />
            <h3>{{ photo.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderRounded from "../Loader/rounded.vue";

import { mapState } from "vuex";
export default {
  components: { LoaderRounded },
  computed: {
    ...mapState({
      photos: state => state.photos.items,
      loading: state => state.photos.loading
    })
  },
  mounted() {
    this.$store.dispatch("photos/fetchPhotos");
  }
};
</script>
