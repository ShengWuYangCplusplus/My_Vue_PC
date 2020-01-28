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
            label: "入住率",
            align: "center",
          },
        ],
        currentObj: {
          //13, 22, 33, 44, 66, 88, 82,80,77,92,84
          dataList: [
            {
              a: '2017-10',
              b: '13',
            },
            {
              a: '2017-11',
              b: '22',
            },
            {
              a: '2017-12',
              b: '33',
            },
            {
              a: '2018-01',
              b: '44',
            },
            {
              a: '2018-02',
              b: '66',
            },
            {
              a: '2018-03',
              b: '88',
            },
            {
              a: '2018-04',
              b: '82',
            },
            {
              a: '2018-05',
              b: '80',
            },
            {
              a: '2018-06',
              b: '77',
            },
            {
              a: '2018-07',
              b: '92',
            },
            {
              a: '2018-08',
              b: '84',
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
  mounted(){
    this.draw()
  }
}
</script>

<style>
</style>