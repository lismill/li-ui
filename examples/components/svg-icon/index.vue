<template>
  <svg
    :class="svgClass"
    :style="{
      color: color,
      width: size,
      height: size,
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SvgIcon extends Vue {
  // name
  @Prop({ default: "404" }) name?: string;

  // 颜色
  @Prop({ default: "#000000" }) color!: string;

  // 大小
  @Prop({ default: "16px" }) size!: string;

  /**
   * 获取名称
   */
  get iconName(): string {
    return `#icon-${this.name}`;
  }

  /**
   * 获取class
   */
  get svgClass() {
    return `svg-icon icon-${this.name}`;
  }
}
</script>
<style lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
