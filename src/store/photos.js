import PhotosAPI from "../api/photos";

const FETCH_PHOTOS_BEGIN = "FETCH_PHOTOS_BEGIN";
const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
const FETCH_PHOTOS_FAILED = "FETCH_PHOTOS_FAILED";

export default {
  namespaced: true,
  state: {
    loading: false,
    items: [],
    error: null
  },
  mutations: {
    [FETCH_PHOTOS_BEGIN](state) {
      state.loading = true;
    },
    [FETCH_PHOTOS_SUCCESS](state, payload) {
      state.loading = false;
      state.items = payload.photos;
    },
    [FETCH_PHOTOS_FAILED](state, payload) {
      state.loading = false;
      state.error = payload.error;
    }
  },
  actions: {
    async fetchPhotos({ commit }) {
      commit(FETCH_PHOTOS_BEGIN);
      try {
        const { data } = await PhotosAPI.all();

        commit(FETCH_PHOTOS_SUCCESS, {
          photos: data
        });
      } catch (error) {
        commit(FETCH_PHOTOS_FAILED, {
          error: error.response ? error.response : error
        });
      }
    }
  }
};
