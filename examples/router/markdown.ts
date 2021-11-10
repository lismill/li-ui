export default [
  {
    path: "/guide",
    name: "Guide",
    meta: { title: "指南" },
    component: () => import(/* webpackChunkName: "component" */ `@/views/markdown/guide.md`),
  },
  // 组件
  {
    path: "/component",
    component: () => import(/* webpackChunkName: "component" */ "@/views/layout/index.vue"),
    redirect: {
      path: "/component/button",
    },
    meta: {
      title: "组件",
    },
    children: [
      {
        path: "button",
        name: "componentButton",
        meta: { title: "Button 按钮" },
        component: () => import(/* webpackChunkName: "component" */ `@/views/markdown/button.md`),
      },
    ],
  },
];
