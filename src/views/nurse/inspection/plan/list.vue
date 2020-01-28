<template>
  <div class="outDiv">
    <el-button type="primary" @click="goRoute">查看巡检计划</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    goRoute(){
      window.open("http://121.199.62.174:8079/management/index.html#/video")
    }
  }
}
</script>

<style>
</style>