import axios from 'axios'
import store from '@/store/index.js'
import baseURL from './baseUrl'
import ElementUI from "element-ui"

axios.defaults.timeout = 30000
axios.defaults.baseURL = baseURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const CancelToken = axios.CancelToken
axios.interceptors.request.use(function (config) {
  config.cancelToken = new CancelToken((cancel) => {
    store.state.axiosPromiseCancel.push(cancel)
  })
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.common['authorization'] = "Bearer" + " " + token
  }
  return config
}, function (error) {
  return Promise.resolve(error)
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (axios.isCancel(error)) {
      return new Promise(() => { })
    }
    console.log("responseerr", error)
    if (!error.response) {
      ElementUI.Message({
        type: "error",
        message: '请求超时!'
      })
    }
    else {
      const status = error.response.status;
      switch (status) {
        case 400:
          ElementUI.Message.error(`请求错误`)
          break
        case 401:
          ElementUI.Message.error("登录过期,请重新登录")
          store.commit("LOGIN_OUT")
          setTimeout(() => {
            window.location.reload()
          }, 100);
          break
        case 403:
          ElementUI.Message({
            type: "error",
            message: '权限不足,无法操作',
            duration: 3000
          })
          break
        case 404:
          ElementUI.Message.error(
            "请求错误,未找到该资源"
          )
          break
        case 500:
          ElementUI.Message.error(`服务端错误:${error.response}`)
          break
        default:
          ElementUI.Message.error(`请求超时:${error.response}`)
      }
      return status >= 200 && status < 300
    }
    return Promise.reject(error)
  }
)
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]


export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params }).then(
      res => {
        resolve(res.data)
      }
    ).catch(
      err => {
        reject(err.data)
      }
    )
  })
}

export function post(url, params, headObj) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, { headers: headObj }).then(
      res => {
        resolve(res.data)
      }
    ).catch(
      err => {
        reject(err.data)
      }
    )
  })
}

export function delone(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { params: params }).then(
      res => {
        resolve(res.data)
      }
    ).catch(
      err => {
        reject(err.data)
      }
    )
  })
}
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(
      res => {
        resolve(res.data)
      }
    ).catch(
      err => {
        reject(err.data)
      }
    )
  })
}

export default axios
