<template>
  <view class="List">
    <text class="logo" :class="{red:false}">出</text>
    <text class="msg">test0</text>
    <view class="btn">开门</view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

@Component
export default class List extends Vue {
  @Prop() private title!: string;
}
</script>

<style lang="scss" scoped>
.List {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border-radius: 10rpx;
  padding: 30rpx;
  border-radius: 10rpx;
  margin-top: 20rpx;
  box-shadow: 0rpx 2rpx 10rpx 2rpx rgba(237, 237, 237, 0.5);
  .logo {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    background: #2ec4a7;
    text-align: center;
    line-height: 80rpx;
    color: #ffffff;
    font-size: 40rpx;
    margin-right: 20rpx;
  }
  .msg {
    flex: 1;
  }
  .red {
    background: #ea837c;
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
</style>
