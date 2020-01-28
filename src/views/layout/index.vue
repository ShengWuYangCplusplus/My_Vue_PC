<template>
  <div id="layout">
    <div class="header">
      <AppHeader></AppHeader>
    </div>
    <div class="allcontent">
      <div id="navBar" class="navBar" :class="isSidebarNavCollapse===true?'navCollapsed':'zhankai'">
        <NavBar :menuList="menuList"></NavBar>
      </div>
      <div class="viewContent">
        <div class="crumb">
          <Crumb :crumbList="crumbList"></Crumb>
        </div>
        <div class="changeContent">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "component/common/AppHeader";
import NavBar from "component/common/NavBar";
import Crumb from "component/common/Crumb";
import { mapState } from "vuex";
export default {
  components: {
    AppHeader,
    NavBar,
    Crumb
  },
  computed: {
    ...mapState(["isSidebarNavCollapse"]),
    ...mapState(["menuList", "crumbList"])
  }
};
</script>

<style lang="scss">
#layout {
  height: 100vh;
  width: 100%;
  position: relative;
  .header {
    width: 100%;
    background-color: #ffffff;
    border-bottom: 0.5px solid lightgrey;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
  }
  .allcontent {
    height: calc(100vh - 50px);
    display: flex;
    flex-flow: row;
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    .zhankai {
      min-width: 260px;
    }
    .navBar {
      min-height: calc(100vh - 50px);
      background-color: #304156;
      overflow-y: auto;
    }
    #navBar::-webkit-scrollbar {
      width: 3px;
      height: 1px;
    }
    #navBar::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: #313131;
    }
    #navBar::-webkit-scrollbar-track {
      border-radius: 3px;
      background: #313131;
    }
    .viewContent {
      flex: 2;
      background-color: rgb(250, 250, 250);
      height: calc(100vh -50px);
      width: 100%;
      overflow-y: auto;
      z-index: 99;
      .crumb {
        width: 100%;
        position: absolute;
        top: 0px;
        z-index: 101;
      }
      .changeContent {
        width: 100%;
        flex: 1;
        background-color: #fff;
        padding: 0 10px 10px 10px;
        margin-top: 50px;
        min-height: 200px;
      }
    }
  }
}
</style>
