<template>
  <view class="content">

    <swiper
    class="swiper"
      autoplay
      indicator-color="rgba(0,0,0,0.15)"
      indicator-active-color="rgba(0,0,0,0.35)"
      indicator-dots
      interval="3000"
      style="height:168rpx; padding-top: 10rpx;"
      circular
    >
      <swiper-item class="scroll_img">
        <image
          src="https://file.shenlanbao.com/2020/11/20/file/img_banner_invitation.png"
          class="slide-image"
        />
      </swiper-item>
    </swiper>
    <view class="jiu_box">
       <view  class='item'>
          <view class="image bg1">
            <image src="~@/static/img/访客管理.png"></image>
          </view>
          <text class='msg'>访客通行</text>
        </view>
        <view class='item' >
          <view class="image bg2">
          <image src="~@/static/img/成员.png"></image>
          </view>

          <text class='msg'>家庭成员</text>
        </view>
        <view class='item' >
          <view class="image bg3">
          <image src="~@/static/img/认证.png"></image>
          </view>
          <text class='msg'>绑定认证</text>
        </view>
        <!-- <view class='item' >
          <view class="image bg4">
          ...
          </view>
          <text class='msg'>敬请期待</text>
        </view> -->
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
import { State } from "vuex-class";
import { Vue, Component, Provide } from "vue-property-decorator";
import List from "@/component/List.vue";

@Component({
  components: {
    List
  }
})
export default class Index extends Vue {
  @Provide() adList: Array<any> = [];
  @State barHeight!: number;
  nativeTo(url:string):void{
    uni.navigateTo({url})
  }
  onShareAppMessage() {
    return {
      title: "智安云脸",
      path: "/pages/index/index"
    };
  }
}
</script>

<style lang="scss" scope>
.content {
  .swiper{
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
        image{
          width: 60rpx;
          height: 60rpx;
        }
      }
      .bg1{
        background:  #5DC8F6;
      }
      .bg2{
        background:  #62E3BA;
      }
      .bg3{
        background:  #969CFD;
      }
      .bg4{
        background:  #FBAC8C;
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
      >view{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      image{
        width: 30rpx;
        height: 30rpx;
        margin-right: 10rpx
      }
      .title{
        font-weight: 600;
      }
      .phone{
        font-size: 24rpx;
        color: #8e8e8e;
      }
      .change{
        color: #8e8e8e;
        font-size: 28rpx;

      }
      .icon-right{
        position: relative;
        top: 4rpx;
      }
    }
  .card {
    padding: 0 30rpx;
  }
  
}
</style>
