<template>
  <div class="outDiv">
    <div style="display:flex;flex-fow:row">
      <div style="flex:3;">
        <Echart :id="'grantChart'" class="chart-content" :option="grantOption"></Echart>
      </div>
      <div style="flex:2">
        <BaseTable
          :headFunc="headFunc"
          :columns="allTableObj.columns"
          :currentObj="allTableObj.currentObj"
          :showPage="allTableObj.showPage"
          :options="allTableObj.options"
          :loadObj="allTableObj.loadObj"
          :operationColumn="allTableObj.operationColumn"
          @dataSizeChange="handleSizeChange($event)"
          @dataCurrentChange="handleCurrentChange($event)"
        ></BaseTable>
      </div>
    </div>
    <div style="display:flex;flex-flow:row">
      <div style="flex:1">
        <Echart :id="'trendChart'" class="chart-content" :option="trendOption"></Echart>
      </div>
      <div style="flex:1">
        <Echart :id="'typeChart'" class="chart-content" :option="typeOption"></Echart>
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
      trendOption: {},
      grantOption: {},
      typeOption: {},
      searchTagList: [],
      searchVisible: false,
      allTableObj: {
        showPage: false,
        columns: [
          {
            prop: "a",
            label: "统计时间",
            align: "center"
          },
          {
            prop: "b",
            label: "老人类型",
            align: "center"
          },
          {
            prop: "c",
            label: "金额",
            align: "center"
          }
        ],
        currentObj: {
          dataList: [
            {
              a: "2019",
              b: "A类老人",
              c: "522347"
            },
            {
              a: "2019",
              b: "B类老人",
              c: "821346"
            },
            {
              a: "2019",
              b: "C类老人",
              c: "165271"
            },
            {
              a: "2019",
              b: "D类老人",
              c: "25879"
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
      this.trendOption = {
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
      this.grantOption = {
        title: {
          text: "补贴发放统计",
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
          data: ["A类老人", "B类老人", "C类老人", "D类老人"]
        },
        series: [
          {
            name: "发放金额",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "A类老人" },
              { value: 310, name: "B类老人" },
              { value: 234, name: "C类老人" },
              { value: 135, name: "D类老人" }
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
      this.typeOption = {
        title: {
          text: "补贴类型统计",
          subtext: "2019年度",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["政府补贴", "爱心午餐", "孝善基金"]
        },
        series: [
          {
            name: "补贴类型",
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
              { value: 335, name: "政府补贴" },
              { value: 310, name: "爱心午餐" },
              { value: 234, name: "孝善基金" }
            ]
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

<style>
</style>