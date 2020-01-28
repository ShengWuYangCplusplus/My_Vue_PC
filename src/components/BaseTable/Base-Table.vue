
  <template>
  <div>
    <el-table
      :header-cell-style="getTableHead"
      size="medium"
      :data="currentObj.dataList"
      v-loading="loadObj.isLoading"
      border
      :height="options.tableHeight"
      class="tapTableContainer"
      :stripe="options.stripe"
      :highlightCurrentRow="options.highlightCurrentRow"
    >
      ">
      <el-table-column
        v-for="(item,index) in columns"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :key="item.index"
        :align="item.align"
        :sortable="item.sortable"
        :show-overflow-tooltip="true"
        :fixed="item.fixed"
      >
        <template slot-scope="scope">
          <template v-if="item.render">
            <expand-dom :item="item" :row="scope.row" :render="item.render" :index="index"></expand-dom>
          </template>
          <template v-else>
            <template v-if="item.route">
              <el-button
                type="text"
                @click="item.method(scope.$index,scope.row)"
              >{{scope.row[item.prop]}}</el-button>
            </template>
            <template v-else-if="item.tag">
              <el-tag type="info" :size="item.tagSize" disable-transitions>{{scope.row[item.prop]}}</el-tag>
            </template>
            <template v-else-if="item.popver">
              <el-popover
                placement="top"
                :title="item.popverLabel"
                width="200"
                trigger="hover"
                :content="scope.row[item.popverProp]"
              >
                <span slot="reference">{{scope.row[item.prop]}}</span>
              </el-popover>
            </template>
            <template v-else-if="item.columnFilter">
              <span>{{$options.filters[item.columnFilter](scope.row[item.prop])}}</span>
            </template>
            <template v-else>
              <span :style="item.fontStyle">{{scope.row[item.prop]}}</span>
            </template>
          </template>
        </template>
      </el-table-column>
      <el-table-column type="expand" v-if="expandColumn" width="60px">
        <template slot-scope="scope">
          <el-form labelPosition="left" inline class="demo-table-expand" size="mini">
            <el-form-item
              v-for="(item,index) in expandColumn.expandList"
              :key="index"
              :label="item.label"
            >{{scope.row[item.prop]}}</el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        v-if="operationColumn.show"
        :align="operationColumn.align"
        :width="operationColumn.width"
      >
        <template slot-scope="scope">
          <div style="display:flex;flex-flow:row;justify-content:space-around">
            <div v-for="(item,index) in operationColumn.btns">
              <el-button
                :key="index"
                :size="item.size"
                :type="item.type"
                :icon="item.icon"
                :disabled="item.name&&item.value.includes(scope.row[item.name])?true:false"
                :style="item.style"
                @click.native="item.method(scope.$index,scope.row)"
              >
                <span>{{item.text}}</span>
              </el-button>
            </div>
            <div
              v-if="operationColumn.otherBtn"
              v-for="(obj,index) in operationColumn.otherBtn"
              :key="index"
            >
              <el-button
                :type="obj.type"
                :icon="obj.icon"
                v-if="obj.value.indexOf(scope.row[obj.item])!=-1"
                :size="obj.size"
                :style="obj.style"
                @click.native="obj.method(scope.$index,scope.row)"
              >{{obj.text}}</el-button>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageBar">
      <el-pagination
        v-if="showPage"
        @size-change="sizeChange($event)"
        @current-change="currentChange($event)"
        size="mini"
        background
        :current-page="currentObj.currentPage"
        :page-size="currentObj.pageSize"
        :total="currentObj.total"
        :layout="pageLayout"
        :page-sizes="pageSizes"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    currentObj: {
      type: Object,
      default: () => { }
    },
    showPage: {
      type: Boolean,
      default: () => true
    },
    pageLayout: {
      type: String,
      default: () => "total,sizes,prev,pager,next,jumper"
    },
    pageSizes: {
      type: Array,
      default: () => [15, 20, 50, 100]
    },
    columns: {
      type: Array,
      default: () => []
    },
    operates: {},
    fenyeObj: {
      type: Object,
      default: () => { }
    },
    options: {
      type: Object,
      default: () => {
        tableHeight: null
      }
    },
    loadObj: {
      type: Object,
      default: () => ({ isLoading: false })
    },
    operationColumn: {
      type: Object,
      default: () => { }
    },
    expandColumn: {
      type: Object,
      default: () => null
    },
    headFunc: {
      type: Function,
      default: ({ row, column, rowIndex, columnIndex }) => {
        if (rowIndex == 0) {
          return "background:	#2196F3;color:white;font-size:14px;opacity:0.9;padding:6px";
        } else {
          return "";
        }
      }
    }
  },
  components: {
    expandDom: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, ctx) => {
        const params = {
          row: ctx.props.row,
          index: ctx.props.index
        };
        if (ctx.props.column) {
          params.column = ctx.props.column;
        }
        return ctx.props.render(h, params);
      }
    }
  },
  methods: {
    sizeChange(e) {
      this.$emit("dataSizeChange", e);
    },
    currentChange(e) {
      this.$emit("dataCurrentChange", e);
    },
    getTableHead({ row, column, rowIndex, columnIndex }) {
      return this.headFunc({ row, column, rowIndex, columnIndex })
    }
  },
};
</script>
<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-left: 10%;
  margin-bottom: 0;
  width: 40%;
}
</style>


