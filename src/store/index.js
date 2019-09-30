import Vue from "vue";
import Vuex from "vuex";
import posts from "./posts";
import photos from "./photos";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    posts: posts,
    photos: photos
  }
});

export default store;
