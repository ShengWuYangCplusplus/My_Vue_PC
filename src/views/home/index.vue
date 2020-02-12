<template>
  <div class="outDiv">
   <TopCount />
    <div>
      <div style="display:flex;flex-flow:row">
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>本月长者状态</span>
          </div>
          <Echart :id="'chartOne'" class="chart-container" :option="optionOne"></Echart>
        </el-card>
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>长者状态走势</span>
          </div>
          <Echart :id="'chartTwo'" class="chart-container" :option="optionTwo"></Echart>
        </el-card>
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>员工岗位统计</span>
          </div>
          <Echart :id="'chartThree'" class="chart-container" :option="optionThree"></Echart>
        </el-card>
      </div>
      <div style="display:flex;flex-flow:row">
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>护理等级统计</span>
          </div>
          <BaseTable
            :headFunc="headFunc"
            :columns="tableOne.columns"
            :currentObj="tableOne.currentObj"
            :showPage="tableOne.showPage"
            :options="tableOne.options"
            :loadObj="tableOne.loadObj"
            :operationColumn="tableOne.operationColumn"
          ></BaseTable>
        </el-card>
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>财务出入账</span>
          </div>
          <BaseTable
            :headFunc="headFunc"
            :columns="tableTwo.columns"
            :currentObj="tableTwo.currentObj"
            :showPage="tableTwo.showPage"
            :options="tableTwo.options"
            :loadObj="tableTwo.loadObj"
            :operationColumn="tableTwo.operationColumn"
          ></BaseTable>
        </el-card>
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>今日小组护理情况</span>
          </div>
          <Echart :id="'chartFour'" class="chart-container" :option="optionFour"></Echart>
        </el-card>
      </div>
      <div style="display:flex;flex-flow:row">
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>床位使用统计</span>
          </div>
          <Echart :id="'chartFive'" class="chart-container" :option="optionFive"></Echart>
        </el-card>
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>床位状态走势</span>
          </div>
          <Echart :id="'chartSix'" class="chart-container" :option="optionSix"></Echart>
        </el-card>
        <el-card style="flex:1;margin:10px">
          <div slot="header">
            <span>入住率走势</span>
          </div>
          <Echart :id="'chartSeven'" class="chart-container" :option="optionSeven"></Echart>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import TopCount from './topCount.vue'
export default {
  components:{
    TopCount
  },
  data() {
    return {
      headFunc: ({ row, column, rowIndex, columnIndex }) => {
        if (rowIndex == 0) {
          return "background:	#fff;color:black;font-size:14px;font-weight:bold;opacity:0.9;padding:6px";
        } else {
          return "";
        }
      },
      optionOne: {},
      optionTwo: {},
      optionThree: {},
      optionFour: {},
      optionFive: {},
      optionSix: {},
      optionSeven: {},
      tableOne: {
        showPage: false,
        columns: [
          {
            prop: "a",
            label: "护理类型",
            align: "center"
          },
          {
            prop: "b",
            label: "护理等级",
            align: "center"
          },
          {
            prop: "c",
            label: "选择人数",
            align: "center"
          },
          {
            prop: "d",
            label: "合计",
            align: "center"
          }
        ],
        currentObj: {
          dataList: [
            {
              a: "2017-10",
              b: "18",
              c: "6",
              d: "2"
            },
            {
              a: "2017-11",
              b: "68",
              c: "8",
              d: "3"
            },
            {
              a: "2017-12",
              b: "36",
              c: "3",
              d: "1"
            }
          ],
          currentPage: 1,
          pageSize: 20,
          total: 0
        },
        options: {
          stripe: true,
          highlightCurrentRow: true,
          headStyleMethod: this.getTableHead
        },
        loadObj: {
          isLoading: false
        },
        allDataNow: {
          currentPage: 1,
          pageSize: 20,
          dataList: [],
          total: 0
        },
        searchDataNow: {
          currentPage: 1,
          pageSize: 20,
          dataList: [],
          total: 0
        },
        operationColumn: {
          show: false,
          align: "center",
          width: "200px",
          btns: [
            {
              size: "mini",
              type: "text",
              text: "详情",
              style: "font-size:14px",
              disabled: false,
              method: (index, row) => {
                this.handleDetail(index, row);
              }
            }
          ]
        },
        currentTab: "all"
      },
      tableTwo: {
        showPage: false,
        columns: [
          {
            prop: "a",
            label: "月份",
            align: "center"
          },
          {
            prop: "b",
            label: "收入",
            align: "center"
          },
          {
            prop: "c",
            label: "支出",
            align: "center"
          },
          {
            prop: "d",
            label: "盈余",
            align: "center"
          }
        ],
        currentObj: {
          dataList: [
            {
              a: "2017-10",
              b: "18",
              c: "6",
              d: "2"
            },
            {
              a: "2017-11",
              b: "68",
              c: "8",
              d: "3"
            },
            {
              a: "2017-12",
              b: "36",
              c: "3",
              d: "1"
            }
          ],
          currentPage: 1,
          pageSize: 20,
          total: 0
        },
        options: {
          stripe: true,
          highlightCurrentRow: true,
          headStyleMethod: this.getTableHead
        },
        loadObj: {
          isLoading: false
        },
        allDataNow: {
          currentPage: 1,
          pageSize: 20,
          dataList: [],
          total: 0
        },
        searchDataNow: {
          currentPage: 1,
          pageSize: 20,
          dataList: [],
          total: 0
        },
        operationColumn: {
          show: false,
          align: "center",
          width: "200px",
          btns: [
            {
              size: "mini",
              type: "text",
              text: "详情",
              style: "font-size:14px",
              disabled: false,
              method: (index, row) => {
                this.handleDetail(index, row);
              }
            }
          ]
        },
        currentTab: "all"
      }
    };
  },
  methods: {
    draw() {
      this.optionOne = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        // },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "入住" },
              { value: 310, name: "试住" },
              { value: 234, name: "转院" },
              { value: 135, name: "出院" },
              { value: 1548, name: "咨询" },
              { value: 1548, name: "预约" },
              { value: 1548, name: "待入住" },
              { value: 1548, name: "待试住" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.optionTwo = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["试住", "入住", "出院"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2017-10",
            "2017-11",
            "2017-12",
            "2018-01",
            "2018-02",
            "2018-03",
            "2018-04"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "试住",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "入住",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "出院",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      };
      this.optionThree = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        // },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "行政人员" },
              { value: 310, name: "医务人员" },
              { value: 234, name: "后勤人员" },
              { value: 135, name: "护理人员" },
              { value: 1548, name: "其他" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.optionFour = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // legend: {
        //   data: [
        //     "直接访问",
        //     "邮件营销",
        //     "联盟广告",
        //     "视频广告",
        //     "搜索引擎",
        //     "百度",
        //     "谷歌",
        //     "必应",
        //     "其他"
        //   ]
        // },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["护理小分队", "快乐家族", "第二小组", "青春组", "测试"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "护理小分队",
            type: "bar",
            data: [320, 332, 301, 334, 390]
          },
          {
            name: "快乐家族",
            type: "bar",

            data: [120, 132, 101, 134, 90]
          },
          {
            name: "第二小组",
            type: "bar",

            data: [220, 182, 191, 234, 290]
          },
          {
            name: "青春组",
            type: "bar",

            data: [150, 232, 201, 154, 190]
          },
          {
            name: "测试",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679],
            markLine: {
              lineStyle: {
                type: "dashed"
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          }
        ]
      };
      this.optionFive = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["已入住", "待入住", "空闲"]
        },
        series: [
          {
            name: "床位统计",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "已入住" },
              { value: 310, name: "待入住" },
              { value: 234, name: "空闲" },
            ]
          }
        ]
      };
      this.optionSix = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["试住", "待入住", "空闲"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2017-10",
            "2017-11",
            "2017-12",
            "2018-01",
            "2018-02",
            "2018-03",
            "2018-04"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "试住",
            type: "line",
            stack: "总量",
            data: [56, 88, 101, 134, 60, 35, 66]
          },
          {
            name: "待入住",
            type: "line",
            stack: "总量",
            data: [220, 182, 21, 33, 290, 330, 310]
          },
          {
            name: "空闲",
            type: "line",
            stack: "总量",
            data: [65, 138, 201, 113, 190, 185, 102]
          }
        ]
      };
      this.optionSeven={
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['入住率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', 
        '2018-04',
        '2018-05',
        '2018-06',
        '2018-07',
        '2018-08',
        ]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '入住率',
            type: 'line',
            stack: '总量',
            data: [13, 22, 33, 44, 66, 88, 82,80,77,92,84]
        },
    ]
      }
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
<style scoped>
.home {
  height: calc(100vh - 130px);
  width: 100%;
  /* background-image: url("../../assets/images/retirehome01.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
}
.chart-container {
  height: 200px;
}
</style>
