<template>
  <view class="List">
    <view v-for="(item,index) in list" :key="index" class="list">
      <view class="name">姓名：{{item.gat_name}}</view>
      <view><text>性别：</text>{{item.gat_sex==1?"男":"女"}}</view>
      <view><text>手机号：</text>{{item.gat_mobile}}</view>
      <view><text>身份证号：</text>{{item.gat_cardid}}</view>
      <view><text>部门：</text>{{item.gat_dept}}</view>
      <view><text>职位：</text>{{item.gat_job}}</view>
    </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { Iobj } from '@/Interfaces/Icommon';
import http from '@/utils/http';

@Component
export default class List extends Vue {
  @Provide() list: Array<any> = [];
  onLoad() {
    this.getGather();
  }
  async getGather() {
    const data: any = await http.post('/gather_Get', {
      wxopenid: uni.getStorageSync('openid'),
    });
    this.list = data.data;
    console.log(data);
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
    color: gray;

    .name {
      margin-bottom: 10rpx;
    }
    text{
      color: black;
    }
  }
}
</style>
