<template>
  <el-menu
    class="menu-container"
    :collapse="isSidebarNavCollapse"
    background-color="#304156"
    text-color="#eee"
    active-text-color="#4dbcff"
    :default-active="currentMenu"
    :unique-opened="true"
  >
    <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
  </el-menu>
</template>

<script>
import DynamicMenu from './dynamic-menu'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isCollapse: true
    }
  },
  computed: {
    ...mapState(['isSidebarNavCollapse']),
    ...mapState('permission', ['sidebarMenu', 'currentMenu']),
    ...mapState('data', ['userName'])
  },
  methods: {},
  components: {
    DynamicMenu
  }
}
</script>

<style lang="scss">
.menu-container {
  i {
    margin-right: 10px;
  }
}
</style>
