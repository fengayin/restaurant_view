import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import echarts from './utils/echarts5'   //引入echarts
import axios from "axios";
import qs from 'qs';

// axios.defaults.headers.post['Content-Type']='application/x-www-from-urlencoded';
Vue.prototype.$axios=axios;
Vue.prototype.$qs = qs;
Vue.prototype.$echarts = echarts  //全局替换
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
