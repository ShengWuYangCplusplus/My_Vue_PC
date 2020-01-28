<template>
  <div class="basestaStyle">
    <div v-for="(item,index) in statisticData" class="staOneDiv">
      <div>
        <span>{{item.name}}</span>
      </div>
      <div>
        <span>{{item.number}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    statisticData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.basestaStyle {
  width: 100%;
  border-left: 1px solid #e4e7ed;
  border-top: 1px solid #e4e7ed;
  border-bottom: 1px solid #e4e7ed;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
  .staOneDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-right: 0.5px solid #e4e7ed;
    flex-flow: column;
    div:nth-child(2) {
      margin-top: 15px;
    }
    span {
      font-weight: bolder;
    }
  }
}
</style>


