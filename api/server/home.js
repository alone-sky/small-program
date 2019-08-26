const Url = require('./../api.js')
const HTTP = require('../https.js')

class api_home{
  getCityLisg(type) {//guess：定位城市， hot：热门城市， group：所有城市;type为字符串
    return HTTP.request({
      url: Url.home.cityList,
      methods:'GET',
      data:{type:type}
    })
  }
}

const api=new api_home();
module.exports=api