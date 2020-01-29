<template>
  <div >
    <el-card v-loading="isLoading">
      <div slot="header">编辑用户</div>
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
        <el-form-item label="部门" prop="DepartmentId">
          <el-select v-model="form.DepartmentId" clearable>
            <el-option v-for="(item,index) in departmentList" :value="item.id" :label="item.department" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="RoleId">
           <el-select v-model="form.RoleId" clearable>
              <el-option v-for="(item,index) in roleList" :value="item.id" :label="item.role" :key="index"></el-option>
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
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isLoading:false,
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
        DepartmentId:[
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
  computed: {
    ...mapState('commondata', ['userName','roleList','departmentList'])
  },
  methods: {
    loadData(){
      this.isLoading=true
      this.$apis.System.getUserDetail({userid:this.$route.params.userid}).then(
        res=>{
          if(res.code===0){
            this.form=res.data
          }
        }
      ).finally(()=>{
        this.isLoading=false
      })
    },
    save() {
      this.$refs['form'].validate(valid=>{
        if(valid){
          const loading = this.$loading({
              lock: true,
              text: "提交中..",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
          this.$apis.System.updateUser(this.form).then(res=>{
            if(res.code===0){
              this.$message.success('编辑成功')
              this.$router.go(-1)
            }else{
              this.$message.error(`编辑失败:${res.des}`)
            }
          }).finally(()=>{
            loading.close()
          })
        }
      })
    }
  },
  mounted(){
    this.$store.dispatch('commondata/FETCH_ROLE_DEPARTMENT')
    this.loadData()
  }
}
</script>

<style>
</style>