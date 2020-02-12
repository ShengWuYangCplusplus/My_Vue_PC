<template>
  <div class="outDiv">
    <div class="searchBar">
      <div class="searchLeft">
        <el-popover placement="right-bottom" title="条件检索" trigger="click" v-model="searchVisible">
          <searchForm @startSearch="handleTableSearch" @cancleSearch="handleCancleSeach"></searchForm>
          <el-button slot="reference" size="mini">按条件筛选</el-button>
        </el-popover>
        <navTopTag :searchTagList="searchTagList" @handleDelOne="handleDelOne"></navTopTag>
      </div>
    </div>
    <div>
      <el-tabs v-model="allTableObj.currentTab" @tab-click="tabClick($event)">
        <el-tab-pane label="所有数据" name="all"></el-tab-pane>
        <el-tab-pane label="搜索结果" name="search"></el-tab-pane>
      </el-tabs>
      <div>
        <BaseTable
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
import searchForm from "./list-search";
export default {
  inject: ["reload"],
  components: {
    searchForm
  },
  data() {
    return {
      searchTagList: [],
      searchVisible: false,
      allTableObj: {
        showPage: true,
        columns: [
          {
            prop: "num",
            label: "#",
            width: "50px",
            align: "center"
          },
          {
            prop: "a",
            label: "老人姓名",
            align: "center",
            route: true
          },
          {
            prop: "b",
            label: "床位号",
            align: "center"
          },
          {
            prop: "c",
            label: "探视人姓名",
            align: "center"
          },
          {
            prop: "d",
            label: "探视人关系",
            align: "center"
          },
          {
            prop: "e",
            label: "探视人电话",
            align: "center"
          },
          {
            prop: "f",
            label: "探视人身份证",
            align: "center"
          },
          {
            prop: "g",
            label: "探视时间",
            align: "center"
          },
          {
            prop: "i",
            label: "探视原因",
            align: "center"
          }
        ],
        currentObj: {
          dataList: [
            {
              num: 1,
              a: "陈义初",
              b: "B栋-101-01",
              c: "吴满江",
              d: "家属",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "关照老人"
            },
            {
              num: 2,
              a: "李海波",
              b: "C栋-201-01",
              c: "李江涛",
              d: "家属",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "探望老人"
            },
            {
              num: 3,
              a: "周凯旺",
              b: "D栋-101-04",
              c: "周龙",
              d: "家属",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "探望老人"
            },
            {
              num: 4,
              a: "吴晓波",
              b: "A栋-101-01",
              c: "刘兴江",
              d: "朋友",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "关照老人"
            },
            {
              num: 5,
              a: "陈晓康",
              b: "B栋-301-01",
              c: "陈永安",
              d: "家属",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "关照老人"
            },
            {
              num: 6,
              a: "郑玉年",
              b: "B栋-401-05",
              c: "周晓梅",
              d: "家属",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "关照老人"
            },
            {
              num: 7,
              a: "赵紫云",
              b: "B栋-202-08",
              c: "杨博文",
              d: "朋友",
              e: "15689352014",
              f: "362322198103251476",
              g: "2019-05-17 09:21:00",
              h: "2019-05-18 18:00:00",
              i: "关照老人"
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
          show: true,
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
    add() {
      this.$router.push({ name: "residence-register-live-add" });
    },
    handleTableSearch(i) {
      this.searchVisible = i.searchShow;
      this.searchTagList = this.$searchTag.getTagList(
        this.$searchNameList.getSameOldSearch(),
        i.searchData
      );
      this.$store.commit("setSearchForm", i.searchData);
      this.allTableObj.currentTab = "search";
      const reqObj = {
        index: 0,
        size: 20,
        ...i.searchData
      };
      this.loadData(reqObj);
    },
    handleCancleSeach(i) {
      this.searchVisible = i.searchShow;
    },
    handleDelOne(i) {
      //减少一个检索条件时
      this.searchTagList = this.searchTagList.filter((item, index) => {
        if (item[0] === i[0]) {
          return false;
        } else {
          return true;
        }
      });
      const obj = this.$searchTag.deleteOneSearch(i[0], this.currentSearchForm);
      if (this.$baseFunc.paramsValidate(obj)) {
        this.allTableObj.searchDataNow.dataList = [];
        this.allTableObj.searchDataNow.currentPage = 1;
        this.allTableObj.searchDataNow.pageSize = 20;
        this.allTableObj.searchDataNow.total = 0;
        this.allTableObj.currentTab = "all";
        this.allTableObj.showPage = false;
        this.allTableObj.currentObj = { ...this.allTableObj.allDataNow };
        this.$nextTick(() => {
          this.allTableObj.showPage = true;
        });
      } else {
        const reqObj = {
          index: 0,
          size: 20,
          ...obj
        };
        this.loadData(reqObj);
      }
      this.$store.commit("setSearchForm", obj);
    },
    tabClick(i) {
      if (i.name == "all") {
        this.allTableObj.showPage = false;
        this.allTableObj.currentObj = { ...this.allTableObj.allDataNow };
        this.$nextTick().then(() => {
          this.allTableObj.showPage = true;
        });
      }
      if (i.name == "search") {
        this.allTableObj.showPage = false;
        this.allTableObj.currentObj = { ...this.allTableObj.searchDataNow };
        this.$nextTick().then(() => {
          this.allTableObj.showPage = true;
        });
      }
    },
    loadData(reqObj) {
      this.allTableObj.loadObj.isLoading = true;
      getSameHouseOldersApi(reqObj)
        .then(res => {
          if (res.code === 0) {
            const temp = {
              dataList: res.data.map((item, idx) => ({
                num: res.index * res.size + idx + 1,
                ...item
              })),
              currentPage: res.index + 1,
              total: res.total,
              pageSize: res.size
            };
            this.allTableObj.currentObj = { ...temp };
            if (this.allTableObj.currentTab === "all") {
              this.allTableObj.allDataNow = { ...temp };
            }
            if (this.allTableObj.currentTab === "search") {
              this.allTableObj.searchDataNow = { ...temp };
            }
          } else {
            this.$message.error(`获取数据失败${res.des}`);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.allTableObj.loadObj.isLoading = false;
        });
    },
    //每次页面码数变了 要变回第一页
    handleSizeChange(i) {
      if (
        this.$baseFunc.isEmptyObj(this.currentSearchForm) &&
        this.allTableObj.currentTab === "search"
      ) {
        this.$message.error("检索条件不能为空");
        return false;
      }
      let reqObj = {};
      let tab = this.allTableObj.currentTab;
      if (tab === "all") {
        this.allTableObj.allDataNow.currentPage = 1;
        this.allTableObj.allDataNow.pageSize = i;
        reqObj = {
          index: 0,
          size: i
        };
      } else if (tab === "search") {
        this.allTableObj.searchDataNow.currentPage = 1;
        this.allTableObj.searchDataNow.pageSize = i;
        reqObj = {
          index: 0,
          size: i,
          ...this.currentSearchForm
        };
      }
      this.loadData(reqObj);
    },
    handleCurrentChange(i) {
      if (
        this.$baseFunc.isEmptyObj(this.currentSearchForm) &&
        this.allTableObj.currentTab === "search"
      ) {
        this.$message.error("检索条件不能为空");
        return;
      }
      let reqObj = {};
      let tab = this.allTableObj.currentTab;
      if (tab == "all") {
        this.allTableObj.allDataNow.currentPage = i;
        reqObj = {
          index: i - 1,
          size: this.allTableObj.allDataNow.pageSize
        };
      } else if (flag == "search") {
        this.allTableObj.searchDataNow.currentPage = i;
        reqObj = {
          index: i - 1,
          size: this.allTableObj.searchDataNow.pageSize,
          ...this.currentSearchForm
        };
      }
      this.loadData(reqObj);
    },
    handleDetail(i, j) {
      console.log(i, j);
    }
  },
  mounted() {
    // this.loadData({ index: 0, size: 20 })
  }
};
</script>

