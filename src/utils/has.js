import Vue from 'vue'

const has = Vue.directive('has', {
  bind: function (el, binding, vnode) {
    let btnPermissionArr = vnode.context.$route
    console.log('666', btnPermissionArr)
    if (!Vue.prototype.$_has(btnPermissionArr)) {
      console.log(el)
      el.parentNode.removeChild(el)
    }
  }
})

Vue.prototype.$_has = function (value) {
  let isExist = false
  let btnPermissionStr = sessionStorage.getItem("btnPermissions")
  if (btnPermissionStr == undefined || btnPermissionStr == null) {
    return false
  }
  if (value.indexOf(btnPermissionStr) > -1) {
    isExist = true
  }
  return isExist
}
export { has }