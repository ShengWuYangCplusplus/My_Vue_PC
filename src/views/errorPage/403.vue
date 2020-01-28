<template>
  <div class="notFound">
    <div class="font">权限不足,无法浏览</div>
    <div class="btn">
      <el-button type="success" @click="goBack">返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.notFound {
  height: 100vh;
  background-color: #909399;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .font {
    font-size: 30px;
    color: lightyellow;
    font-weight: bold;
  }
  .btn {
    margin-top: 30px;
  }
}
</style>
