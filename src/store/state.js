import SystemConfig from '@/config/SystemConfig.js'

export default {
  registRoute: true,
  get UserToken() {
    return localStorage.getItem('token')
  },
  set UserToken(value) {
    localStorage.setItem('token', value)
  },
  systemTitle: SystemConfig.title,
  menuList: [],
  /* 导航菜单是否折叠 */
  isSidebarNavCollapse: false,
  /* 面包屑导航列表 */
  crumbList: [],
  currentSearchForm: {},
  cancleTokenArr: [],
  axiosPromiseCancel: [],
  RegisterStep: 0,
}