<template>
  <div >
    <el-card class="margin-top-twenty">
      <div slot="header">护理任务设置</div>
      <el-form size="mini" labelWidth="120px"  labelPosition="left" ref="nurse" :model="nurse" :rules="nurseRules">
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="护理级别">
            <el-input v-model="nurse.a"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="级别说明">
            <el-input v-model="nurse.b"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="护理级别费用">
            <el-input v-model="nurse.c"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="私人订制费用">
            <el-input v-model="nurse.d"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="护理总费用">
            <el-input v-model="nurse.d"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="margin-top-twenty">
      <div slot="header">护理登记详情</div>
    </el-card>
    <el-card class="margin-top-twenty">
      <div slot="header">个性化护理项目</div>
    </el-card>
    <div class="dfc margin-top-twenty" >
      <el-button  @click="doRegisterPrev">上一步</el-button>
      <el-button type="primary" @click="doRegisterNext">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nurseRules:{},
      nurse:{}
    }
  },
  methods:{
    doRegisterPrev() {
      this.$store.commit('SET_REGISTER_STEP',2)
      this.$router.push({ name: 'residence-register-live-add-health' })
    },
    doRegisterNext() {
      this.$store.commit('SET_REGISTER_STEP',4)
      this.$router.push({ name: 'residence-register-live-add-beds' })
    },
  },
  mounted(){
      this.$store.commit('SET_REGISTER_STEP',3)
  }
}
</script>

<style>
</style>