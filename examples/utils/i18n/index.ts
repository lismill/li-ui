import VueI18n from "vue-i18n";

// 引入 modules 文件夹下的所有 store
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("./modules", true, /\.ts$/);
const modules: any = {};
requireAll(req).map((route: any) => (modules[route.default.key] = route.default));

export default new VueI18n({
  locale: localStorage.getItem("vue2.x_typescript_i18n") || "zh",
  messages: modules,
});
