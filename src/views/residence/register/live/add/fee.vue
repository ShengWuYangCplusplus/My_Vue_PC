<template>
  <div>
    <el-card class="margin-top-twenty">
      <div slot="header">
        入院缴费
      </div>
    </el-card>
    <div class="dfc margin-top-twenty">
      <el-button @click="doRegisterPrev">上一步</el-button>
      <el-button @click="save" type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feeRules: {},
      fee: {}
    }
  },
  methods: {
    doRegisterPrev() {
      this.$store.commit('SET_REGISTER_STEP',4)
      this.$router.push({ name: 'residence-register-live-add-beds' })
      this.register_live_fee = this.fee
    },
    save() {
      console.log(
        JSON.parse(sessionStorage.getItem('register_live_base'))
      )
    }
  },
  mounted(){
      this.$store.commit('SET_REGISTER_STEP',5)
  }
}
</script>

<style>
</style>