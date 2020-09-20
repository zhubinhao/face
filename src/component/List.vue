<template>
  <view class="List">
    <text class="logo" :class="{red:false}">出</text>
    <text class="msg">test0</text>
    <view class="btn">开门</view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

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
  margin: 30rpx 20rpx;
  padding: 30rpx;
  .logo{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    background: #2EC4A7;
    text-align: center;
    line-height: 80rpx;
    color: #ffffff;
    font-size: 40rpx;
    margin-right: 20rpx; 
  }
  .msg{
    flex: 1;
  }
  .red{
    background: #EA837C;
  }
  .btn{
    background: #32CDFD;
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
