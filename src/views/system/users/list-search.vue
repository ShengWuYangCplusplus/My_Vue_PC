<template>
  <div>
    <el-form
      style="width:500px"
      :rules="searchRules"
      :model="searchForm"
      label-width="120px"
      ref="searchForm"
      size="mini"
      labelPosition="right"
      @submit.native.prevent
    >
      <el-form-item label="姓名" prop="username">
        <el-input v-model="searchForm.username" @keyup.enter.native="startSearch"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startSearch">确定</el-button>
        <el-button @click="cancleSearch">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
 
    return {
      labelPosition: "left",
      searchForm: this.$store.state.currentSearchForm,
      searchRules: {
      }
    };
  },
  methods: {
    startSearch() {
      //所有参数是否为空    是的话 return false   否的话
      if (this.$baseFunc.paramsValidate(this.searchForm)) {
        this.$message({
          type: "error",
          message: "请选择检索参数"
        });
        return false;
      }
      this.$refs['searchForm'].validate(valid => {
        if (valid) {
          let obj = {
            searchShow: false,
            searchData: this.searchForm
          };
          this.$emit("startSearch", obj);
        } else {
          return false;
        }
      });
    },
    cancleSearch() {
      let obj = {
        searchShow: false
      };
      this.$emit("cancleSearch", obj);
    }
  }
};
</script>
