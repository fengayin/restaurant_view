import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'Ordering',
  },
  {
    path: '/ordering',
    name: 'Ordering',
    component:() => import("../views/Ordering.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
