import Vue from "vue";
import App from "./App.vue";
import router from "./_router/index";
import store from "./store/index";
import "element-ui/lib/theme-chalk/index.css";

/**
 * element-ui
 */
import './element'

/**
 * npprogress
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
/**统一定义的全局样式 */
import "./styles/index.scss";
Vue.config.productionTip = false;
/**icon */
import "./assets/icons/iconfont.css";
import has from "./utils/has"
//引入封装的http统一请求
import http from "./config/httpConfig";
Vue.prototype.$http = http;
import { apis } from './request/allApi.js'
Vue.prototype.$apis = apis

//引入全局 表格检索 的表单 中英文对照
import searchNameList from "./utils/search-name-list";
Vue.prototype.$searchNameList = searchNameList;

Vue.prototype.$echarts = echarts

//注册全局组件
import baseTableVtwo from "component/common/base-table-vtwo"
import BaseStatistics from "component/common/BaseStatistics";
import navTopTag from "component/common/nav-top-tag";
import TopTap from "component/common/TopTap";
import Echart from "component/common/echart";

Vue.component("baseTableVtwo", baseTableVtwo);
Vue.component("BaseStatistics", BaseStatistics);
Vue.component("navTopTag", navTopTag);
Vue.component("TopTap", TopTap);
Vue.component("Echart", Echart);
/**引入公用组件 */
import commonComp from './components/index.js'
commonComp.forEach(item => {
  Vue.use(item)
})


//引入全局表单验证
import FormFilter from "../src/_filters/formFilter";
Vue.prototype.$filter = FormFilter;

//引入功能函数
//----  从身份证自动获取出生年月日
import getInfoFromId from "../src/utils/getInfoFromId";
Vue.prototype.$getInfoFromId = getInfoFromId;
//获取和修改检索条件标签tag
import searchTag from "../src/utils/search-tag";
Vue.prototype.$searchTag = searchTag;
// 引入 基础js 全局函数
import baseFunc from "../src/utils/base-func.js";
Vue.prototype.$baseFunc = baseFunc;

//引入图片预览插件
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
import { format } from "util";
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source"
  }
});
import timeApi from '@/utils/time.js'
Vue.prototype.$timeApi = timeApi

import mixins from "./mixins"
mixins.forEach(item => Vue.mixin(item))

Vue.directive('focus', function (el) {
  setTimeout(() => {
    el.querySelector('input').focus()
  }, 200)
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  sessionStorage.removeItem('originData')
  store.state.currentSearchForm = {}
  store.state.axiosPromiseCancel.forEach(e => {
    e && e()
  })
  store.state.axiosPromiseCancel = []
  if (!store.state.UserToken) {
    if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    if (!store.state.permission.permissionList) {
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        next({ path: to.path })
      })
    } else {
      if (to.path !== '/login') {
        next()
      } else {
        next(from.fullPath)
      }
    }
  }
});
router.afterEach((to, from, next) => {
  NProgress.done()
  var routerList = to.matched
  store.commit('setCrumbList', routerList)
  store.commit('permission/SET_CURRENT_MENU', to.meta.menuKey)
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");