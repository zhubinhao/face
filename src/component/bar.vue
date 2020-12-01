<template>
  <view class="Bar" :style="{paddingTop:top+'px',height:height+'px',background:background,color:color }">
    <text class="back iconfont icon-left" @click="back"  v-if="showBack"></text>
    <text class="title">{{title||"智安云脸"}}</text>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

@Component
export default class Bar extends Vue {
  @Provide() top: number = 0;
  @Provide() height: number = 0;
  @Provide() showBack:boolean = false;

  @Prop() private title!: string;
  @Prop() private background!: string;
  @Prop() private color!: string;

  created() {
    const pagesArr: any = getCurrentPages();
    this.top = uni.getMenuButtonBoundingClientRect().top || 0;
    this.height = 5 + (uni.getMenuButtonBoundingClientRect().height || 0);
    this.$store.commit("setBarHeight", this.top + this.height);
    let routeArr: Array<any> = [
      "pages/index/index",
      "pages/my/my"
    ];
    let pages = pagesArr[pagesArr.length - 1].route;
    if (!routeArr.includes(pages)) {
      this.showBack = true
    }
  }
  back(): void {
      uni.navigateBack({})
  }
}
</script>

<style lang="scss" scoped>
.Bar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99999;
  padding-top: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  .back {
    position: absolute;
    left: 30rpx;
    width: 50rpx;
    padding: 10rpx 0;

  }
  .blue {
    color: #1296db;
  }
  .title{
    width: 300rpx;
    position: relative;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
