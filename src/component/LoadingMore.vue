<template>
  <view class="LoadingMore">
    <text v-if="type==1">加载中...</text>
    <text v-if="type==2">没有更多数据~</text>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from 'vue-property-decorator';
import { getDetes } from '@/utils/api';

@Component
export default class LoadingMore extends Vue {
  @Prop() public type!: number; //0上拉加载更多,1加载中,2没有更多数据
}
</script>

<style lang="scss" scoped>
.LoadingMore {
  height: 90rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28rpx;
  color: gray;
}
</style>
