<template>
  <view class="Search">
      <view class='search-box' @click="nativeTo">
        <image class='search-img' src='~@/static/img/search.svg'></image>
        <view>搜索</view>
      </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
}
</script>

<style lang="scss" scoped>
.Search{
   background: #fff;
    padding: 20rpx 30rpx;
    margin-bottom: 20rpx;
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
</style>
