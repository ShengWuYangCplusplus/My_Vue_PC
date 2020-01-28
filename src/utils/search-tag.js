export default class searchTag {
  /**
   * @param  
   * @param 
   * 
   */
  static getTagList(list, searchObj) {
    return (Object.entries(searchObj)).filter((item, index) => {
      if (item[1] || item[1] === 0) {
        for (let i = 0; i < list.length; i++) {
          if (item[0] == list[i].engName) {
            if (item[0] == 'status') {
              item[1] = item[1] == true ? "已注销" : "正常"
            }
            if (item[0] === 'onlyUpdate') {
              item[1] = item[1] === true ? '可升级' : '不可升级'
            }
            if (item[0] == 'type') {
              item[1] = item[1] === 1 ? "A类老人" : item[1] === 2 ? "B类老人" : item[1] === 3 ? "C类老人" : item[1] === 0 ? "D类老人" : ""
            }
            item.push(list[i].cnName)
          }
        }
        return true
      }
    })
  }
  static getMoneyTag(list, searchObj) {
    return (Object.entries(searchObj)).filter((item, index) => {
      if (item[1] !== null && item[1] !== undefined && item[1] !== "") {
        for (let i = 0; i < list.length; i++) {
          if (item[0] == list[i].engName) {
            if (item[0] == 'type') {
              item[1] = item[1] === 1 ? "补助发放" : item[1] === 2 ? "结算记录" : item[1] === 3 ? "充值记录" : item[1] === 0 ? "消费记录" : item[1] === 4 ? "清算记录" : item[1] === 5 ? "退款记录" : ""
            }
            item.push(list[i].cnName)
          }

        }
        return true
      }
    })
  }
  static getWatchTag(list, searchObj) {
    return (Object.entries(searchObj)).filter((item, index) => {
      if (item[1] !== null && item[1] !== undefined && item[1] !== "") {
        for (let i = 0; i < list.length; i++) {
          if (item[0] == list[i].engName) {
            if (item[0] == 'isBinded') {
              item[1] = item[1].toString() === 'true' ? '已绑定' : '未绑定'
            }
            item.push(list[i].cnName)
          }
        }
        return true
      }
    })
  }
  static deleteOneSearch(item, form) {
    for (var i in form) {
      if (item === i) {
        form[i] = "" && delete form[i]
        // delete form[i]
      }
    }
    return form
  }
}