import { isString } from "util";

function getAge(birthday) {
  const nowDate = new Date()
  let age = nowDate.getFullYear() - birthday.getFullYear()
  const monthDiff = nowDate.getMonth() - birthday.getMonth()
  const dayDiff = nowDate.getDate() - birthday.getDate()
  if (monthDiff === 0 && dayDiff < 0) {
    age -= 1
  } else if (monthDiff < 0) {
    age -= 1
  }
  return age;
}
export default class getInfoFromId {
  //计算年龄
  static getMessageByIdCard(idCard) {
    let reg = /^((\d{15})|(\d{17}(\d|X|x)))$/;
    if (!isString(idCard) || !reg.test(idCard)) {
      return null
    }
    let idArr = idCard.split('')
    let ayear, bmonth, cday;
    let birthday = new Date()
    if (idArr.length === 15) {
      ayear = idArr.slice(6, 8).join('')
      bmonth = idArr.slice(8, 10).join('')
      cday = idArr.slice(10, 12).join('')
      birthday.setFullYear(parseInt('19' + idArr.slice(6, 8).join('')));
      birthday.setMonth(parseInt(idArr.slice(8, 10).join('')) - 1);
      birthday.setDate(parseInt(idArr.slice(10, 12).join('')));
    } else if (idArr.length === 18) {
      ayear = idArr.slice(6, 10).join('')
      bmonth = idArr.slice(10, 12).join('')
      cday = idArr.slice(12, 14).join('')
      birthday.setFullYear(parseInt(idArr.slice(6, 10).join('')));
      birthday.setMonth(parseInt(idArr.slice(10, 12).join('')) - 1);
      birthday.setDate(parseInt(idArr.slice(12, 14).join('')));
    }
    const age = getAge(birthday)
    //计算性别
    let sexCode;
    const birthStr = `${ayear}-${bmonth}-${cday}`
    if (idArr.length === 15) {
      sexCode = parseInt(idArr[14]) % 2;
    } else if (idArr.length === 18) {
      sexCode = parseInt(idArr[16]) % 2
    }
    const sex = sexCode === 0 ? '女' : '男'
    return {
      birthday,
      birthStr,
      age,
      sex,
      sexCode: sexCode === 0 ? "false" : "true"
    }
  }
}
