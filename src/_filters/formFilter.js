import { setTimeout } from "core-js";

export default class FormFilter {
  static isPhone(rule, value, callback) {
    if (!value) {
      callback(new Error("手机号不能为空"))
    }
    else if (!/^1[123456789]\d{9}$/.test(value)) {
      callback(new Error("请输入正确的手机号"))
    } else {
      callback()
    }
  }
  static isNumber(rule, value, callback) {
    if (value && isNaN(value)) {
      callback(new Error("请输入数字"))
    }
    else {
      callback()
    }
  }
  //不为空的数字  可以有中间 -
  static notNullNumber(rule, value, callback) {
    if (!value) {
      callback(new Error('不能为空'))
    } else if (isNaN(value)) {
      if (value.indexOf('-') !== -1) {
        callback()
      } else {
        callback(new Error('输入正确的联系方式'))
      }
    } else {
      callback()
    }
  }
  //三位数的数字
  static isThreeNumber(rule, value, callback) {
    if (value && isNaN(value)) {
      callback(new Error("请输入数字"))
    }
    else if (value.length > 3) {
      callback(new Error("请输入正确范围的数字"))
    }
    else {
      callback()
    }
  }
  static isIDCard(rule, value, callback) {
    if (!value) {
      callback(new Error("身份证号不能为空"))
    }
    else if (! /^((\d{15})|(\d{17}(\d|X|x)))$/.test(value)) {
      callback(new Error("请输入正确的身份证号"))
    }
    else {
      callback()
    }
  }
  static bankAccountRule(rule, value, callback) {
    if (!value) {
      callback(new Error("银行账号不能为空"))
    }
    else if (isNaN(value)) {
      callback("请输入数字")
    }
    else {
      callback()
    }
  }
  static isTel(rule, value, callback) {
    if (!value) {
      callback(new Error("座机号不能为空"))
    }
    else if (! /0\d{2,3}-\d{7,8}/.test(value)) {
      callback(new Error("请输入正确的座机号"))
    }
    else {
      callback()
    }
  }
  static notRequiredTel(rule, value, callback) {
    if (!value) {
      callback()
    }
    else if (! /0\d{2,3}-\d{7,8}/.test(value)) {
      callback(new Error("请输入正确的座机号码"))
    }
    else {
      callback()
    }
  }
  static notRerquiredPhone(rule, value, callback) {
    if (!value) {
      callback()
    }
    else if (!/^1[123456789]\d{9}$/.test(value)) {
      callback(new Error("请输入正确的手机号"))
    } else {
      callback()
    }
  }
  /**
   * 健康部分表单验证
   */
  //大于零小于200得整数 心率
  static pulseValid(rule, value, callback) {
    if (!value) {
      callback('不能为空')
    }
    else if (isNaN(value) || value < 0 || value > 200) {
      callback("输入1-200的整数")
    } else {
      callback()
    }
  }
  //大于等于零的整数  步数
  static stepValid(rule, value, callback) {
    if (!value) {
      callback('不能为空')
    }
    else if (isNaN(value) || value < 0) {
      callback('大于等于零的整数')
    }
    else {
      callback()
    }
  }
  //大于零小于两百的两位小数   舒张压 收缩压
  static bloodPressValid(rule, value, callback) {
    if (!value) {
      callback('不能为空')
    }
    else if (isNaN(value) || value < 0 || value >= 201) {
      callback('0-200的小数')
    } else {
      let reg = /^\d+(\.\d{0,2})?$/
      if (reg.test(value)) {
        callback()
      } else {
        callback('最多两位小数')
      }
    }
  }
  //血氧饱和度
  static OxygenValid(rule, value, callback) {
    if (!value) {
      callback('不能为空')
    } else if (isNaN(value) || value < 0 || value > 100) {
      callback('输入0-100的整数')
    } else {
      callback()
    }
  }
  //睡眠时长  1-24小时
  static sleepValid(rule, value, callback) {
    if (!value) {
      callback('不能为空')
    } else if (isNaN(value) || value < 0 || value > 24) {
      callback('输入0-24的数字')
    } else {
      let reg = /^\d+(\.\d{0,1})?$/
      if (reg.test(value)) {
        callback()
      } else {
        callback('最多一位小数')
      }
    }
  }
  static heightFilter(rule, value, callback) {
    if (!value) {
      callback()
    }
    else if (isNaN(value) || value <= 0) {
      callback('大于零的整数')
    }
    else {
      callback()
    }
  }
  static weightFilter(rule, value, callback) {
    if (!value) {
      callback()
    }
    else if (isNaN(value) || value <= 0) {
      callback('大于零的整数')
    } else {
      callback()
    }
  }
}