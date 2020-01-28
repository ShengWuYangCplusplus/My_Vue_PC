export default {
  LOGIN_IN(state, token) {
    state.UserToken = token
  },
  LOGIN_OUT(state) {
    state.token = ''
    state.userRole = ''
    sessionStorage.clear()
    state.menuList = []
    state.dynamicRoutes = []
    state.UserToken = ''
  },
  toggleNavCollapse(state) {
    state.isSidebarNavCollapse = !state.isSidebarNavCollapse
  },
  setCrumbList(state, list) {
    state.crumbList = list
  },
  SET_MENU(state, list) {
    state.menuList = list
  },
  setSearchForm(state, obj) {
    state.currentSearchForm = obj
  },
  clearSearchForm(state, obj) {
    state.currentSearchForm = obj
  },
  clearToken({ cancelTokenArr }) {
    cancelTokenArr.forEach(item => {
      item("路由跳转取消请求")
    })
    cancelTokenArr = []
  },
  SET_REGISTER_STEP(state, step) {
    state.RegisterStep = step
  },

}
