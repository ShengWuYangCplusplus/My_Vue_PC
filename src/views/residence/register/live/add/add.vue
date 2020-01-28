<template>
  <div class="outDiv">
    <div>
      <el-steps :active="RegisterStep" align-center finish-status="success">
        <el-step title="基本信息登记"></el-step>
        <el-step title="家属信息登记"></el-step>
        <el-step title="健康信息登记"></el-step>
        <el-step title="护理任务设置"></el-step>
        <el-step title="餐饮床位选择"></el-step>
        <el-step title="入院缴费"></el-step>
      </el-steps>
    </div>
    <div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import state from '@/store/state.js'
export default {
  data() {
    return {

    }
  },
  watch: {
    '$route'(i) {
      if (i.name === 'residence-register-live-add-base') {
        this.$store.commit('SET_REGISTER_STEP', 0)
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    state.RegisterStep = 0;
    next()
  }
}
</script>

<style>
</style>