<template>
  <div >
    <el-card class="margin-top-twenty">
      <div slot="header">餐饮类别</div>
      <el-form size="mini" labelWidth="120px"  labelPosition="left" ref="beds" :model="beds" :rules="bedsRules">
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="餐饮类别">
            <el-input v-model="beds.a"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="餐饮费用(元)">
            <el-input v-model="beds.b"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="餐饮描述">
            <el-input v-model="beds.c"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="margin-top-twenty">
      <div slot="header">床位类别</div>
      <el-form size="mini" labelWidth="120px"  labelPosition="left" ref="beds" :model="beds" :rules="bedsRules">
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="床位类型">
            <el-input v-model="beds.h"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="床位费用(元)">
            <el-input v-model="beds.i"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="是否包房">
            <el-input v-model="beds.j"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="选择床位">
            <el-input v-model="beds.k"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="160">
          <el-col :span="12">
          <el-form-item label="床位描述">
            <el-input v-model="beds.l"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
      bedsRules:{},
      beds:{}
    }
  },
  methods:{
    doRegisterPrev() {
      this.$store.commit('SET_REGISTER_STEP',3)
      this.$router.push({ name: 'residence-register-live-add-nurse' })
    },
    doRegisterNext() {
      this.$store.commit('SET_REGISTER_STEP',5)
      this.$router.push({ name: 'residence-register-live-add-fee' })
    },
  },
  mounted(){
      this.$store.commit('SET_REGISTER_STEP',4)
  }
}
</script>

<style>
</style>