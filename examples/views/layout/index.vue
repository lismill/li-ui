<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {}
</script>
