import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "posts_list",
      component: () =>
        import(/* webpackChunkName: "posts_list" */ "./views/Post/List.vue")
    },
    {
      path: "/photos",
      name: "photos_list",
      component: () => import("./views/Photos/List.vue")
    }
  ]
});
