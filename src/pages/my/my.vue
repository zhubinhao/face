<template>
  <view class="My">
    <view class="header mb20">
      <user-infor></user-infor>
      <view class="userAvatarUrl">
        <open-data type="userAvatarUrl" class="img"></open-data>
      </view>
      <view class="infor">
        <open-data type="userNickName" class="nick"></open-data>
        <text class="house">xxx</text>
        <text class="address">xxxxxxxx</text>
      </view>
    </view>

    <view class="li mb20" @click="nativeTo('/pages/my/family')">
      <image />
      <view>家庭成员</view>
      <text class="iconfont icon-right"></text>
    </view>

    <view class="mb20">
      <view class="li bd" @click="nativeTo('/pages/my/access')">
        <image />
        <view>访客</view>
        <text class="iconfont icon-right"></text>
      </view>
      <view class="li bd" @click="nativeTo('/pages/my/out')">
        <image />
        <view>进出记录</view>
        <text class="iconfont icon-right"></text>
      </view>
      <view class="li bd" @click="nativeTo('')">
        <image />
        <view>小区管理</view>
        <text class="iconfont icon-right"></text>
      </view>
      <view class="li" @click="nativeTo('')">
        <image />
        <view>关联设备</view>
        <text class="iconfont icon-right"></text>
      </view>
    </view>

    <view class="li" @click="nativeTo('')">
      <image />
      <view>问题反馈</view>
      <text class="iconfont icon-right"></text>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { toast } from '@/utils/api';
@Component
export default class My extends Vue {
  created() {}
  nativeTo(url: string): void {
    if (url) {
      wx.navigateTo({ url });
      return;
    }
    toast('该功能暂未开发');
  }
}
</script>

<style lang="scss" scope>
.My {
  view {
    background: #fff;
  }
  .header {
    position: relative;
    padding: 50rpx 30rpx 70rpx 30rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .userAvatarUrl {
      width: 120rpx;
      height: 120rpx;
      border-radius: 10rpx;
      overflow: hidden;
      margin-right: 20rpx;
      .img {
        width: 120rpx;
        height: 120rpx;
      }
    }
    .infor {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      .nick {
        font-size: 34rpx;
        font-weight: bold;
      }
      .house {
        font-size: 30rpx;
        color: gray;
      }
      .address {
        font-size: 26rpx;
        color: gray;
      }
    }
  }
  .li {
    padding: 0 30rpx;
    height: 90rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    image {
      width: 30rpx;
      height: 30rpx;
      margin-right: 20rpx;
    }
    view {
      flex: 1;
    }
    .icon-right {
      margin-left: 20rpx;
      font-size: 40rpx;
      color: gray;
    }
  }
  .bd {
    padding: 0;
    margin: 0 30rpx;
    border-bottom: 1px solid #f6f6f6;
  }
  .mb20 {
    margin-bottom: 20rpx;
  }
}
</style>
