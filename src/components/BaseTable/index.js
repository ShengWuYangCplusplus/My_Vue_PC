import BaseTable from './Base-Table.vue'
BaseTable.install = function (Vue) {
  Vue.component(BaseTable.name, BaseTable)
}
export default BaseTable