<template>
  <view class="List">
    <view v-for="(item,index) in list" :key="index" class="list">
      <image :src="item.gat_image"></image>
      <view class="flex1">
        <view class="name">姓名：{{item.gat_name}}({{item.gat_state|state}})</view>
        <view class="msg">
          性别：{{item.gat_sex==1?"男":"女"}}
        </view>
        <view class="msg">
          手机号： {{item.gat_mobile}}
        </view>
        <view class="msg">
          身份证号： {{item.gat_cardid}}
        </view>
        <view class="msg">
          部门： {{item.gat_dept}}
        </view>
        <view class="msg">
          职位：{{item.gat_job}}
        </view>
      </view>
      <view class="delete" @click="dele(item.gat_id)">
           删除
      </view>
    </view>
    <view v-if="list.length==0" class="wu">暂无登记记录</view>
    <z-alert msg="确认删除该记录" ref="alert" @confirm="submit"></z-alert>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { indexApi } from '@/api/api'
import { toast } from '@/utils/api'
@Component
export default class List extends Vue {
  @Provide() list: Array<any> = [];
  @Provide() id: string = '';

  onLoad() {
    return this.getGather();
  }
  async getGather() {
    this.list =await indexApi.gatherGet().then((res:any)=>res.data)
    console.log(this.list);
  }
  dele(id:string){
    this.id = id;
    (this.$refs as any).alert.open()
  }
  async submit(){
    await indexApi.gatherDel(this.id)
    toast("删除成功")
    return this.getGather();

  }
}
</script>

<style lang="scss" scope>
page {
  background: #fff;
}
.List {
  .list {
    border-bottom: 1px solid $border-color;
    margin: 0 30rpx;
    padding: 20rpx 0;
    font-size: 30rpx;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    image {
      width: 160rpx;
      height: 160rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
    }
    .name{ 
      font-size: 30rpx
    }
    .msg{
      font-size: 24rpx
    }
    .flex1{
      flex: 1;
    }
    .delete{
      color: red
    }
    
  }
  .wu {
    color: gray;
    text-align: center;
    margin: 30rpx;
    font-size: 30rpx;
  }
}
</style>
