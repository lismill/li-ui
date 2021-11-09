export default {
  path: "/component",
  component: () => import(/* webpackChunkName: "component" */ "@/views/layout/index.vue"),
  redirect: {
    path: "/component/index",
  },
  children: [
    {
      path: "index",
      name: "ComponentIndex",
      meta: {
        title: "组件",
      },
      component: () => import(/* webpackChunkName: "component" */ "@/docs/component.md"),
    },
    {
      path: "button",
      name: "ComponentButton",
      meta: {
        title: "按钮",
      },
      component: () => import(/* webpackChunkName: "component" */ "@/docs/button.md"),
    },
  ],
};
