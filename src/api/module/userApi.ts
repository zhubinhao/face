import http from '@/utils/http';
class UserApi {
  public token: string = '{A9B62A7B-CE65-4D80-A1B5-0713CC529F13}'
  constructor() { }
  // 
  getOpenId(code: string) {
    const data = {
      token: this.token,
      code
    }
    return http.post('/wxopenID', data)
  }
  // 获取wxcode
  getCode() {
    return this.promise(uni.login)
  }
  //  获取用户信息
  getUserInfo() {
    return this.promise(uni.getUserInfo)
  }
  public promise(fn: Function) {
    return new Promise((resolve, reject) => fn({
      success: (e: any) => {
        resolve(e)
      },
      fail: (error: any) => {
        reject(error)
      }
    }))
  }
}
export default new UserApi()