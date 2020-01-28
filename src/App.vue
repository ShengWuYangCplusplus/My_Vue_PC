<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
import SystemConfig from '@/config/SystemConfig.js'
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  computed: {
    routePath() {
      return this.$route.path;
    }
  },
  data() {
    return {
      isRouterAlive: true,
      tempCrumb: []
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
  mounted() {
    document.title = 'ShenWu | Keep Moving'
  }
};
</script>
<style lang="scss" scoped>
</style>

