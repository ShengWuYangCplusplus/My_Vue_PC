<template>
  <div class="crumb-container" style="width:100%">
    <i
      style="margin-left:-10px"
      class="icon iconfont icon-liebiao7 zhedieIcon"
      @click="showhideNav"
      :class="{active:isSidebarNavCollapse}"
    ></i>
    <el-button size="mini" @click="backRoute" type="text">
      <i
        class="icon iconfont icon-shuangzuojiantou- zhedieIcon"
        style="font-size:15px;margin:0 20px"
      >返回</i>
    </el-button>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <template v-for="(route,i) in crumbList">
          <el-breadcrumb-item
            :key="route.name"
            :to="{name:route.name}"
            v-if="route.name!='home' && route.meta.name!='首页'"
            :class="{'is-last-link':i==crumbList.length-1}"
          >{{route.meta.name}}</el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    crumbList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["isSidebarNavCollapse"])
  },
  methods: {
    showhideNav() {
      this.$store.commit("toggleNavCollapse");
    },
    backRoute() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.max-width {
  width: calc(100% - 100px);
}
.crumb-container {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  .zhedieIcon {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s;
    &.active {
      transform: rotate(90deg);
    }
  }
  .lastOne {
    color: rgb(163, 160, 160);
  }
}
</style>
