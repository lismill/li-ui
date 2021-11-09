import Vue from "vue";
import App from "@/app.vue";
import "@/registerServiceWorker";
import router from "@/router";
import i18n from "@/utils/i18n";
import "@/components/index";
import "@/assets/styles/index.scss";

import liui from "../packages/index";
Vue.use(liui);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
