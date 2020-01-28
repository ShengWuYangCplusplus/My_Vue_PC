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
            label: "床位状态",
            align: "center",
          },
          {
            prop: "b",
            label: "人数",
            align: "center",
          },
          {
            prop: "c",
            label: "百分比",
            align: "center",
          },
        ],
        currentObj: {
          dataList: [
            {
              a: '使用中',
              b: '293',
              c: '93.33',
            },
            {
              a: '空闲',
              b: '39',
              c: '6.66',
            },
            {
              a: '合计',
              b: '332',
              c: '-',
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
        text: '床位使用分析',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '床位统计',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 223, name: '使用中'},
                {value: 39, name: '空闲'},
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
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