<template>
  <div id="head">
    <div class="titleLeft">
      <span>
        <i class="icon iconfont icon-zan titleIcon"></i>
      </span>
      <span class="titleFont">{{systemTitle}}</span>
    </div>
    <div class="titleRight">
      <span>
        <i class="icon iconfont icon-WIFIwofi" id="wifiIcon" style="color:#67C23A"></i>
      </span>
      <el-dropdown :hide-on-click="false">
        <span style="cursor:pointer">
          欢迎: {{userName||'机构管理员'}}
          <i
            class="el-icon-arrow-down el-icon--right"
            style="font-size:14px"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown" :show-timeout="50" :hide-timeout="0">
          <el-dropdown-item>
            <el-button type="text" @click="updatePwd">更改密码</el-button>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-button type="text" @click="singOut">退出登录</el-button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="errorClass" id="errorModal">
      <span>
        <span>网络连接错误!</span>
      </span>
    </div>
    <el-dialog center title="更改密码" :visible.sync="showUpdatePwd" :append-to-body="true">
      <el-form size="mini" labelPosition="right" labelWidth="150px">
        <el-form-item label="账号">
          <el-input v-model="account" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="pwd" show-password placeholder="输入新密码"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-button size="mini" type="primary" @click="saveUpdate">保存</el-button>
          <el-button size="mini" @click="cancleUpdate">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex"
import axios from "axios"
const Base64 = require("js-base64").Base64;
export default {
  data() {
    return {
      showUpdatePwd: false,
      account: "",
      pwd: "",
    };
  },
  computed:
    mapState({
      userName: state => state.userRole == "64" ? state.serviceProviderName : state.userName
    }),
  methods: {
    loopIsOnline() {
      var that = this;
      var InterFunc = function () {
        if (window.navigator.onLine === false) {
          document.getElementById("errorModal").style.display = "block"
          setTimeout(() => {
            document.getElementById("errorModal").style.display = "none"
          }, 2000)
        }
        else {
          document.getElementById("errorModal").style.display = "none"
          let start = new Date().getTime();
          axios.get("/1ping/ping.png", { headers: { 'Cache-Control': 'no-cache' } }).then(res => {
            if (res.status >= 200 && res.status < 300) {
              let end = new Date().getTime();
              let timeDiff = end - start;
              if (timeDiff <= 1000) {
                document
                  .getElementById("wifiIcon")
                  .setAttribute("style", "color:#67C23A");
              }
              if (timeDiff > 1000 && timeDiff < 3000) {
                document
                  .getElementById("wifiIcon")
                  .setAttribute("style", "color:#E6A23C");
              }
              if (timeDiff >= 3000 && timeDiff < 5000) {
                document
                  .getElementById("wifiIcon")
                  .setAttribute("style", "color:#F56C6C");
              }
              if (timeDiff > 5000) {
                that.$message({
                  type: "error",
                  message: "服务端或网网络连接有误,请检查你的网络设置"
                })
                document
                  .getElementById("wifiIcon")
                  .setAttribute("style", "color:#909399");
              }
            } else {
              that.$message({
                type: "error",
                message: "服务端或网网络连接有误,请检查你的网络设置"
              })
            }
          })
        }
      };
      var setInter = setInterval(InterFunc, 30000);
      this.$once("hook:beforeDestroy", () => {
        clearInterval(setInter);
      });
    },
    updatePwd() {
      this.showUpdatePwd = true;
      this.account = this.$store.state.phone
    },
    singOut() {
      this.$store.commit("LOGIN_OUT");
      window.location.reload();
    },
    saveUpdate() {
      const loading = this.$loading({
        lock: true,
        text: '提交中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let str =
        this.account + ":" + this.pwd;
      let tempStr = Base64.encode(str);
      const reqObj = {}
      const headObj = {
        Credential: "Basic " + tempStr
      };
      updateCurrentPwd(reqObj, headObj).then(
        res => {
          if (res.code === 0) {
            this.$message.success('密码更改成功')
            this.showUpdatePwd = false
          }
          else {
            this.$message.error(`密码更改失败:${res.des}`)
            return false
          }
        }
      ).catch(() => {
        loading.close()
      }).finally(() => {
        loading.close()
      })
    },
    cancleUpdate() {
      this.showUpdatePwd = false
    },

  },
  mounted() { }
};
</script>
<style lang="scss" scoped>
.errorClass {
  color: #fff;
  width: 200px;
  height: 40px;
  font-size: 14px;
  position: fixed;
  line-height: 40px;
  display: none;
  text-align: center;
  top: 60px;
  left: 45%;
  background-color: #f56c6c;
  border-radius: 10px;
}

#head {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background-color: #ffffff;
  border-bottom: 0.1px solid rgb(194, 187, 187);
  width: 100%;
  z-index: 9;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  .titleLeft {
    display: flex;
    flex-flow: row;
    align-items: center;
    .titleIcon {
      font-size: 30px;
      // color: #ff7725;
      color: #1296db;
      padding-left: 30px;
      display: inline-block;
    }
    .titleFont {
      font-size: 22px;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      padding-left: 20px;
      letter-spacing: 1px;
    }
  }
  .titleRight {
    div {
      padding-right: 15px;
      padding-left: 20px;
    }
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    .wifiIcon {
      border-right: 0.5px solid rgb(233, 230, 230);
      height: 49px;
    }
    .yunIcon {
      border-right: 0.5px solid rgb(233, 230, 230);
      height: 49px;
    }
    span > i {
      font-size: 24px;
    }
    .xialaIcon {
      color: gray;
      font-size: 14px;
      padding-left: 3px;
      cursor: pointer;
    }
    .userIcon:hover .xiaLaUL {
      display: block;
      transition: 1s;
    }
    .userIcon {
      line-height: 50px;
      text-align: center;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .xiaLaUL {
      display: none;
      position: fixed;
      right: 0px;
      top: 50px;
      list-style: none;
      width: 130px;
      height: 30px;
      z-index: 1;
      .innerUL {
        list-style: none;
        line-height: 30px;
        background-color: #fff;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 12px;
        color: gray;
        li:hover {
          background: #a0cfff;
        }
      }
    }
    .xiaLaContainer {
      min-width: 160px;
    }
    .userContainer {
      min-width: 160px;
      span:nth-child(1) {
        color: gray;
        font-size: 15px;
      }
      span:nth-child(2) {
        font-weight: bold;
        font-size: 15px;
        margin-left: 10px;
      }
    }
  }
}
</style>


