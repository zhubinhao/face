import Vue from 'vue'

Vue.filter('state',function(state:string){
  let arr:Array<string> = ['待审核','审核','失败']
  return arr[parseInt(state)]

})