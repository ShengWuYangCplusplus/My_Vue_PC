<template>
  <div style="width:100%;height:400px" :id="id" :option="option"></div>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    },
    option: {
      type: Object,
    },
  },
  data() {
    return {
      MyEcharts: ""
    };
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.MyEcharts.setOption(newVal, true);
        }
      },
      deep: true //对象内部属性的监听
    }
  },
  mounted() {
    this.InitCharts();
  },
  methods: {
    InitCharts() {
      this.MyEcharts = this.$echarts.init(document.getElementById(this.id));
      this.MyEcharts.clear();
      this.MyEcharts.setOption(this.option, true);
      let _this = this;
      window.addEventListener("resize", function () {
        _this.MyEcharts.resize();
      });
    },
  }
};
</script>

