<template>
  <div class="home">
    <div class="header">
      <div style="width:300px;">
        <span class="timeFont">{{time}}</span>
        <span class="dateFont" style="margin-left:15px">{{date}}</span>
        <span class="weekFont" style="margin-left:5px">星期{{week}}</span>
      </div>
      <div>
        <span class="titleFont" style="text-align:center">
          英明神武
          <span
            style="display:inline-block;width:14px;height:14px;background:#29ecff;border-radius:7px;margin-bottom:1px"
          ></span>
          <span style="margin-left:5px">{{systemTitle}}</span>
        </span>
      </div>
      <div class="leftRight" style="display:flex;width:300px;flex-direction:row-reverse">
        <div style="width:120px;display:flex;justify-content:space-around;">
          <i id="wifiIcon" class="icon iconfont icon-wifi2 rightIcon"></i>
          <i class="icon iconfont icon-yunxiazai rightIcon"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="top">
          <div class="one_container top_left">
            <div class="one_title">
              <b>机构数量</b>
            </div>
            <div class="one_content top_left_content">
              <div class="sta_one" v-for="(item,index) in topLeftSta" :key="index" :id="item.key">
                <div>
                  <span :class="item.key">{{item.value}}</span>
                </div>
                <div>
                  <span>{{item.label}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="one_container top_right">
            <div class="one_title">
              <b>机构类型</b>
            </div>
            <div class="one_content top_right_content">
              <div id="top_right_chart" style="min-height:100px;width:100%"></div>
            </div>
          </div>-->
        </div>
        <div class="middle">
          <div class="one_container middle_left">
            <div class="one_title">
              <b>星级机构</b>
            </div>
            <div class="one_content" id="starChart" style="min-height:130px;width:100%"></div>
          </div>
          <div class="one_container middle_middle">
            <div class="one_title">
              <b>金叶级机构</b>
            </div>
            <div class="one_content" id="leafChart" style="min-height:130px;width:100%"></div>
          </div>
        </div>
        <div class="third">
          <div class="one_container middle_right">
            <div class="one_title">
              <b>评级机构数量</b>
            </div>
            <div class="one_content" id="levelOrg" style="min-height:200px;width:100%"></div>
          </div>
        </div>
        <div class="bottom">
          <div class="one_container bottom_left">
            <div class="one_title">
              <b>评定通过率</b>
            </div>
            <div class="one_content bottom_left_content">
              <div v-for="(item,index) in evalPassSta" class="bottom_left_onesta">
                <div>
                  <span class="labelText">{{item.label1}}</span>
                  <span class="labelValue">{{item.value1}}</span>
                </div>
                <div>
                  <span class="labelText">{{item.label2}}</span>
                  <span class="labelValue">{{item.value2}}</span>
                </div>
                <div>
                  <span class="labelText">{{item.label3}}</span>
                  <span class="labelValue">{{item.value3}} %</span>
                </div>
              </div>
            </div>
          </div>
          <div class="one_container bottom_right">
            <div class="one_title">
              <b>评估小组</b>
            </div>
            <div class="one_content" id="evalUser" style="min-height:100px;width:100%"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <show-map></show-map>
      </div>
    </div>
  </div>
</template>
<script>
import ShowMap from "./components/Map.vue"
export default {
  components: {
    ShowMap
  },
  data() {
    return {
      time: "",
      date: "",
      week: "",
      thePhoneChart: "",
      theStarChart: "",
      theLeafChart: "",
      theLevelOrg: "",
      theEvalUser: "",
      topLeftSta: [
        { value: 69, label: "机构总数", key: "all" },
        { value: 13, label: "四星级机构", key: "four" },
        { value: 2, label: "五星级机构", key: "five" },
        { value: 5, label: "四叶级机构", key: "fourLeaf" },
        { value: 3, label: "五叶级机构", key: "fiveLeaf" },
        { value: 11, label: "未评级机构", key: "not" },
      ],
      evalPassSta: [
        { label1: "星级申请", label2: "通过数", label3: "通过率", value1: 58, value2: 15, value3: 25.8 },
        { label1: "金叶级申请", label2: "通过数", label3: "通过率", value1: 14, value2: 8, value3: 57.1 },
      ],
      orgTypeData: [
        { value: 9, name: '公办' },
        { value: 11, name: '民营' },
        { value: 22, name: '公建民营' },
        { value: 12, name: '其它' }
      ],
      starOrgData: [
        { value: 13, name: '四星' },
        { value: 2, name: '五星' },
        { value: 43, name: '未评级' }
      ],
      evalUserData: [
        { value: 5, name: '小组一' },
        { value: 5, name: '小组二' },
        { value: 5, name: '小组三' },
        { value: 5, name: '小组四' },
        { value: 5, name: '小组五' },
        { value: 5, name: '小组六' },
        { value: 5, name: '小组七' }
      ],
      leafData: [
        {
          value: 5, name: "四叶级"
        },
        {
          value: 3, name: "五叶级"
        },
        {
          value: 43, name: "未评级"
        }
      ],
      orgTypeColor: [
        '#2FBBFF', '#30B449', '#73B8B2', '#EA7909'
      ],
      leafColor: ['#FF6564', '#66CBFD'],
      levelOrgColor: ['#3399FF', '#00CC99', '#FF6600']
    }
  },
  methods: {
    getCurrentTime() {
      setInterval(() => {
        var date = new Date()
        this.time = this.$baseFunc.formatTime(date).time
        this.date = this.$baseFunc.formatTime(date).date
        this.week = this.$baseFunc.formatTime(date).week
      }, 1000);
    },
    drawOrgType() {
      var vm = this;
      if (this.thePhoneChart) {
        this.thePhoneChart.dispose()
      }
      this.thePhoneChart = this.$echarts.init(document.getElementById("top_right_chart"))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['公办', '民营', '公建民营', '其它'],
          textStyle: {
            color: '#fff'
          },
          formatter: function (name) {
            var target;
            for (let item of vm.orgTypeData) {
              if (name === item.name) {
                target = item.value
              }
            }
            var arr = [
              name + `(${target})`
            ]
            return arr;
          },
        },
        series: [
          {
            name: '机构类型',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.orgTypeData,
            color: this.orgTypeColor
          }

        ]
      };
      this.thePhoneChart.setOption(option)
    },
    drawStar() {
      var vm = this
      if (this.theStarChart) {
        this.theStarChart.dispose()
      }
      vm.theStarChart = vm.$echarts.init(document.getElementById("starChart"))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['四星', '五星', '未评级'],
          textStyle: {
            color: '#fff'
          },
          formatter: function (name) {
            var target;
            for (let item of vm.starOrgData) {
              if (name === item.name) {
                target = item.value
              }
            }
            var arr = [
              name + `(${target})`
            ]
            return arr;
          },
        },
        series: [
          {
            name: '星级机构',
            type: 'pie',
            radius: ['65%', '80%'],
            center: ['60%', '40%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.starOrgData,
            color: this.orgTypeColor
          }

        ]
      };
      this.theStarChart.setOption(option)
    },
    drawLeaf() {
      var vm = this;
      if (this.theLeafChart) {
        this.theLeafChart.dispose()
      }
      vm.theLeafChart = vm.$echarts.init(document.getElementById("leafChart"))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['四叶级', '五叶级', '未评级'],
          textStyle: {
            color: '#fff'
          }
        },
        formatter: function (name) {
          var target;
          for (let item of vm.leafData) {
            if (name === item.name) {
              target = item.value
            }
          }
          var arr = [
            name + `(${target})`
          ]
          return arr;
        },
        series: [
          {
            name: '金叶级机构',
            type: 'pie',
            radius: ['65%', '80%'],
            center: ['60%', '40%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.leafData,
            color: this.chartColorArr
          }

        ]
      };
      this.theLeafChart.setOption(option)
    },
    drawLevelOrg() {
      let vm = this;
      if (this.theLevelOrg) {
        this.theLevelOrg.dispose()
      }
      vm.theLevelOrg = vm.$echarts.init(document.getElementById("levelOrg"))
      let option = {
        color: this.chartColorArr,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['四叶级', '五叶级', '四星级', '五星级'],
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['10-19', '10-20', '10-21', '10-22', '10-23', '10-24', '10-25'],
          axisLabel: {
            color: "#fff"
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: "#fff"
          }
        },
        series: [
          {
            name: '四叶级',
            type: 'line',
            data: [1, 1, 2, 3, 4, 4, 5, 5]
          },
          {
            name: '五叶级',
            type: 'line',
            data: [1, 1, 1, 2, 2, 2, 3, 3]
          },
          {
            name: '四星级',
            type: 'line',

            data: [1, 1, 2, 5, 5, 9, 12, 13]
          },
          {
            name: '五星级',
            type: 'line',
            data: [1, 1, 2, 2, 2, 2, 2, 2]
          }
        ]
      };
      this.theLevelOrg.setOption(option)
    },
    drawEvalUser() {
      var vm = this;
      if (this.theEvalUser) {
        this.theEvalUser.dispose()
      }
      vm.theEvalUser = vm.$echarts.init(document.getElementById("evalUser"))
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: 'vertical',
          x: 'left',
          data: ['小组一', '小组二', '小组三', '小组四', '小组五', '小组六', '小组七'],
          formatter: function (name) {
            var target;
            for (let item of vm.evalUserData) {
              if (name === item.name) {
                target = item.value
              }
            }
            var arr = [
              name + `(${target})`
            ]
            return arr;
          },
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '评估小组',
            type: 'pie',
            radius: '80%',
            center: ['60%', '40%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'left'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.evalUserData,
            color: this.chartColorArr
          }
        ]
      };
      this.theEvalUser.setOption(option)
    },
    async loopChart() {
      var that = this;
      setInterval(() => {
        if (that.$route.path === "/screen") {
          that.drawStar();
          that.drawLeaf();
          that.drawLevelOrg();
          that.drawEvalUser()
        }
      }, 10000)
    }
  },
  mounted() {
    if (this.$route.path != '/screen') {
      return false
    }
    if (this.$route.path === '/screen') {
      this.loopChart()
    }
    this.getCurrentTime()
    var vm = this
    // document.document.getElementsByClassName("not")[0].setAttribute("style", "border-right:0px;")
    vm.drawStar()
    vm.drawLeaf()
    vm.drawLevelOrg()
    vm.drawEvalUser()
    function handle() {
      if (vm.$route.path === '/screen') {
        vm.drawStar()
        vm.drawLeaf()
        vm.drawLevelOrg()
        vm.drawEvalUser()
      }
    }
    if (this.$route.path === '/screen') {
      window.addEventListener('resize', this.$baseFunc.debounce(handle, 500))
    }
  },
}
</script>
<style scoped lang="scss">
$backColorA: #001448;
// $backColorA: #2a2a2a;
$headFontIcon: #29ecff;
$dateWeekColor: #23ceec;
$leftIconColor: #90cae5;
$rightDivColor: #0836ae;
.home {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .header {
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 60px;
    align-items: center;
    width: 100%;
    background-color: black;
    z-index: 9;
    border-bottom: 1px solid #666;
    .rightIcon {
      color: $headFontIcon;
      font-size: 33px;
      cursor: pointer;
    }
    .timeFont {
      color: $headFontIcon;
      font-size: 26px;
      margin-left: 10px;
    }
    .titleFont {
      color: $headFontIcon;
      font-size: 26px;
    }
    .dateFont {
      color: $dateWeekColor;
      font-size: 18px;
    }
    .weekFont {
      color: $dateWeekColor;
      font-size: 18px;
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-flow: row;
    background-color: black;
    color: #fff;
    .left {
      display: flex;
      flex: 1;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      .top {
        flex: 2;
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        flex-flow: row;
        .top_left {
          flex: 3;
          border-right: 0px;
          .top_left_content {
            display: flex;
            flex-flow: row;
          }
        }
        .top_right {
          flex: 2;
        }
      }
      .middle {
        flex: 2;
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        flex-flow: row;
        .middle_left {
          flex: 2;
        }
        .middle_middle {
          flex: 2;
          // margin: 0px 10px;
          margin-left: 10px;
        }
        .middle_right {
          flex: 3;
        }
      }
      .third {
        flex: 3;
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        flex-flow: row;
      }
      .bottom {
        flex: 2;
        width: 100%;
        display: flex;
        flex-flow: row;
        .bottom_left {
          flex: 3;
          .bottom_left_content {
            display: flex;
            flex-flow: row;
            justify-content: space-around;
            .bottom_left_onesta {
              display: flex;
              flex-flow: column;
              justify-content: space-around;
              .labelText {
                display: inline-block;
                width: 120px;
              }
              .labelValue {
                font-weight: bold;
              }
            }
          }
        }
        .bottom_right {
          flex: 2;
          margin-left: 10px;
        }
      }
    }
    .right {
      min-width: 400px;
      flex: 1;
      padding: 10px;
      padding-left: 0px;
    }
  }
}
//公共div边框样式
.one_container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  // border: 0.5px solid #eee;
  border-radius: 3px;
  // background-color: #fafafa;
  // $rightDivColor: #2a2a2a;
  // background-color: $rightDivColor;
  background: linear-gradient(#031537, #042257, #031537);
  .one_title {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    // border-bottom: 0.5px solid #eeeeee;
    padding: 0px 10px;
  }
  .one_content {
    flex: 1;
    width: 100%;
  }
}
//---
.sta_one {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  // border-right: 0.5px solid #e4e7ed;
  min-width: 100px;
  flex-flow: column;
  div:nth-child(1) {
    font-size: 24px;
    font-weight: bold;
  }
  div:nth-child(2) {
    margin-top: 20px;
    color: gray;
  }
}
.four,
.fourLeaf {
  color: orange;
}
.five,
.fiveLeaf {
  color: #ff6633;
}
.leaf {
  color: #ff6633;
}
.not {
  border-right: 0px;
}
</style>
