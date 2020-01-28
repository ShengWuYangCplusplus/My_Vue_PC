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
      label: '床位费',
      children: [{
        id: 4,
        label: '一级床位',
        children: [{
          id: 9,
          label: '二级床位'
        }]
      }]
    }, {
      id: 2,
      label: '护理费',
      children: [{
        id: 5,
        label: '衣物清洗费'
      }, {
        id: 6,
        label: '陪聊服务'
      }]
    }, {
      id: 3,
      label: '其它费用',
      children: [{
        id: 7,
        label: '电费'
      }, {
        id: 8,
        label: '保洁费'
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
            <el-button size="mini" type="text" on-click={() => this.append(data)}>调整费用</el-button>
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