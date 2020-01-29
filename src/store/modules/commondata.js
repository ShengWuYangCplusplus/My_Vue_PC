import { getDepartmentList, getRoleList } from '@/request/allApi.js'

export default {
  namespaced: true,
  state: {
    roleList: [],
    departmentList: []
  },
  getters: {

  },
  mutations: {
    SET_ROLELIST(state, list) {
      state.roleList = list
    },
    SET_DEPARTMENTLIST(state, list) {
      state.departmentList = list
    },
  },
  actions: {
    async FETCH_ROLE_DEPARTMENT({ commit, state }) {
      let role = await getRoleList({ index: 0, size: 100 })
      let department = await getDepartmentList()
      commit('SET_ROLELIST', role.data.data)
      commit('SET_DEPARTMENTLIST', department.data.data)
    }
  }
}