<template>
  <div>
    <el-card>
      <div slot="header">添加用户</div>
      <el-form size="mini" :model="form" ref="form" :rules="userRule" labelWidth="130px" labelPosition="left">
        <el-form-item label="姓名" prop='UserName'>
          <el-input v-model="form.UserName"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="Account">
          <el-input v-model="form.Account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="Password">
          <el-input v-model="form.Password"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="Phone">
          <el-input v-model="form.Phone"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="Department">
          <el-select v-model="form.Department">
            <el-option value="研发部"></el-option>
            <el-option value="综合部"></el-option>
            <el-option value="财务部"></el-option>
            <el-option value="市场部"></el-option>
            <el-option value="董事会"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="RoleId">
           <el-select v-model="form.RoleId">
            <el-option value="1" label="总经理"></el-option>
            <el-option value="2" label="总监"></el-option>
            <el-option value="3" label="主管"></el-option>
            <el-option value="4" label="职工"></el-option>
          </el-select>
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
  data() {
    return {
      form: {},
      userRule:{
        UserName:[
          {
            required:true,message:'输入姓名',trigger:'blur'
          }
        ],
        Account:[
          {
            required:true,message:'输入账号',trigger:'blur'
          }
        ],
        Password:[
          {
            required:true,message:'输入密码',trigger:'blur'
          }
        ],
        Phone:[
          {
            required:true,message:'输入手机号',trigger:"blur"
          },
          {
             validator: this.$filter.isPhone, trigger: 'blur' 
          }
        ],
        Department:[
          {
            required:true,message:'选择部门',trigger:'blur'
          }
        ],
        RoleId:[
          {
            required:true,message:'选择角色',trigger:'blur'
          }
        ],
      }
    }
  },
  methods: {
    save() {
      this.$refs['form'].validate(valid=>{
        if(valid){
          const loading = this.$loading({
              lock: true,
              text: "提交中..",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
          this.$apis.System.addUser(this.form).then(res=>{
            if(res.code===0){
              this.$message.success('添加成功')
              this.$router.go(-1)
            }else{
              this.$message.error(`添加失败:${res.des}`)
            }
          }).finally(()=>{
            loading.close()
          })
        }
      })
    }
  }
}
</script>

<style>
</style>