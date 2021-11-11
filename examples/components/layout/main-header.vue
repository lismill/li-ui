<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo cursor-pointer" @click="() => this.$router.push('/')">
        <template v-for="(logo, index) in logos">
          <svg-icon
            :key="logo.name"
            v-if="random === index"
            :name="logo.name"
            :size="logo.size"
            :style="{ marginLeft: logo.left, marginRight: logo.right }"
          ></svg-icon>
        </template>
        <span>Generate a library for vue.js2</span>
      </div>
      <div class="link">
        <div class="web">
          <router-link :to="route.path" v-for="route in markdown" :key="route.path">
            {{ route.meta.title }}
          </router-link>
        </div>
        <div class="mobile">
          <div class="icon"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import markdown from "@/router/markdown";

@Component({
  components: {},
})
export default class AppHeader extends Vue {
  logos = [
    { name: "logo-666", size: "66" },
    { name: "logo-rock", size: "66" },
    { name: "logo-爱心", size: "66" },
    { name: "logo-爱心气泡", size: "66" },
    { name: "logo-红包", size: "66" },
    { name: "logo-开心", size: "66" },
    { name: "logo-游戏机", size: "66" },
    { name: "logo-春", size: "50", left: "0px", right: "10px" },
    { name: "logo-火箭", size: "50", left: "0px", right: "10px" },
    { name: "logo-缆车", size: "50", left: "0px", right: "10px" },
    { name: "logo-气球", size: "50", left: "0px", right: "10px" },
    { name: "logo-北京", size: "55", left: "-4px" },
    { name: "logo-上海", size: "55", left: "-4px" },
    { name: "logo-广州", size: "55", left: "-4px" },
    { name: "logo-深圳", size: "55", left: "-4px" },
    { name: "logo-购物车", size: "50", left: "0", right: "10px" },
    { name: "logo-橘猫", size: "55", left: "0px", right: "10px" },
    { name: "logo-可爱的妹妹", size: "60", left: "-2px", right: "10px" },
    { name: "logo-青色小怪兽", size: "55", left: "-2px", right: "10px" },
    { name: "logo-阳小妹", size: "45", left: "0", right: "10px" },
  ];
  markdown = markdown;
  // 随机logo
  random = 0;
  created() {
    this.random = Math.floor(Math.random() * this.logos.length);
  }

  // 当前路由
  active = "";
  @Watch("$route")
  routerChange(v: any) {
    this.active = v.path;
  }
}
</script>
