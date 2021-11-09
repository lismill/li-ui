<template>
  <div class="li-button">li-button</div>
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
  color: red;
}
</style>
