<<template>
  <div>
    <h1>Photos</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div
      v-else
      v-bind:key="index"
      v-for="(photo, index) in photos.slice(0, 5)"
      class="card"
    >
      <img :src="photo.thumbnailUrl" />
      <h3>{{ photo.title }}</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
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
