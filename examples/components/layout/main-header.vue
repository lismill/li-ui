<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <svg-icon v-if="random === 0" name="logo-666" size="66"></svg-icon>
        <svg-icon v-if="random === 1" name="logo-rock" size="66"></svg-icon>
        <svg-icon v-if="random === 2" name="logo-爱心" size="66"></svg-icon>
        <svg-icon v-if="random === 3" name="logo-爱心气泡" size="66"></svg-icon>
        <svg-icon v-if="random === 4" name="logo-冰淇淋" size="66"></svg-icon>
        <svg-icon v-if="random === 5" name="logo-吹风机" size="66"></svg-icon>
        <svg-icon v-if="random === 6" name="logo-红包" size="66"></svg-icon>
        <svg-icon v-if="random === 7" name="logo-金元宝" size="66"></svg-icon>
        <svg-icon v-if="random === 8" name="logo-开心" size="66"></svg-icon>
        <svg-icon v-if="random === 9" name="logo-奶茶" size="66"></svg-icon>
        <svg-icon v-if="random === 10" name="logo-游戏机" size="66"></svg-icon>
        <svg-icon v-if="random === 11" name="logo-游戏机手柄" size="66"></svg-icon>
        <svg-icon v-if="random === 12" name="logo-面条" size="58" style="margin: 0 5px 0 -5px"></svg-icon>
        <svg-icon v-if="random === 13" name="logo-小女孩" size="45" style="margin: 0 10px 0 0"></svg-icon>
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
  markdown = markdown;
  // 随机logo
  random = 0;
  created() {
    this.random = Math.floor(Math.random() * 14);
  }

  // 当前路由
  active = "";
  @Watch("$route")
  routerChange(v: any) {
    this.active = v.path;
  }
}
</script>
