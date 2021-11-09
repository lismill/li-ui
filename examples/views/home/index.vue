<template>
  <div class="home p-20">
    <!-- Hello -->
    <fieldset class="m-b20">
      <legend>Hello</legend>
      <div>Hello, {{ name }}</div>
    </fieldset>

    <!-- Router -->
    <fieldset class="m-b20">
      <legend>Router</legend>
      <div>
        <router-link to="/login">login</router-link> - <router-link to="/component">component</router-link> -
        <router-link to="/xxxxxx">404</router-link>
      </div>
    </fieldset>

    <li-button></li-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private name: any = "Lean";
  mounted(): void {
    console.log(this);
    console.log(process.env);
  }
}
</script>
