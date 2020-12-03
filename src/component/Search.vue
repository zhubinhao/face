<template>
  <view class="Search">
    <view class='search-box'>
      <image class='search-img' src='~@/static/img/search.svg'></image>
      <input type="text" placeholder="搜索" v-model="keyWorld" />
    </view>
    <view class="btn" @click="searchs">搜索</view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  @Provide() keyWorld: string = '';

  searchs(): void {
    this.$emit('search', this.keyWorld);
  }
}
</script>

<style lang="scss" scoped>
.Search {
  background: #fff;
  padding: 20rpx 30rpx;
  margin-bottom: 20rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .search-box {
    flex: 1;
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
    input {
      flex: 1;
      padding-left: 10rpx;
    }
  }
  .btn {
    font-size: 30rpx;
    margin-left: 20rpx;
    color: #448eed;
  }
}
</style>
