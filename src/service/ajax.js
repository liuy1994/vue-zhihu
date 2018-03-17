import baseService from './base.js'

// export default class AJAXService extends baseService {
//   /**
//    * return datalist
//    * param url api
//    * @autor liuyong
//    * remark 获取知乎日报某一天的数据
//    */
//   static getContent (url) {
//     return super.baseApi(url)
//   }
// }
// 报错 Super expression must either be null or a function, not object
// 待查资料

export default class AJAXService {
  /**
   * return datalist
   * param url api
   * @autor liuyong
   * remark 获取知乎日报某一天的数据
   */
  static getContent (url) {
    return baseService.baseApi(url)
  }
}
