
import { getCommunity, getApprove, getOlderStasticApi, getOlderAccountStasticApi } from '@/request/allApi.js'
export default class xiaLaList {
  static centerRoles() {
    return [32, 64, 128]
  }
  static hasAuthRole(userRole, roleArr) {
    for (let i of roleArr) {
      if (i && (userRole & i)) {
        return i
      }
    }
  }
  static getRelationSel() {
    //老人基础信息
    const relationList = [
      {
        value: '选项1',
        label: '子女'
      }, {
        value: '选项2',
        label: '父母'
      }, {
        value: '选项3',
        label: '同事'
      }, {
        value: '选项4',
        label: '亲戚'
      }, {
        value: '选项5',
        label: '朋友'
      }
    ]
    return relationList
  }
  static getLiveSel() {
    const liveConditionList = [
      {
        value: "选项1",
        label: "独居"
      },
      {
        value: "选项2",
        label: "和子女居住"
      }
    ]
    return liveConditionList
  }
  static getGenderSel() {
    const genderList = [
      {
        value: "1",
        label: "男"
      },
      {
        value: "0",
        label: "女"
      }
    ]
    return genderList
  }
  static getYenoSel() {
    const yesNoList = [
      {
        value: "1",
        label: "是"
      },
      {
        value: "0",
        label: "否"
      }
    ]
    return yesNoList
  }
  static getOlderTagSel() {
    const olderTagList = [
      { value: "adfagid", label: "健康" },
      { value: "zzzgid", label: "独居" },
      { value: "xxxgid", label: "身体不适" },
      { value: "yyygid", label: "精神不适" }
    ]
    return olderTagList
  }
  static getApproveSel() {
    const approveList = [
      { value: "1", label: "通过" },
      { value: "2", label: "不通过" }
    ]
    return approveList
  }
  static getRegistReasonSel() {
    const reason = [
      {
        value: "原因一", label: "原因一"
      },
      {
        value: "原因二", label: "原因二"
      },
      {
        value: "原因三", label: "原因三"
      },
      {
        value: "原因四", label: "原因四"
      }
    ]
    return reason
  }
  static getOlderType() {
    const type = [
      {
        value: "1", label: "A类老人", disabled: false
      },
      {
        value: "2", label: "B类老人", disabled: false
      },
      {
        value: "3", label: "C类老人", disabled: false
      }
    ]
    return type
  }
  static getAddressList() {
    const address = [
      { value: "" }
    ]
  }
  static getNation() {
    const nation = [
      { value: "汉族", label: "汉族" },
      { value: "壮族", label: "壮族" },
      { value: "满族", label: "满族" },
      { value: "回族", label: "回族" },
      { value: "苗族", label: "苗族" },
      { value: "维吾尔族", label: "维吾尔族" },
      { value: "土家族", label: "土家族" },
      { value: "彝族", label: "彝族" },
      { value: "蒙古族", label: "蒙古族" },
      { value: "藏族", label: "藏族" },
      { value: "布依族", label: "布依族" },
      { value: "侗族", label: "侗族" },
      { value: "瑶族", label: "瑶族" },
      { value: "朝鲜族", label: "朝鲜族" },
      { value: "白族", label: "白族" },
      { value: "哈尼族", label: "哈尼族" },
      { value: "哈萨克族", label: "哈萨克族" },
      { value: "黎族", label: "黎族" },
      { value: "傣族", label: "傣族" },
      { value: "畲族", label: "畲族" },
      { value: "傈僳族", label: "傈僳族" },
      { value: "仡佬族", label: "仡佬族" },
      { value: "东乡族", label: "东乡族" },
      { value: "高山族", label: "高山族" },
      { value: "拉祜族", label: "拉祜族" },
      { value: "水族", label: "水族" },
      { value: "佤族", label: "佤族" },
      { value: "纳西族", label: "纳西族" },
      { value: "羌族", label: "羌族" },
      { value: "土族", label: "土族" },
      { value: "仫佬族", label: "仫佬族" },
      { value: "锡伯族", label: "锡伯族" },
      { value: "柯尔克孜族", label: "柯尔克孜族" },
      { value: "达斡尔族", label: "达斡尔族" },
      { value: "景颇族", label: "景颇族" },
      { value: "毛南族", label: "毛南族" },
      { value: "撒拉族", label: "撒拉族" },
      { value: "布朗族", label: "布朗族" },
      { value: "塔吉克族", label: "塔吉克族" },
      { value: "阿昌族", label: "阿昌族" },
      { value: "普米族", label: "普米族" },
      { value: "鄂温克族", label: "鄂温克族" },
      { value: "怒族", label: "怒族" },
      { value: "京族", label: "京族" },
      { value: "基诺族", label: "基诺族" },
      { value: "德昂族", label: "德昂族" },
      { value: "保安族", label: "保安族" },
      { value: "俄罗斯族", label: "俄罗斯族" },
      { value: "裕固族", label: "裕固族" },
      { value: "乌孜别克族", label: "乌孜别克族" },
      { value: "门巴族", label: "门巴族" },
      { value: "鄂伦春族", label: "鄂伦春族" },
      { value: "独龙族", label: "独龙族" },
      { value: "塔塔尔族", label: "塔塔尔族" },
      { value: "赫哲族", label: "赫哲族" },
      { value: "珞巴族", label: "珞巴族" }
    ]
    return nation
  }
  static getProviderType() {
    const list = [
      { value: 0, label: "其他" },
      { value: 1, label: "家政服务商" },
      { value: 2, label: "餐厅" },
      { value: 3, label: "日间照料中心" },
      { value: 4, label: "社区" },
      { value: 5, label: "养老服务机构" },
    ]
    return list
  }
  static getCommunityList() {
    let end = getCommunity().then(
      res => {
        return res.data
      }
    )
    return end
  }
  static getApproveStatistic(obj) {
    const reqObj = {
      type: obj.type
    }
    return getApprove(reqObj).then(
      res => {
        if (res.code === 0) {
          return res.data
        }
        else {
          return Promise.reject(`获取登记统计数据失败:${res.des}`)
        }
      }
    )
  }
  static getOlderStatistic(obj) {
    let reqObj = { ...obj }
    return getOlderStasticApi(reqObj).then(
      res => {
        if (res.code === 0) {
          return res.data
        }
        else {
          return Promise.reject(`获取老人统计数据失败:${res.des}`)
        }
      }
    )
  }
  static getOlderAccountStastic(obj) {
    return getOlderAccountStasticApi(obj).then(
      res => {
        if (res.code === 0) {
          return res.data
        } else {
          return Promise.reject(`获取老人账户数据失败:${res.data}`)
        }
      }
    )
  }
}


