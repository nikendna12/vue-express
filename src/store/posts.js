import PostAPI from "../api/post";

const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";

export default {
  namespaced: true,
  state: {
    loading: false,
    items: [],
    error: null
  },
  mutations: {
    [FETCH_POSTS_BEGIN](state) {
      state.loading = true;
    },
    [FETCH_POSTS_SUCCESS](state, payload) {
      state.loading = false;
      state.items = payload.posts;
    },
    [FETCH_POSTS_FAILED](state, payload) {
      state.loading = false;
      state.error = payload.error;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      commit(FETCH_POSTS_BEGIN);

      try {
        const { data } = await PostAPI.all();

        commit(FETCH_POSTS_SUCCESS, {
          posts: data
        });
      } catch (error) {
        commit(FETCH_POSTS_FAILED, {
          error: error.response ? error.response : error
        });
      }
    }
  }
};
