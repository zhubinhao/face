<template>
  <view class="ALert" v-if="show">
    <view class="main">
      <view class="title">{{title}}</view>
      <view class="content">{{msg}}</view>
      <view class="footer">
        <button @click="cancel">取消</button>
        <button @click="confirm" :openType="openType" class="confirm">确认</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';
@Component
export default class ALert extends Vue {
  @Prop({ default: '温馨提示' }) public title!: string;
  @Prop({ default: '温馨提示' }) public msg!: string;
  @Prop() public openType!: string;
  @Provide() show: boolean = false;

  open(): void {
    this.show = true;
  }
  cancel(): void {
    this.show = false;
  }
  confirm(): void {
    this.$emit('confirm');
    this.show = false;
  }
}
</script>

<style lang="scss" scoped>
.ALert {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 630rpx;
    border-radius: 20rpx;
    overflow: hidden;
    background: #ffffff;
    .title {
      height: 90rpx;
      text-align: center;
      line-height: 90rpx;
      font-size: 32rpx;
    }
    .content {
      padding: 30rpx 30rpx 60rpx 30rpx;
      text-align: center;
      font-size: 30rpx;
      color: gray;
    }
    .footer {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-top: 1px solid #f6f6f6;
      button {
        flex: 1;
        background: #ffffff;
        font-size: 30rpx;
        &::after {
          border-radius: 0px;
          border: none;
        }
      }
      .confirm {
        color: #448eed;
      }
    }
  }
}
</style>
