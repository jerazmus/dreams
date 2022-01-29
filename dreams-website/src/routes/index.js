import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/HomePage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    }   
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});

export default router;
