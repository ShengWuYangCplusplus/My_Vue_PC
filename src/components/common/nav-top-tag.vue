<template>
  <div>
    <el-tag
      size="medium"
      style="margin-left:10px"
      v-for="(item,index) in searchTagList"
      :key="index"
      closable
      effect="plain"
      @close="handleDelOne(item)"
      type="success"
    >{{`${item[2]}:${item[1]}`}}</el-tag>
  </div>
</template>
<script>
export default {
  props: {
    searchTagList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleDelOne(item) {
      this.$emit("handleDelOne", item);
    }
  }
};
</script>

