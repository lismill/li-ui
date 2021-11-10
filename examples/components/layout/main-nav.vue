<template>
  <div class="app-nav">
    <dl v-for="route in markdown" :key="route.name">
      <template v-if="route.children && route.children.length">
        <dt>{{ route.meta.title }}</dt>
        <dd v-for="children in route.children" :key="children.name">
          <router-link
            :class="{ active: active === currentPath(route, children) }"
            :to="currentPath(route, children)"
            >{{ children.meta.title }}</router-link
          >
        </dd>
      </template>
      <template v-else>
        <dt>
          <router-link :to="route.path">{{ route.meta.title }}</router-link>
        </dt>
      </template>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import markdown from "@/router/markdown";

@Component({})
export default class SideNav extends Vue {
  active = "";
  markdown = markdown;

  @Watch("$route")
  routerChange(v: any) {
    this.active = v.path;
  }

  currentPath(route: any, children: any) {
    return `${route.path}/${children.path}`;
  }
}
</script>
