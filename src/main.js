import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueContentPlaceholders from "vue-content-placeholders";
import Meta from "vue-meta";

Vue.use(Meta);
Vue.use(VueContentPlaceholders);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
