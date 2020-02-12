<template>
  <div class="outDiv">
    <div></div>
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
export default {
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
            },
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
            },
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
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
      this.optionTwo = {
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
      this.optionThree = {
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
      this.optionFive = {
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
      this.optionSix = {
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
      this.optionSeven = {
        title: {
          text: "补贴消费统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["床位费", "护理费", "餐食费", "卫生费", "其他"]
        },
        series: [
          {
            name: "消费金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "床位费" },
              { value: 310, name: "护理费" },
              { value: 234, name: "餐食费" },
              { value: 135, name: "卫生费" },
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
