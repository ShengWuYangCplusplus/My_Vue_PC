<template>
  <div class="login-container">
    <div class="login_header">
      <div class="titleLeft">
        <span>
          <i class="icon iconfont icon-icon-mzsq titleIcon"></i>
        </span>
        <span class="titleFont">{{systemTitle}}</span>
      </div>
    </div>
    <div class="login-content">
      <div class="containerDiv">
        <el-form
          :model="loginForm"
          :rules="loginRules"
          ref="loginForm"
          style="width:300px"
          @submit.native.prevent
        >
          <el-form-item prop="username">
            <el-input
              placeholder="账号"
              type="text"
              v-model="loginForm.username"
              autocomplete="on"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              style="margin-top:20px"
              v-model="loginForm.password"
              @keyup.enter.native="login"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="remember">记住密码</el-checkbox>
          </el-form-item>
          <el-button style="width:100%;" type="primary" @click.native.prevent="login">登录</el-button>
        </el-form>
      </div>
      <div style="height:100px;width:100%;"></div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../../config/httpConfig";
import { constants } from "crypto";
import { setCookie, getCookie, delCookie } from "@/utils/cookie.js";
import MenuRoute from "@/config/menu_route.js";
const Base64 = require("js-base64").Base64;
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.trim().length < 5) {
        callback(new Error("请输入正确的账号"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      remember: true,
      flag: 0,
      loginLoading: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername
          }
        ],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      },
      loading: false,
      pwdType: "password"
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    login() {
      var vm = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const loading = this.$loading({
            lock: true,
            text: "登陆中...",
            spinner: "el-icon-loading",
            background: "rgba(0,0,0,0.7)"
          });
          let data = {
            account: this.loginForm.username.trim(),
            password: this.loginForm.password
          };
          let str =
            this.loginForm.username.trim() + ":" + this.loginForm.password;
          let tempStr = Base64.encode(str);
          let obj = {};
          let token = "abcdefghigklmn";
          setTimeout(() => {
            loading.close();
            this.$store.commit("LOGIN_IN", token);
            this.$router.replace("/home");
          }, 500);

          // this.$http
          //   .post("/api/login/bypwd", obj, {
          //     headers: {
          //       Authorization: "Basic " + tempStr
          //     }
          //   })
          //   .then(result => {
          //     loading.close();
          //     const res = result.data;
          //     if (res.code == 0) {
          //       let has = this.hasAuthRole(res.data.userRole, this.centerRoles);
          //       if (has && res.data.functions) {
          //         //勾选了记住密码  开始写入cookie
          //         if (vm.remember) {
          //           const accountInfo =
          //             vm.loginForm.username + "&" + vm.loginForm.password;
          //           setCookie("accountInfo", accountInfo, 1440 * 3);
          //         }
          //         //没有勾选  删除cookie
          //         else {
          //           delCookie("accountInfo");
          //         }
          //         let token = res.data.token;
          //         this.$store.commit("LOGIN_IN", token);
          //         this.$router.replace("/home");
          //       } else {
          //         this.$message({
          //           type: "error",
          //           message: "权限不足,无法登陆"
          //         });
          //         return false;
          //       }
          //     } else {
          //       this.$message({
          //         type: "error",
          //         message: "账号或者密码错误"
          //       });
          //     }
          //   })
          //   .finally(() => {
          //     loading.close();
          //   });
        } else {
          return false;
        }
      });
    },
    loadAccountInfo() {
      var vm = this;
      let accountInfo = getCookie("accountInfo");
      if (Boolean(accountInfo) === false) {
        vm.remember = false;
        return false;
      } else {
        let index = accountInfo.indexOf("&");
        vm.loginForm.username = accountInfo.substring(0, index);
        vm.loginForm.password = accountInfo.substring(index + 1);
        vm.remember = true;
      }
    }
  },
  mounted() {
    this.loadAccountInfo();
  }
};
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100%;

  .login_header {
    display: flex;
    height: 50px;
    width: 100%;
    background: #fff;
    align-items: center;
    .titleLeft {
      display: flex;
      flex-flow: row;
      align-items: center;
      .titleIcon {
        font-size: 30px;
        color: #ff7725;
        padding-left: 30px;
        display: inline-block;
      }
      .titleFont {
        font-size: 22px;
        font-family: sans-serif;
        padding-left: 15px;
        letter-spacing: 2px;
      }
    }
  }
  .login-content {
    background-image: url("../../assets/login.png"),
      url("../../assets/loginSmall.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    .containerDiv {
      margin-left: 35%;
      border-radius: 10px;
      background-color: #fff;
      padding: 30px 30px;
    }
  }
}
</style>
