import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);




const routes = [
  {
    path: '/',
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component:() => import("../views/Login.vue"),
  // },
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
          path: '/order/categoryCount',
          name: 'CategoryCount',
          component:() => import("../views/Count/CategoryCount.vue"),
      },
      {
        path: '/order/comboCount',
        name: 'ComboCount',
        component:() => import("../views/Count/ComboCount.vue"),
    },
    {
      path: '/order/foodCount',
      name: 'FoodCount',
      component:() => import("../views/Count/FoodCount.vue"),
    },
    {
      path: '/order/orderSumCount',
      name: 'OrderSumCount',
      component:() => import("../views/Count/OrderSumCount.vue"),
    },
    {
      path: '/order/optionalOrderSumCount',
      name: 'OptionalOrderSumCount',
      component:() => import("../views/Count/OptionalOrderSumCount.vue"),
    },
    ]
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    component:() => import("../views/Kitchen.vue"),
  },
  {
    path: '/manage',
    name: 'Manage',
    component:() => import("../views/Manage.vue"),
    children:[
      {
          path: '/manage/foodManage',
          name: 'FoodManage',
          component:() => import("../views/Manage/FoodManage.vue"),
      },
      {
        path: '/manage/staffManage',
        name: 'StaffManage',
        component:() => import("../views/Manage/StaffManage.vue"),
      },
    ]
  },
  
  
];


const router = new VueRouter({
  mode:'history',
  routes,
});



export default router;
