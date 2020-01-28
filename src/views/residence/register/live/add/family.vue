<template>
  <div >
    <el-card class="margin-top-twenty">
      <div slot="header">添加联系人</div>
      <el-form size="mini" labelWidth="120px"  labelPosition="left" ref="family" :model="family" :rules="familyRules">
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="姓名">
            <el-input v-model="family.a"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话">
            <el-input v-model="family.b"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="身份证号">
            <el-input v-model="family.c"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="联系人地址">
            <el-input v-model="family.d"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="margin-top-twenty">
      <div slot="header">联系人列表</div>
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
      familyRules:{},
      family:{}
    }
  },
  methods:{
    doRegisterPrev() {
      this.$store.commit('SET_REGISTER_STEP',0)
      this.$router.push({ name: 'residence-register-live-add-base' })
      this.register_live_family=this.family
    },
    doRegisterNext() {
      this.$store.commit('SET_REGISTER_STEP',2)
      this.$router.push({ name: 'residence-register-live-add-health' }),
      this.register_live_family=this.family
    },
  },
  mounted(){
      this.$store.commit('SET_REGISTER_STEP',1)
  }
}
</script>

<style>
</style>