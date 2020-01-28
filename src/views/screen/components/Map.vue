<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
import AMap from "AMap";
import $ from "jquery"
export default {
  props: {
    iconsData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      map: "",
      markerList: [],
      markerData: [],
      loop: null
    };
  },
  methods: {
    init() {
      this.map = new AMap.Map("container", {
        viewMode: '3D',
        turboMode: false,
        showIndoorMap: false,
        defaultCursor: 'pointer',
        showBuildingBlock: false,
        zooms: [3, 23],
        showLabel: false,
        zoom: 13,
        pitch: 45,
        rotation: 0,
        center: [106.47791, 29.554171],
        mapStyle: "amap://styles/dark"
      });
      this.map.setFeatures(["building", "road", "point", "bg"]);
    },
    async renderIcons() {
      if (this.$route.path != '/screen') {
        return false
      }
      var vm = this;
      var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -20) });
      await this.$apis.orgManageApi.get({ index: 0, size: 100000 }).then(
        res => {
          var zoomStyleMapping1 = {
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
          }
          if (res.code === 0) {
            function markerClick(e) {
              infoWindow.setContent(e.target.content)
              infoWindow.open(vm.map, e.target.getPosition());
            }
            for (let item of res.data) {
              vm.markerData = res.data.map(item => ({ ...this.mapNullObj(item), lat: item.lat || 29.46137600, lon: item.lon || 106.56860000, }))
              let marker = new AMap.ElasticMarker({
                position: [item.lon || 106.56860000, item.lat || 29.46137600],
                zooms: [3, 20],
                styles: [{
                  icon: {
                    // img: require("@/assets/images/build_green.png"),
                    size: [24, 24], //可见区域的大小
                    ancher: [16, 16],
                    fitZoom: 16, //最合适的级别
                    scaleFactor: 2, //地图放大一级的缩放比例系数
                    maxScale: 1.6, //最大放大比例
                    minScale: 1.0 //最小放大比例
                  }
                }],
                zoomStyleMapping: zoomStyleMapping1
              })
              marker.content =
                `<div class="infoContainer">
                  <div class="oneRow"><span class="text name">${item.name || '-'}</span></div>
                  <div class="oneRow"><span class="text">${item.address || '-'}</span></div>
                  <div class="oneRow"><span class="text" >星级评定得分:<span class="goalText" style="color:#67C23A">${item.stargoal || '-'}</span> <span class="levelText">结果:<span class='levelDetail' style="color:#67C23A">${item.starlevel || '-'}</span></span></span></div>
                  <div class="oneRow"><span class="text" >金叶级评定得分:<span class="goalText" style="color:#E6A23C">${item.leafgoal || "-"} </span><span class="levelText">结果:<span class='levelDetail' style="color:#E6A23C">${item.leaflevel || '-'}</span></span></span></div>
                  <div class="oneRow"></div>
                </div>`;
              marker.on('click', markerClick)
              vm.markerList.push(marker)
            }
            vm.map.add(vm.markerList)
          }
        }
      )
      vm.changeCenter()
    },
    changeCenter() {
      var vm = this;
      // const tempArr = this.markerData.filter(item => {
      //   return item.starlevel === '四星' || item.starlevel === '五星' || item.leaflevel === '四叶' || item.leaflevel === '五叶'
      // })
      const tempArr = this.markerData
      function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var clickHandler = function (e) {
        new AMap.InfoWindow({
          offset: new AMap.Pixel(0, -20),
          content: `<div class="infoContainer">
                  <div class="oneRow"><span class="text name">${e.data.name}</span></div>
                  <div class="oneRow"><span class="text">${e.data.address}</span></div>
                  <div class="oneRow"><span class="text" >星级评定得分:<span class="goalText" style="color:#67C23A">${e.data.stargoal || '-'}</span> <span class="levelText">结果:<span class='levelDetail' style="color:#67C23A">${e.data.starlevel || '-'}</span></span></span></div>
                  <div class="oneRow"><span class="text" >金叶级评定得分:<span class="goalText" style="color:#E6A23C">${e.data.leafgoal || "-"} </span><span class="levelText">结果:<span class='levelDetail' style="color:#E6A23C">${e.data.leaflevel || '-'}</span></span></span></div>
                  <div class="oneRow"></div>
                </div>`,
        }).open(vm.map, e.lnglat)
      };
      if (this.loop) {
        clearInterval(this.loop)
        this.loop = null
      } else {
        this.loop = setInterval(() => {
          if (vm.loop) {
            vm.loop = null
          }
          let idx = random(0, tempArr.length)
          vm.map.on('click', clickHandler);
          vm.map.setCenter([tempArr[idx].lon, tempArr[idx].lat])
          vm.map.emit('click', { lnglat: [tempArr[idx].lon, tempArr[idx].lat], data: tempArr[idx] })
        }, 5000)
      }
    }
  },
  mounted() {
    this.init();
    this.$nextTick(() => {
      this.renderIcons();
    });
  }
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: calc(100vh - 80px);
}
</style>


