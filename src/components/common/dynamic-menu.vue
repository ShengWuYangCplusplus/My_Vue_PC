<template>
  <div class="menu-container">
    <template v-for="v in menuList">
       <el-menu-item :key="v.name" :index="v.name" @click="gotoRoute(v.name)" v-if="v.meta.allScreen">
        <i class="icon iconfont" :class="v.meta.icon"></i>
        <span slot="title" class="routFontClass">{{v.meta.name}}</span>
      </el-menu-item>
      <el-submenu
        :index="v.name"
        v-if="v.children&&v.children.length>0&&v.meta.isSub===true"
        :key="v.name"
      >
        <template slot="title">
          <i class="icon iconfont" :class="v.meta.icon"></i>
          <span class="routFontClass">{{v.meta.name}}</span>
        </template>
        <el-menu-item-group>
          <my-nav :menuList="v.children"></my-nav>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :key="v.name" :index="v.name" @click="gotoRoute(v.name)" v-else>
        <i class="icon iconfont" :class="v.meta.icon"></i>
        <span slot="title" class="routFontClass">{{v.meta.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-nav",
  props: {
    menuList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    gotoRoute(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang='scss'>
.menu-container {
  i {
    margin-right: 10px;
  }
}
.routFontClass {
  margin-left: 5px;
  font-size: 15px;
}
</style>
