<template>
  <view>
    <view class="Camera">
      <camera device-position="front" flash="off" class="Camera">
        <cover-image class='coverImg' src='../../static/img/face.png'></cover-image>
        <cover-view class='coverImg1' @click="takePhoto"></cover-view>
        <cover-view class='bg'></cover-view>
      </camera>
    </view>
  </view>

</template>

<script lang="ts">
import { Vue, Component, Provide, Prop, Model } from 'vue-property-decorator';
import { Mutation } from 'vuex-class'
@Component
export default class Camera extends Vue {
  @Provide() src: string = '';
  @Provide() img: string = '../../static/img/face.png';
  @Mutation public setHeaderImg!:Function
  onReady() {
    uni.setStorageSync('camera',true)
  }
  takePhoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setHeaderImg(res.tempImagePath)
        uni.navigateBack({})
      },
    });
  }
}
</script>

<style lang="scss" scoped>

.Camera {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.bg{
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 860rpx;
  bottom: 0;
  background: rgba(0,0,0,0.35);
}
.coverImg {
  position: fixed;
  left: 0;
  right: 0;
  height: 860rpx;
}
.coverImg1 {
  position: fixed;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  border: 20rpx solid #b8ada9;
  bottom: 30rpx;
  background: white;
  left: 50%;
  margin-left: -70rpx;
  z-index: 9;
}
</style>
