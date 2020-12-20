import http from '@/utils/http';
class IndexApi{
  constructor(){}
  // 获取公司信息
  corpGet(corpcode:string){
    return http.post('/Corp_Get', { corpcode });
  }
  // 图片上传
  imagePerson(headerImg:string,corpcode:string){
    return http.uploadFile('/ImagePerson',headerImg,corpcode);
  }
  gather(data:any,that:any){
    http.postLock('/gather', data, that);
  }
  // 获取预约记录
  gatherGet(){
    let wxopenid = uni.getStorageSync("openid")
    return http.post("/gather_Get", {wxopenid});
  }
  // 删除预约记录
  gatherDel(id:string){
    let corpcode =  uni.getStorageSync('corpname');
    return http.post("/gather_Del", {corpcode,id});
  }
}
export default new IndexApi()