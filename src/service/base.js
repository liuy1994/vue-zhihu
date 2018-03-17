import config from 'config'

export default {
  getContent (url) {
    return new Promise((resolve, reject) => {
      let ajax = new XMLHttpRequest()
      ajax.onreadystatechange = function (res) {
        if (ajax.readyState === 4) {
          if (ajax.status === 200) {
            let data = JSON.parse(ajax.responseText)
            resolve(data)
          } else {
            let data = {
              error_message: '出错了，请稍后重试'
            }
            reject(data)
          }
        }
      }
      ajax.open('GET', url)
      ajax.send()
    })
  },
  baseApi (method) {
    let url = config.api.service + method
    return this.getContent(url)
  }
}
