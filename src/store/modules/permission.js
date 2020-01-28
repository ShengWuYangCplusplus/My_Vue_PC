// import { fetchPermission } from '@/api/permission'
import router, { DynamicRoutes } from '@/_router/index'
import { recursionRouter, setDefaultRoute } from '@/utils/recursion-router'
import dynamicRouter from '@/_router/dynamic-router.js'

export default {
  namespaced: true,
  state: {
    permissionList: null /** 所有路由 */,
    sidebarMenu: [] /** 导航菜单 */,
    currentMenu: '' /** 当前active导航菜单 */,
    control_list: [] /** 完整的权限列表 */,
    avatar: ''/** 头像 */,
    account: ''/** 用户角色 */
  },
  getters: {},
  mutations: {
    SET_AVATAR(state, avatar) {
      state.avatar = avatar
    },
    SET_ACCOUNT(state, account) {
      state.account = account
    },
    SET_PERMISSION(state, routes) {
      state.permissionList = routes
    },
    CLEAR_PERMISSION(state) {
      state.permissionList = null
    },
    SET_MENU(state, menu) {
      state.sidebarMenu = menu
    },
    CLEAR_MENU(state) {
      state.sidebarMenu = []
    },
    SET_CURRENT_MENU(state, currentMenu) {
      state.currentMenu = currentMenu
    },
    SET_CONTROL_LIST(state, list) {
      state.control_list = list
    }
  },
  actions: {
    async FETCH_PERMISSION({ commit, state }) {
      // let permissionList = await fetchPermission()
      let permissionList = {
        avatar: "https://randy168.com/1533262153771.gif",
        name: "admin",
        roles: ["admin"],
        data: [
          "residence", "residence-register", "residence-register-live", "residence-register-consult", "residence-register-appointment", "residence-register-try", "residence-register-base", "residence-register-health", "residence-register-beds", "residence-register-fee", 'residence-stay', 'residence-stay-olders', 'residence-checkout', 'residence-checkout-settle', 'residence-checkout-write', 'residence-checkout-search', 'daily', 'daily-visit', 'daily-visit-out', 'daily-visit-in', 'daily-money', 'daily-money-type', 'daily-money-olders', 'daily-money-adjust', 'daily-money-bill', 'daily-money-consume', 'daily-health', 'daily-health-exam', 'daily-health-body', 'daily-health-look', 'daily-health-doctor', 'daily-medicine', 'daily-medicine-dictionary', 'daily-medicine-desposite', 'daily-medicine-config', 'daily-medicine-history', 'daily-medicine-remain', 'daily-dining', 'daily-dining-food', 'daily-dining-recipe', 'daily-dining-area', 'daily-dining-part', 'daily-dining-record', 'daily-nurse',
          'daily-nurse-fall',
          'daily-nurse-area',
          'daily-nurse-alarm',
          'daily-nurse-device',
          'daily-nurse-mattress',
          'daily-nurse-page',
          'daily-nurse-position',
          'daily-assess',
          'daily-assess-write',
          'daily-assess-ability',
          'daily-assess-apply',
          'daily-assess-search',
          'daily-family',
          'daily-family-audit',
          'daily-family-manage',
          'daily-family-reply',
          'daily-family-birthday',
          'daily-family-activity',
          'daily-config',
          'institution',
          'institution-auth',
          'institution-staff',
          'institution-beds',
          'institution-beds-type',
          'institution-beds-manage',
          'institution-finacial',
          'institution-property',
          'institution-storage',
          'institution-storage-goods',
          'institution-storage-config',
          'institution-storage-account',
          'institution-storage-in',
          'institution-storage-out',
          'institution-storage-search',
          'institution-emergency',
          'institution-emergency-write',
          'institution-emergency-search',
          'institution-info',
          'nurse',
          'nurse-staff',
          'nurse-config',
          'nurse-config-project',
          'nurse-config-level',
          'nurse-config-area',
          'nurse-verify',
          'nurse-verify-project',
          'nurse-verify-list',
          'nurse-verify-inspection',
          'nurse-inspection',
          'nurse-inspection-plan',
          'nurse-inspection-room',
          'nurse-inspection-search',
          'nurse-inspection-stastistics',
          'nurse-work',
          'nurse-work-time',
          'nurse-work-jobsearch',
          'nurse-work-jobcount',
          'nurse-work-nursesearch',
          'nurse-work-nursecount',
          'nurse-work-oldercount',
          'count',
          'count-operate',
          'count-operate-month',
          'count-operate-beds',
          'count-operate-excel',
          'count-operate-inout',
          'count-operate-percent',
          'count-operate-status',
          'count-grant',
          'business',
          'business-apply',
          'business-age',
          'business-operate',
          'system',
          'system-users',
          'system-roles',
        ]
      }
      // commit('SET_AVATAR', permissionList.avatar)
      // commit('SET_ACCOUNT', permissionList.name)
      let routes = recursionRouter(permissionList.data, dynamicRouter)
      setDefaultRoute(routes);
      let MainContainer = DynamicRoutes.find(v => v.path === '')
      let children = MainContainer.children
      commit('SET_CONTROL_LIST', [...children, ...dynamicRouter])
      children.push(...routes)
      commit('SET_MENU', children)
      let initialRoutes = router.options.routes
      router.addRoutes(DynamicRoutes)
      commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
    }
  }
}
