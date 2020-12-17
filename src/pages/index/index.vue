<template>
  <view class="content">
    <swiper class="swiper" autoplay indicator-color="rgba(0,0,0,0.15)" indicator-active-color="rgba(0,0,0,0.35)" indicator-dots interval="3000" style="height:168rpx; padding-top: 10rpx;" circular>
      <swiper-item class="scroll_img">
        <image src="https://file.shenlanbao.com/2020/11/20/file/img_banner_invitation.png" class="slide-image" />
      </swiper-item>
    </swiper>

    <view class="jiu_box">
      <block v-for="(item,index) in nineGrid" :key="index">
        <view class='item' @click="nativeTo(item.path)">
          <view class="image"  :style="{background:item.bg}">
            <image :src="item.icon"></image>
          </view>
          <text class='msg'>{{item.title}}</text>
        </view>
      </block>
    </view>

    <view class="title_box">
      <view>
        <image src="~@/static/img/小区.png"></image>
        <text>xx小区</text>
        <text class="phone">(18270846061)</text>
      </view>
      <view class="change"> 切换 <text class="iconfont icon-right"></text></view>
    </view>
    <view class="card">
      <List></List>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import List from '@/component/List.vue';
import { nineGrid } from '@/utils/obj';

@Component({
  components: {
    List,
  },
})
export default class Index extends Vue {
  @Provide() nineGrid: Array<any> = nineGrid;

  nativeTo(url: string): void {
    uni.navigateTo({ url });
  }
  onShareAppMessage() {
    return {
      title: '智安云脸',
      path: '/pages/index/index',
    };
  }
}
</script>

<style lang="scss" scope>
.content {
  .swiper {
    margin: 10rpx 0;
  }
  .scroll_img {
    box-sizing: border-box;
    padding: 0 30rpx;
    position: relative;
    image {
      height: 168rpx;
      width: 100%;
      border-radius: 8rpx;
    }
  }
  .jiu_box {
    background: white;
    display: flex;
    padding: 40rpx 30rpx 30rpx 30rpx;
    margin: 20rpx 30rpx;
    border-radius: 10rpx;
    box-sizing: border-box;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .image {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        background-color: #2ec4a7;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32rpx;
        color: white;
        image {
          width: 60rpx;
          height: 60rpx;
        }
      }
      .msg {
        font-size: 28rpx;
        margin-top: 20rpx;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .title_box {
    padding: 0 30rpx;
    background: #ffffff;
    font-size: 32rpx;
    margin: 20rpx 30rpx;
    border-radius: 10rpx;
    height: 90rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > view {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    image {
      width: 30rpx;
      height: 30rpx;
      margin-right: 10rpx;
    }
    .title {
      font-weight: 600;
    }
    .phone {
      font-size: 24rpx;
      color: #8e8e8e;
    }
    .change {
      color: #8e8e8e;
      font-size: 28rpx;
    }
    .icon-right {
      position: relative;
      top: 4rpx;
    }
  }
  .card {
    padding: 0 30rpx;
  }
}
</style>
