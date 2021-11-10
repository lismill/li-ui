<template>
  <button class="li-button cursor-pointer p-lr8 p-tb5">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class LiButton extends Vue {}
</script>
<style scoped lang="scss">
.li-button {
  display: block;
  font-size: 12px;
  color: #1989fa;
  background-color: #fff;
  border: 1px solid;
  border-radius: 4px;
  transition: all 0.05s;
  &:hover {
    color: #ffffff;
    background-color: #1989fa;
  }
}
</style>
