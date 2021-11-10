import markdown from "../markdown";

export default {
  path: "/component",
  component: () => import(/* webpackChunkName: "component" */ "@/views/layout/index.vue"),
  redirect: {
    path: "/component/index",
  },
  children: markdown.map((item: any) => {
    return {
      path: item.path,
      name: item.name,
      meta: item.mate,
      component: () => import(/* webpackChunkName: "component" */ `@/views/markdown/${item.component}.md`),
    };
  }),
};
