
const url = require('./config.js');
 /**
   * params:Object
  */
class Http{
  request (params){
    new Promise((resolve, reject)=>{
      wx.request({
        url: url.baseUrl + parmes.url,
        data: params.data || null,
        method: params.method || 'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          resolve(res);
         },
        fail: function (res) {
          reject();
         },
        complete: function (res) { 
         
        },
      })
    })
  }
}

module.export={Http}