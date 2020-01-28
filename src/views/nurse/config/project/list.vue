<template>
  <div class="outDiv" style="display:flex;flex-flow:row">
    <div style="flex:1">
      <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        ></el-tree>
    </div>
    <div style="flex:3;margin-left:20px">
      <div class="searchBar">
      <div class="searchLeft">
        <el-popover placement="right-bottom" title="条件检索" trigger="click" v-model="searchVisible">
          <searchForm @startSearch="handleTableSearch" @cancleSearch="handleCancleSeach"></searchForm>
          <el-button slot="reference" size="mini">按条件筛选</el-button>
        </el-popover>
        <navTopTag :searchTagList="searchTagList" @handleDelOne="handleDelOne"></navTopTag>
      </div>
      <div>
        <el-button size="mini" type="primary" @click="add">添加护理项</el-button>
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
  </div>
</template>
<script>
let id = 1000;

export default {
  data() {
    const data = [{
      id: 1,
      label: '一级',
      children: [{
        id: 4,
        label: '基础护理',
      }]
    }, 
    {
      id: 2,
      label: '二级',
    }, 
    {
      id: 44,
      label: '三级',
     
    }, 
    {
      id: 32,
      label: '四级',
    }, 
    {
      id: 3,
      label: '五级',
     
    }];
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
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
            label: "项目名称",
            align: "center",
          },
          {
            prop: "b",
            label: "项目费用(元)",
            align: "center",
          },
          {
            prop: "c",
            label: "收费方式",
            align: "center",
          },
          {
            prop: "d",
            label: "所需时间(分钟)",
            align: "center",
          },
          {
            prop: "e",
            label: "刷卡登记",
            align: "center",
          },
          {
            prop: "f",
            label: "登记间隔",
            align: "center",
          },
          {
            prop: "g",
            label: "所属类别",
            align: "center"
          },
          {
            prop: 'h',
            label: '项目说明',
            align: 'center',
          },
        ],
        currentObj: {
          dataList: [
            {
              num: 1,
              a: '组织宗教文化活动',
              b: '0',
              c: '月/次',
              d: '30',
              e: '否',
              f: '0分钟',
              g: '生活照料',
              h: '',
            },
            {
              num: 2,
              a: '游戏互动',
              b: '0',
              c: '月/次',
              d: '30',
              e: '否',
              f: '0分钟',
              g: '生活照料',
              h: '',
            },
            {
              num: 3,
              a: '血糖监测',
              b: '0',
              c: '月/次',
              d: '30',
              e: '否',
              f: '0分钟',
              g: '生活照料',
              h: '',
            },
            {
              num: 4,
              a: '口腔护理',
              b: '0',
              c: '月/次',
              d: '30',
              e: '否',
              f: '0分钟',
              g: '生活照料',
              h: '',
            },
            {
              num: 5,
              a: '测量血压',
              b: '0',
              c: '月/次',
              d: '30',
              e: '否',
              f: '0分钟',
              g: '生活照料',
              h: '',
            },
            {
              num: 6,
              a: '理发',
              b: '0',
              c: '月/次',
              d: '30',
              e: '否',
              f: '0分钟',
              g: '生活照料',
              h: '',
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

  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>添加</el-button>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>编辑</el-button>
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>删除</el-button>
          </span>
        </span>);
    },
    add() {
      this.$router.push({ name: 'nurse-config-project-add' });
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
      getSameHouseOldersApi(reqObj).then(
        res => {
          if (res.code === 0) {
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
      ).catch(() => { }).finally(() => {
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
    }
  },
};
</script>
