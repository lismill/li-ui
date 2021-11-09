import Vue from "vue";
import SvgIcon from "@/components/svg-icon/index.vue";
import DemoBlock from "@/components/layout/demo-block.vue";
import MainHeader from "@/components/layout/main-header.vue";
import MainFooter from "@/components/layout/main-footer.vue";
import SideNav from "@/components/layout/side-nav.vue";

/**
 * 引入 @/assets/svg 下的所有 svg 文件
 */
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/assets/svg", true, /\.svg$/);
requireAll(req);

// 注册全局组件
Vue.component("svg-icon", SvgIcon);
Vue.component("demo-block", DemoBlock);
Vue.component("main-header", MainHeader);
Vue.component("main-footer", MainFooter);
Vue.component("side-nav", SideNav);
