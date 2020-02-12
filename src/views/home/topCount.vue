<template>
  <div class="container">
    <el-card  class="one-div">
         <p>71</p>
      <p class="text-down">长者人数</p>
    </el-card>
    <el-card class="one-div">
         <p>23</p>
      <p class="text-down">员工人数</p>
    </el-card>
    <el-card class="one-div">
         <p>358</p>
      <p class="text-down">总床位数</p>
    </el-card>
    <el-card class="one-div">
         <p>31.01%</p>
      <p class="text-down">入住率</p>
    </el-card>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  .one-div{
      font-weight:bold;
      font-size:20px;
      flex:1;
      margin:10px;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      .text-down{
          margin-top:10px
      }
  }
}
</style>