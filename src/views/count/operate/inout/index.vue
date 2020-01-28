<template>
  <div class="outDiv">
    <div  style="display:flex;flex-fow:row">
        <div style="flex:3;">
        <Echart :id="'trendChart'" class="chart-content" :option="trendOption"></Echart>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      headFunc:  ({ row, column, rowIndex, columnIndex }) => {
        if (rowIndex == 0) {
          return "background:	#fff;color:black;font-size:14px;font-weight:bold;opacity:0.9;padding:6px";
        } else {
          return "";
        }
    },
      trendOption:{},
       searchTagList: [],
      searchVisible: false,
      allTableObj: {
        showPage: false,
        columns: [
          {
            prop: "a",
            label: "时间",
            align: "center",
          },
          {
            prop: "b",
            label: "试住",
            align: "center",
          },
          {
            prop: "c",
            label: "入住",
            align: "center",
          },
          {
            prop: "d",
            label: "出院",
            align: "center",
          },
        ],
        currentObj: {
          dataList: [
            {
              a: '2017-10',
              b: '30',
              c: '10',
              d: '5',
            },
            {
              a: '2017-11',
              b: '30',
              c: '10',
              d: '5',
            },
            {
              a: '2017-12',
              b: '30',
              c: '10',
              d: '5',
            },
            {
              a: '2018-01',
              b: '30',
              c: '10',
              d: '5',
            },
            {
              a: '2018-02',
              b: '30',
              c: '10',
              d: '5',
            },
            {
              a: '2018-03',
              b: '30',
              c: '10',
              d: '5',
            },
            {
              a: '2018-04',
              b: '30',
              c: '10',
              d: '5',
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
          show: true,
          align: "center",
          width: "200px",
          btns: [
            {
              size: "mini",
              type: "text",
              text:'详情',
              style: "font-size:14px",
              disabled: false,
              method: (index, row) => {
                this.handleDetail(index, row);
              }
            }
          ]
        },
        currentTab: "all",
      }
    }
  },
  methods:{
    draw(){
      this.trendOption={
        title: {
        text: '老人出入院分析'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['试住', '入住', '出院']
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
        data: ['2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '试住',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '入住',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '出院',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
    ]
      }
    }
  },
  mounted(){
    this.draw()
  }
}
</script>

<style>
</style>