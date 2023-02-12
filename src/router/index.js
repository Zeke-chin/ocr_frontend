import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main.vue";
import Result from "../views/Result.vue";

// 1. 创建路由组件
// 2. 映射路由
// 3. 创建路由实例
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Main},
  {path: '/result', component: Result},
]

const router = new VueRouter({
  routes
})

// 对外暴露route
export default router;
