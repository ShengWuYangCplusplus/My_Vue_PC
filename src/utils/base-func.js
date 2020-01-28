import ElementUI from 'element-ui'
import imageConversion from 'image-conversion'

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getCompressWidthHeight(width, height, max_value) {
  let endWidth, endHeight;
  if (width >= height) {
    endWidth = width > max_value ? max_value : width
    endHeight = width > max_value ? max_value * (height / width) : height
  } else if (width < height) {
    endHeight = height > max_value ? max_value : height
    endWidth = height > max_value ? max_value * (width / height) : width
  }
  return { endWidth, endHeight }
}
export default class baseFunc {
  //截取指定字符串的前面和后面内容
  static charSub(str) {
    var i = str.indexOf('-')
    var front = str.substring(0, i)
    var after = str.substring(i + 1, str.length)
    return {
      front,
      after
    }
  }
  static isEmptyObj(obj) {
    if (Reflect.ownKeys(JSON.parse(JSON.stringify(obj))).length === 0 || this.paramsValidate(JSON.parse(JSON.stringify(obj)))) {
      return true
    }
  }
  static paramsValidate(obj) {
    let flag = true
    for (var i in obj) {
      if (obj[i] === "" || obj[i] === null || obj[i] === undefined) {
        continue
      } else {
        flag = false
        break
      }
    }
    return flag
  }
  static isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]"
  }
  static beforeImgUpload(file) {
    let isImage;
    let bigLimit;
    if (
      file.type == "image/jpeg" ||
      file.type == "image/jpg" ||
      file.type == "image/png"
    ) {
      isImage = true;
    } else {
      isImage = false;
      ElementUI.Message({
        type: "error",
        message: "请上传正确的图片格式"
      });
    }
    if (file.size / 1024 / 1024 < 10) {
      bigLimit = true;
    } else {
      bigLimit = false;
      ElementUI.Message({
        type: "error",
        message: "请上传10M大小内的图片"
      });
    }
    // return isImage && bigLimit;
    if (isImage && bigLimit) {
      return new Promise((resolve, reject) => {
        let _URL = window.URL || window.webkitURL
        let img = new Image()
        img.src = _URL.createObjectURL(file)
        img.onload = function () {
          let result = getCompressWidthHeight(img.width, img.height, 2000)
          imageConversion.compressAccurately(file, { size: 400, width: result.endWidth, height: result.endHeight }).then(res => {
            resolve(res)
          })
        }
      })
    } else {
      return false
    }
  }
  static formatTime(date) {
    var arr = ['日', '一', '二', '三', '四', '五', '六'];
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return { time: [hour, minute, second].map(formatNumber).join(':'), date: [month, day].map(formatNumber).join('-'), week: arr[date.getDay()] }
  }
  static formatDate(date) {
    [year, month, day].map(formatNumber).join('-') + ' '
  }
  static dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  static getStasticCommon(res, arr) {
    for (let i = 0; i < arr.length; i++) {
      for (var j in res) {
        if (arr[i].value === j) {
          arr[i].number = res[j];
        }
      }
    }
    return arr
  }
  static buildTree(list) {
    let temp = {};
    let tree = [];
    for (let i in list) {
      temp[list[i].Gid] = list[i];
    }
    for (let i in temp) {
      if (temp[i].ParentId) {
        if (!temp[temp[i].ParentId].children) {
          temp[temp[i].ParentId].children = new Array();
        }
        temp[temp[i].ParentId].children.push(temp[i]);
      } else {
        tree.push(temp[i]);
      }
    }
    return tree;
  }
  static delteTreeNull(data) {
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].districts === null || data[i].districts === 'null' || data[i].districts.length <= 0) {
          delete data[i].districts
        } else {
          this.delteTreeNull(data[i].districts)
        }
      }
    }
  }
  static deleteNullOrZero(data) {
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].districts === null || data[i].districts === undefined || data[i].districts === 'null' || data[i].districts.length <= 0) {
          delete data[i].districts
        } else {
          this.deleteNullOrZero(data[i].districts)
        }
      }
    }
    return data
  }
  static appendTest(exist, aim, appendArr) {
    for (let i = 0; i < exist.length; i++) {
      if (exist[i].adCode === aim) {
        exist[i].districts = [...appendArr]
      } else if (exist[i].districts && exist[i].districts.length > 0) {
        this.appendTest(exist[i].districts, aim, appendArr)
      }
    }
  }
  static exportExcel(url) {
    window.open(url)
  }
  static getExportSearchUrl(url, obj) {
    for (var i in obj) {
      if (i === "timeRange" && obj[i] && obj[i].length > 0) {
        url += `&starttime=${obj[i][0]}&endtime=${obj[i][1]}`
      }
      else if (obj[i]) {
        url += `&${i}=${obj[i]}`
      }
    }
    return url
  }
  //echarts统计
  static getEchartStastic(res, arr) {
    for (let i = 0; i < arr.length; i++) {
      for (var j in res) {
        if (arr[i].resStr === j) {
          arr[i].value = res[j];
        }
      }
    }
    return arr
  }
  //老人类型百分比统计
  static getOlderTypePercent(res, arr) {
    for (let item of arr) {
      for (var j in res) {
        if (item.resStr === j) {
          item.num = res[j]
          item.percent = (parseFloat(res[j] / res['allTheOld']) * 100).toFixed(2)
        }
      }
    }
    return arr
  }
  //老人年龄图表和统计表格统计
  static getOlderAgeChartSta(res, arr) {
    for (let item of arr) {
      for (var j in res) {
        if (item.resStr === j) {
          item.value = res[j]
          item.percent = (parseFloat(res[j] / res['theOldCount']) * 100).toFixed(2)
        }
      }
    }
    return arr
  }
  //老人大屏 社区图表
  static getOlderCommunitySta(res) {
    const xData = new Array()
    const yData = new Array()
    for (let i of res) {
      xData.push(i.communityName)
      yData.push(i.communityTheOldCount)
    }
    return { xData: xData, yData: yData }
  }
  static debounce(fn, wait) {
    var timeout = null;
    return function () {
      if (timeout !== null) clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn.apply(null)
        timeout = null
      }, wait);
    }
  }
  /**
   * 遍历树  得到相等的value对应的path
   */
  static getFirstRoutePath(item, jsonData) {
    let json = {}
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].value === item) {
        json = { ...jsonData[i] }
        return json
      }
      else {
        if (jsonData[i].children && jsonData[i].children.length > 0) {
          return this.getFirstRoutePath(item, jsonData[i].children);
        }
      }
    }
  }

}