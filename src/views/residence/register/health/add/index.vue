<template>
  <div class="outDiv">
    <div>
      <el-steps :active="RegisterStep" align-center finish-status="success">
        <el-step title="基本信息登记"></el-step>
        <el-step title="健康信息登记"></el-step>
        <el-step title="体检信息登记"></el-step>
        <el-step title="长者能力评估"></el-step>
        <el-step title="评估结果"></el-step>
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