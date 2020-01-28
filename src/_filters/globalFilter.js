import Vue from "vue";

Vue.filter("nullFilter", function (value) {
  let nullValue = "--";
  if (
    value === null ||
    value === "null" ||
    value === undefined ||
    value === "" ||
    value === "0001-01-01"
  ) {
    return nullValue;
  } else {
    return value;
  }
});

Vue.filter("genderFilter", function (value) {
  let result;
  switch (value) {
    case "1":
    case true:
      result = "男";
      break;
    case "0":
    case false:
      result = "女";
      break;
  }
  return result;
});
Vue.filter("yesOrNoFilter", function (value) {
  let result;
  switch (value) {
    case true:
      result = "是";
      break;

    case false:
      result = "否";
      break;
    default:
      result = value
  }
  return result;
});

Vue.filter("olderType", function (value) {
  let result = "";
  switch (value) {
    case 0:
      result = "D类老人";
      break;
    case 1:
      result = "A类老人";
      break;
    case 2:
      result = "B类老人";
      break;
    case 3:
      result = "C类老人";
      break;

    default:
      result = "--";
      break;
  }
  return result;
});

Vue.filter("orderType", function (value) {
  let result;
  switch (value) {
    case 0:
      result = "其他";
      break;
    case 1:
      result = "上门服务";
      break;
    case 2:
      result = "爱心午餐";
      break;

    default:
      result = null;
      break;
  }
  return result;
});
// 0-消费
// 1-补助发放
// 2-结算
// 3-充值
// 4-清算，重置未使用的补助余额

Vue.filter("billType", function (value) {
  let result;
  switch (value) {
    case "0":
    case 0:
      result = "消费";
      break;
    case "1":
    case 1:
      result = "补助发放";
      break;
    case "2":
    case 2:
      result = "结算";
      break;

    case "3":
    case 3:
      result = "充值";
      break;

    case "4":
    case 4:
      result = "清算";
      break;

    default:
      result = null;
      break;
  }
  return result;
});
// 0 - 分钟，1 - 小时，2 - 天
Vue.filter("unitOfTime", function (value) {
  let result;
  switch (value) {
    case 0:
      result = "分钟";
      break;
    case 1:
      result = "小时";
      break;
    case 2:
      result = "天";
      break;

    default:
      result = null;
      break;
  }
  return result;
});

Vue.filter("rechargeType", function (value) {
  let result;
  switch (value) {
    case "CCB":
      result = "建行";
      break;
    case "WxPay":
      result = "微信支付";
      break;
    case "AliPay":
      result = "支付宝";
      break;

    default:
      result = null;
      break;
  }
  return result;
});
Vue.filter("approvalStatus", function (value) {
  return value === 0 ? "登记中" : value === 1 ? "通过" : "不通过";
});