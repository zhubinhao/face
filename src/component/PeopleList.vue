<template>
  <view class="PeopleList">
      <image class="img"></image> 
      <view class="main">
        <view class="name">范生</view>
        <view class="time">性别：男</view>
        <view class="time" v-if="type==1">关系：朋友</view>
        <view class="time">手机：18270846062</view>
        <view class="time" v-if="type==2">时间：2020-10-10 08:08至2020-10-11 08:08</view>
      </view>
      <view class="iconfont icon-bianji"></view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

@Component
export default class PeopleList extends Vue {
  @Prop({default:1}) private type!:number
}
</script>

<style lang="scss" scoped>
.PeopleList{
display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding: 20rpx 30rpx;
    border-bottom: 1px solid #f6f6f6;
    .img {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      margin-right: 20rpx;
      color: #fff;
      background: #448EED;
    }
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .name {
        font-size: 32rpx;
        margin-bottom: 6rpx;
      }
      .temperature {
        font-size: 26rpx;
        color: gray;
        text {
          color: #448EED;
        }
      }
      .time {
        font-size: 24rpx;
        color: gray;
      }
    }
    .icon-bianji {
      color: #448EED;
    }
}

</style>
