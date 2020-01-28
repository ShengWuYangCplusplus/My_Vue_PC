<template>
  <div class="outDiv">
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        ></el-tree>
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
      label: '押金',
      children: [{
        id: 4,
        label: '基础押金',
        children: [{
          id: 9,
          label: '人身保险'
        }]
      }]
    }, {
      id: 2,
      label: '床位费',
      children: [{
        id: 5,
        label: '被褥费'
      }, {
        id: 6,
        label: '电费'
      }]
    }, {
      id: 3,
      label: '清洁费',
      children: [{
        id: 7,
        label: '早餐'
      }, {
        id: 8,
        label: '燃气费'
      }]
    }];
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data))
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
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>删除</el-button>
          </span>
        </span>);
    }
  }
};
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>