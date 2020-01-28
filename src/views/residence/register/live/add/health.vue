<template>
  <div >
    <el-card class="margin-top-twenty">
      <div slot="header">健康信息登记</div>
      <el-form size="mini" labelWidth="120px"  labelPosition="left" ref="health" :model="health" :rules="healthRules">
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="自理情况">
            <el-input v-model="health.a"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="视力">
            <el-input v-model="health.b"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="主治医院">
            <el-input v-model="health.c"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="医院电话">
            <el-input v-model="health.d"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="主要疾病">
            <el-input v-model="health.d"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="margin-top-twenty">
      <div slot="header">健康评估</div>
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
      healthRules:{},
      health:{}
    }
  },
  methods:{
    doRegisterPrev() {
      this.$store.commit('SET_REGISTER_STEP',1)
      this.$router.push({ name: 'residence-register-live-add-family' })
    },
    doRegisterNext() {
      this.$store.commit('SET_REGISTER_STEP',3)
      this.$router.push({ name: 'residence-register-live-add-nurse' })
    },
  },
  mounted(){
      this.$store.commit('SET_REGISTER_STEP',2)
  }
}
</script>

<style>
</style>