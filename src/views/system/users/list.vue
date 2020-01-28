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
      <div>
        <el-button size="mini" type="primary" @click="add">添加用户</el-button>
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
            prop: "UserName",
            label: "员工姓名",
            align: "center",
            route: true,
            method: (index, row) => {
              this.handleDetail(index, row, 'a');
            }
          },
          {
            prop: "Phone",
            label: "手机号",
            align: "center",
          },
          {
            prop: "Department",
            label: "部门",
            align: "center",
          },
          {
            prop: "Account",
            label: "登录账号",
            align: "center"
          },
        ],
        currentObj: {
          dataList: [],
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
              icon: "el-icon-delete",
              type: "text",
              style: "font-size:16px;color:#F56C6C",
              disabled: false,
              method: (index, row) => {
                this.handleDelete( row);
              }
            }
          ]
        },
        currentTab: "all",
      }
    };
  },
  methods: {
    add() {
      this.$router.push({ name: 'system-users-add' });
    },
    handleTableSearch(i) {
      this.searchVisible = i.searchShow;
      this.searchTagList = this.$searchTag.getTagList(
        [{ cnName: "姓名",engName: "username"}],
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
      const obj = this.$searchTag.deleteOneSearch(
        i[0],
        this.currentSearchForm
      );
      if (this.$baseFunc.paramsValidate(obj)) {
        this.allTableObj.searchDataNow.dataList = [];
        this.allTableObj.searchDataNow.currentPage = 1;
        this.allTableObj.searchDataNow.pageSize = 20;
        this.allTableObj.searchDataNow.total = 0;
        this.allTableObj.currentTab = "all";
        this.allTableObj.showPage = false;
        this.allTableObj.currentObj = { ...this.allTableObj.allDataNow }
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
        this.allTableObj.currentObj = { ...this.allTableObj.allDataNow }
        this.$nextTick().then(() => {
          this.allTableObj.showPage = true;
        });
      }
      if (i.name == "search") {
        this.allTableObj.showPage = false;
        this.allTableObj.currentObj = { ...this.allTableObj.searchDataNow }
        this.$nextTick().then(() => {
          this.allTableObj.showPage = true;
        });
      }
    },
    loadData(reqObj) {
      this.allTableObj.loadObj.isLoading = true;
      this.$apis.System.getUserList(reqObj).then(
        result => {
          console.log(result)
          if (result.code === 0) {
            let res=result.data;
            const temp = {
              dataList: res.data.map((item, idx) => ({
                num: res.index * res.size + idx + 1,
                ...item
              })),
              currentPage: res.index + 1,
              total: res.total,
              pageSize: res.size
            }
            this.allTableObj.currentObj = { ...temp }
            if (this.allTableObj.currentTab === 'all') {
              this.allTableObj.allDataNow = { ...temp }
            }
            if (this.allTableObj.currentTab === 'search') {
              this.allTableObj.searchDataNow = { ...temp }
            }
          } else {
            this.$message.error(`获取数据失败${res.des}`)
          }
        }
      ).catch((err) => {
        console.log(err)
      }).finally(() => {
        this.allTableObj.loadObj.isLoading = false
      })
    },
    //每次页面码数变了 要变回第一页
    handleSizeChange(i) {
      if (this.$baseFunc.isEmptyObj(this.currentSearchForm) && this.allTableObj.currentTab === 'search') {
        this.$message.error('检索条件不能为空')
        return false
      }
      let reqObj = {};
      let tab = this.allTableObj.currentTab
      if (tab === 'all') {
        this.allTableObj.allDataNow.currentPage = 1;
        this.allTableObj.allDataNow.pageSize = i;
        reqObj = {
          index: 0,
          size: i
        };
      }
      else if (tab === 'search') {
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
      if (this.$baseFunc.isEmptyObj(this.currentSearchForm) && this.allTableObj.currentTab === 'search') {
        this.$message.error('检索条件不能为空')
        return
      }
      let reqObj = {};
      let tab = this.allTableObj.currentTab;
      if (tab == "all") {
        this.allTableObj.allDataNow.currentPage = i;
        reqObj = {
          index: i - 1,
          size: this.allTableObj.allDataNow.pageSize
        };
      }
      else if (flag == "search") {
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
      console.log(i, j)
    },
    handleDelete(i){
      this.$confirm("确认删除该用户?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error"
      }).then(() => {
        const loading = this.$loading({
          lock: true,
          text: "提交中...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        this.$apis.System.deleteUser({ userId: i.ID }).then(
          res => {
            if (res.code === 0) {
              this.$message.success('删除成功')
              this.reload()
            } else {
              this.$message.error(`删除失败:${res.des}`)
            }
          }
        ).finally(() => {
          loading.close()
        })
      }).catch(() => {
        return
      })
    }
  },
  mounted() {
    this.loadData({ index: 0, size: 20 })
  }
};
</script>

