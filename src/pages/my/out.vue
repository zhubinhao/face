<template>
  <view class="Out">
    <view class="search">
      <view class='search-box' @click="nativeTo">
        <image class='search-img' src='~@/static/img/search.svg'></image>
        <view>搜索</view>
      </view>
    </view>
    <view class="li" v-for="(item,index) in list" :key="index">
      <view class="img">范</view>
      <view class="main">
        <view class="name">范生</view>
        <view class="temperature">体温：<text>36.1</text></view>
        <view class="time">2020-09-18 14:35:56</view>
      </view>
      <view class="btn">进</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
@Component
export default class Out extends Vue {
  @Provide() list: Array<any> = [1,2,3];
  nativeTo(): void {
    uni.navigateTo({ url: '/pages/my/search' });
  }
  onLoad(optons: any) {
    console.log(optons);
  }
}
</script>

<style lang="scss" scope>
.Out {
  .search {
    background: #fff;
    padding: 20rpx 30rpx;
    .search-box {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 36rpx;
      height: 60rpx;
      background: #f4f6f9;
      border-radius: 32rpx;
      .search-img {
        width: 32rpx;
        height: 32rpx;
      }
      view {
        color: gray;
        font-size: 28rpx;
        line-height: 60rpx;
        padding-left: 10rpx;
      }
    }
  }
  .li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    padding: 20rpx 30rpx;
    border-bottom: 1px solid #f6f6f6;
    .img {
      width: 90rpx;
      height: 90rpx;
      border-radius: 50%;
      margin-right: 20rpx;
      text-align: center;
      line-height: 90rpx;
      color: #fff;
      font-size: 38rpx;
      background: #32cdfd;
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
          color: #32cdfd;
        }
      }
      .time {
        font-size: 24rpx;
        color: gray;
      }
    }
    .btn {
      background: #32cdfd;
      border-radius: 8rpx;
      width: 110rpx;
      height: 60rpx;
      text-align: center;
      line-height: 60rpx;
      color: #ffffff;
      font-size: 30rpx;
    }
  }
}
</style>
