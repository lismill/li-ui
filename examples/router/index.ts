import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import hljs from "highlight.js";

Vue.use(VueRouter);

// 引入 modules 文件夹下的所有路由
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("./modules", true, /\.ts$/);
const modules: any = requireAll(req).map((route: any) => route.default);
const routes: Array<RouteConfig> = [
  // 首页
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      icon: "home",
      keepAlive: false,
      hidden: true,
      permission: 10000,
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
  },

  // 其他模块
  ...modules,

  // 404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404/index.vue"),
  },
];

console.log("routes", routes);
// 配置路由信息
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  // 修改项目标题
  document.title = `Liui${to.meta.title ? " - " + to.meta.title : ""}`;
  next();
});

router.afterEach(() => {
  // 高亮代码
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router;
