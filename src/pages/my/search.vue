<template>
  <view class="Search">
    <view>
      <text>关键词:</text>
      <input placeholder="请输入关键词" v-model="keyWorld" />
    </view>
    <view>
      <text>开始时间:</text>
      <unI-time v-model="startTime" />
    </view>
    <view>
      <text>结束时间：</text>
      <unI-time v-model="endTime" />
    </view>
    <button @click="searchs" class="btn">搜索</button>
  </view>
</template>

<script lang="ts">
import Time from '@/component/Time.vue';
import { Vue, Component, Provide } from 'vue-property-decorator';
@Component({
  components: {
    'unI-time': Time,
  },
})
export default class Search extends Vue {
  @Provide() keyWorld: string = '';
  @Provide() startTime: string = '';
  @Provide() endTime: string = '';

  searchs(): void {
    const pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    (prePage as any).onLoad({
      keyWorld: this.keyWorld,
      startTime: this.startTime,
      endTime: this.endTime,
    });
    uni.navigateBack({});
  }
}
</script>

<style lang="scss" scope>
page {
  background: #fff;
}
.Search {
  padding: 90rpx 60rpx 30rpx 60rpx;
  view {
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 90rpx;
    border-bottom: 1px solid #f6f6f6;
    text {
      font-size: 32rpx;
      width: 160rpx;
    }
    input {
      border-radius: 10rpx;
      font-size: 26rpx;
      padding-left: 10rpx;
    }
  }
  .btn {
    display: block;
    color: #ffffff;
    background: #409eff;
    width: 160rpx;
    height: 70rpx;
    border-radius: 10rpx;
    margin: 60rpx auto;
    padding: 0;
    line-height: 70rpx;
    font-size: 32rpx;
  }
}
</style>
