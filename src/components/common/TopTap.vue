<template>
  <div>
    <el-tabs type="card" @tab-click="gotoRoue($event)" v-model="currentIndex">
      <el-tab-pane
        v-for="item in topnavlist"
        :label="item.meta.name"
        :key="item.name"
        :name="item.path"
        :ref="item.meta.name"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props: {
    topnavlist: {
      type: Array,
      default: () => {
        return [];
      }
    },
    currentTab: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {
      currentIndex: this.currentTab
    };
  },
  methods: {
    gotoRoue(i) {
      this.$router.push(i.name);
      this.$emit("fatherFunc", i.name);
    }
  }
};
</script>
<style>
.el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}

.el-tabs__header {
  margin: 0px;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #409eff;
  color: white;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom: none;
}
</style>

<style lang="scss" scoped>
</style>

