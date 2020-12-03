<template>
  <view>
    <view class="Camera">
      <camera device-position="front" flash="off" class="Camera">
        <!-- <canvas canvas-id="canvas" style="width: 100%; height: 300px;"></canvas> -->
        <cover-image class='coverImg' src='../../static/img/face.png'></cover-image>
        <cover-view class='coverImg1'></cover-view>
      </camera>
    </view>
  </view>

</template>

<script lang="ts">
import { Vue, Component, Provide, Prop, Model } from 'vue-property-decorator';

@Component
export default class Camera extends Vue {
  @Provide() src: string = '';
  @Provide() img: string = '../../static/img/face.png';
  onReady() {
    const ctx = wx.createCanvasContext('canvas');
    ctx.drawImage(this.img, 0, 0, 250, 300);
    ctx.draw();
    console.log(ctx);
    wx.getSetting({
  success(res) {
    console.log(res.authSetting['scope.camera'])
    if (!res.authSetting['scope.camera']) {
      wx.authorize({
        scope: 'scope.camera',
        success () {
        },
        fail(e){
            console.log(e)
        }
      })
    }
  }
})
  }
  takePhoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.src = res.tempImagePath;
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.Camera {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.coverImg {
  width: 690rpx;
  height: 540rpx;
  margin: 30rpx;
 
}
.coverImg1{
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  border: 20rpx solid #B8ADA9;
  bottom: 30rpx;
  background: white;
  left: 50%;
  margin-left: -70rpx;
}
</style>
