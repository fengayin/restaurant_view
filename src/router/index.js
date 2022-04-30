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
  {
    path: '/menu',
    name: 'Menu',
    component:() => import("../views/Menu.vue"),
  },
  {
    path: '/order',
    name: 'Order',
    component:() => import("../views/Order.vue"),
    children:[
      {
          path: '/categoryCount',
          name: 'CategoryCount',
          component:() => import("../views/Count/CategoryCount.vue"),
      },
      {
        path: '/comboCount',
        name: 'ComboCount',
        component:() => import("../views/Count/ComboCount.vue"),
    },
    {
      path: '/foodCount',
      name: 'FoodCount',
      component:() => import("../views/Count/FoodCount.vue"),
    },
    {
      path: '/orderSumCount',
      name: 'OrderSumCount',
      component:() => import("../views/Count/OrderSumCount.vue"),
    },
    {
      path: '/optionalOrderSumCount',
      name: 'OptionalOrderSumCount',
      component:() => import("../views/Count/OptionalOrderSumCount.vue"),
    },
    ]
  },
//   {
//     path: '/foodCount',
//     name: 'FoodCount',
//     component:() => import("../views/FoodCount.vue"),
// },
  {
    path: '/kitchen',
    name: 'Kitchen',
    component:() => import("../views/Kitchen.vue"),
  },
  
  
];


const router = new VueRouter({
  mode:'history',
  routes,
});



export default router;
