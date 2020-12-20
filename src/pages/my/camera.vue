<template>
  <view>
    <view class="Camera" v-if="show">
      <camera device-position="front" flash="off" class="Camera">
        <cover-image class='coverImg' src='../../static/img/face.png'></cover-image>
        <cover-view class='coverImg1' @click="takePhoto"></cover-view>
        <cover-view class='toast'>请确保人脸在虚线以内</cover-view>
        <cover-view class='bg'></cover-view>
      </camera>
    </view>
    <canvas canvas-id="canvas" class="canvas" :style="{width:width+'px',height:width+'px'}"></canvas>
  </view>

</template>

<script lang="ts">
import { Vue, Component, Provide, Prop, Model } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { canvasToTempFilePath } from '@/utils/api';
@Component
export default class Camera extends Vue {
  @Provide() show: Boolean = false;
  @Provide() img: string = '../../static/img/face.png';
  @Provide() width: number = 720;
  @Mutation public setHeaderImg!: Function;
  
  onReady() {
    uni.setStorageSync('camera', true);
    this.show = true;
  }
  takePhoto() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res: any) => {
        const ctx = wx.createCanvasContext('canvas');
        ctx.drawImage(res.tempImagePath, 0, -50, res.width, (res.height * res.width) / this.width);
        ctx.draw(true, () => {
          canvasToTempFilePath('canvas', this.width, this.width).then(file => {
              this.setHeaderImg(file);
              uni.navigateBack({});
            }
          );           
        });
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
.canvas {
  position: absolute;
  left: -1000px;
  visibility: hidden;
}
.bg {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 860rpx;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
}
.coverImg {
  position: fixed;
  left: 0;
  right: 0;
  height: 860rpx;
}
.toast{
  position: fixed;
  left: 0;
  right: 0;
  top: 920rpx;
  text-align: center;
  color: red;
  font-size: 44rpx;
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
