<template>
  <div>
      <el-card  class="margin-top-twenty">
        <div slot="header">基本信息登记</div>
      <el-form size="mini" labelWidth="120px"  labelPosition="left" ref="base" :model="base" :rules="baseRules">
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="姓名">
            <el-input v-model="base.name"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="称呼">
            <el-input v-model="base.a"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="身份证号">
            <el-input v-model="base.idCard"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
            <el-input v-model="base.b"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="生日">
            <el-input v-model="base.c"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话">
            <el-input v-model="base.d"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="婚姻状况">
            <el-input v-model="base.e"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="血型">
            <el-input v-model="base.f"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="民族">
            <el-input v-model="base.g"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="政治面貌">
            <el-input v-model="base.h"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="注意事项">
            <el-input v-model="base.i"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="是否本市户籍">
            <el-input v-model="base.j"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="外地迁入">
            <el-input v-model="base.k"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="家庭住址">
            <el-input v-model="base.l"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="户籍住址">
            <el-input v-model="base.m"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="爱好">
              <el-input v-model="base.n"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="宗教信仰">
            <el-input v-model="base.o"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="档案号">
            <el-input v-model="base.p"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="签订合同日期">
            <el-input v-model="base.q"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="入院发票号">
            <el-input v-model="base.r"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="文化程度">
            <el-input v-model="base.s"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="家庭人口">
            <el-input v-model="base.t"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="劳动能力">
            <el-input v-model="base.u"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="经济来源">
            <el-input v-model="base.v"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="供养形式">
            <el-input v-model="base.w"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="供养标准">
            <el-input v-model="base.x"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="休养类型">
            <el-input v-model="base.y"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="休养区域">
            <el-input v-model="base.z"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="人员类别">
            <el-input v-model="base.aa"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="三五五保证号">
            <el-input v-model="base.bb"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="老人类型">
            <el-input v-model="base.cc"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="登记入住时间">
            <el-input v-model="base.dd"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
          <el-form-item label="入住时间">
            <el-input v-model="base.ee"></el-input>
          </el-form-item>
          </el-col>
        </el-row>
      </el-form>
       </el-card>
    <div class="dfc margin-top-twenty">
      <el-button type="primary" @click="doRegisterNext">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      baseRules:{},
      base:{}
    }
  },
  methods:{
    doRegisterNext() {
      this.$store.commit('SET_REGISTER_STEP',1)
      this.$router.push({ name: 'residence-register-live-add-family' })
      sessionStorage.setItem('register_live_base',JSON.stringify(this.base))
    },
  },
  mounted(){
      this.$store.commit('SET_REGISTER_STEP',0)
      sessionStorage.removeItem('register_live_base')
  }
}
</script>

<style>
</style>