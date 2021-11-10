<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <svg-icon v-if="random === 0" name="logo-666" size="66"></svg-icon>
        <svg-icon v-if="random === 1" name="logo-冰淇淋" size="66"></svg-icon>
        <svg-icon v-if="random === 2" name="logo-开心" size="66"></svg-icon>
        <svg-icon v-if="random === 3" name="logo-面条" size="58" style="margin: 0 5px 0 -5px"></svg-icon>
        <svg-icon v-if="random === 4" name="logo-小女孩" size="45" style="margin: 0 10px 0 0"></svg-icon>
        <span>Generate a UI library</span>
      </div>
      <div class="link">
        <router-link :to="route.path" v-for="route in markdown" :key="route.path">
          {{ route.meta.title }}
        </router-link>
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
  markdown = markdown;
  // 随机logo
  random = 0;
  created() {
    this.random = Math.floor(Math.random() * 5);
  }

  // 当前路由
  active = "";
  @Watch("$route")
  routerChange(v: any) {
    this.active = v.path;
  }
}
</script>
