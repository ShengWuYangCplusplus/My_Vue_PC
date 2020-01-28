<template>
  <div>
    <el-card>
      <div slot="header">添加试住登记</div>
      <el-form size="mini" :model="form" labelWidth="130px" labelPosition="left">
        <el-form-item label="时间">
          <el-input v-model="form.time"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-button type="primary" @click="save">提 交</el-button>
          <el-button plain @click="$router.go(-1)">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{}
    }
  },
  methods:{
    save(){

    }
  }
}
</script>

<style>
</style>