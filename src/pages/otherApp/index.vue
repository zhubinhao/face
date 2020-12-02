<template>
  <view class="content" :style="{paddingTop:barHeight+'px'}">
    <bar :title="title" background="#448EF1" color="#ffffff" />
    <view class="headerBox">
      <view class="bg448"></view>
      <view class="header">
        <view>
          <text>100</text>
          <text>在场人数</text>
        </view>
        <view class="border">
          <text>100</text>
          <text>进场人次</text>
        </view>
        <view>
          <text>100</text>
          <text>离场人次</text>
        </view>
      </view>
    </view>

    <view class="cardBox">
      <view class="card bg1">
        <view>
          <text class="title">人员管理</text>
          <image class="img" src="~@/static/img/icon1.png"></image>
        </view>
        <view>
          <text class="en">Person</text>
          <text class="number">300</text>
        </view>
      </view>
      <view class="card bg2">
        <view>
          <text class="title">设备管理</text>
          <image class="img" src="~@/static/img/icon2.png"></image>

        </view>
        <view>
          <text class="en">Device</text>
          <text class="number">300</text>
        </view>
      </view>
      <view class="card bg3">
        <view>
          <text class="title">部门组织</text>
          <image class="img" src="~@/static/img/icon3.png"></image>
        </view>
        <view>
          <text class="en">Department</text>
          <text class="number">300</text>
        </view>
      </view>
      <view class="card bg4">
        <view>
          <text class="title">进出记录</text>
          <image class="img" src="~@/static/img/icon4.png"></image>

        </view>
        <view>
          <text class="en">In And Out</text>
          <text class="number">300</text>
        </view>
      </view>
    </view>
    <view class="p">设备列表</view>
    <List></List>
  </view>
</template>

<script lang="ts">
import { State } from 'vuex-class';
import { Vue, Component, Provide } from 'vue-property-decorator';
import bar from '@/component/Bar.vue';
import List from '@/component/List.vue';

@Component({
  name: 'Index',
  components: {
    bar,
    List,
  },
})
export default class Index extends Vue {
  @Provide() adList: Array<any> = [];
  @Provide() title: string = '';
  @State barHeight!: number;

  onShareAppMessage() {
    return {
      title: '智安云脸',
      path: '/pages/index/index',
    };
  }
}
</script>

<style lang="scss" scope>
.content {
  .headerBox {
    position: relative;
    height: 190rpx;
    .bg448 {
      height: 120rpx;
      background: #448ef1;
    }
    .header {
      position: absolute;
      width: 690rpx;
      height: 170rpx;
      top: 20rpx;
      left: 30rpx;
      background: #ffffff;
      border-radius: 12rpx;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      padding: 30rpx 0;
      box-sizing: border-box;
      > view {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 30rpx;
      }
      .border {
        position: relative;
        &::after {
          content: '';
          height: 80rpx;
          width: 1px;
          background: #f6f6f6;
          position: absolute;
          right: 0;
          top: 10rpx;
        }
        &::before {
          content: '';
          height: 80rpx;
          width: 1px;
          background: #f6f6f6;
          position: absolute;
          left: 0;
          top: 10rpx;
        }
      }
    }
  }
  .cardBox {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 30rpx 30rpx 0 30rpx;
    .card {
      width: 330rpx;
      height: 150rpx;
      border-radius: 10rpx;
      margin-top: 30rpx;
      color: white;
      box-sizing: border-box;
      padding: 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      view {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      > view:first-child {
        align-items: center;
      }
      .en {
        font-size: 26rpx;
        position: relative;
        top: -2rpx;
      }
      .img {
        width: 50rpx;
        height: 50rpx;
      }
      .title {
        font-weight: 600;
        font-size: 34rpx;
        position: relative;
        top: -4rpx;
      }
      .number {
        width: 120rpx;
        border-bottom: 1px solid white;
        text-align: center;
        padding-bottom: 2rpx;
        font-size: 30rpx;
      }
    }
    .bg1 {
      background: #1054a9;
    }
    .bg2 {
      background: #1f8ffb;
    }
    .bg3 {
      background: #36c3bd;
    }
    .bg4 {
      background: #5044ee;
    }
  }
  .p {
    font-size: 32rpx;
    font-weight: 600;
    margin: 30rpx;
  }
}
</style>
