<template>
  <view class="Time">
    <picker mode="date" class="datas" @change="changTime($event,'startData')">{{startData||"请选择"}}</picker>
    <picker mode="time" class="times" @change="changTime($event,'startTime')">{{startTime||"请选择"}}</picker>
    <!-- <text>至</text>
    <picker mode="date" class="datas" @change="changTime($event,'endData')">{{endData||"请选择"}}</picker>
    <picker mode="time" class="times" @change="changTime($event,'endTime')">{{endTime||"请选择"}}</picker> -->
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop, Model } from 'vue-property-decorator';
import { getDetes } from '@/utils/api';

@Component
export default class Time extends Vue {
  @Provide() startData: string = '';
  @Provide() startTime: string = '00:00';
  @Provide() endData: string = '';
  @Provide() endTime: string = '23:59';
  created() {
    this.startData = getDetes();
    this.endData = getDetes();
    this.changeModel();
  }
  changTime(e: any, key: string): void {
    const { value } = e.detail;
    (this as any)[key] = value;
    this.changeModel();
  }
  changeModel(): void {
    this.$emit(
      'input',
      `${this.startData} ${this.startTime}`
    );
  }
}
</script>

<style lang="scss" scoped>
.Time {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24rpx;
  background: #ffffff;
  text {
    margin: 0 10rpx;
  }
  .datas {
    margin-right: 10rpx;
    width: 160rpx;
    height: 50rpx;
    border: 1px solid #dcdfe6;
    line-height: 50rpx;
    border-radius: 10rpx;
    box-sizing: border-box;
    padding-left: 10rpx;
  }
  .times {
    width: 90rpx;
    height: 50rpx;
    border: 1px solid #dcdfe6;
    line-height: 50rpx;
    border-radius: 10rpx;
    box-sizing: border-box;
    padding-left: 10rpx;
  }
}
</style>
