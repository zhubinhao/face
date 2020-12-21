<template>
  <view class="Index">
    <image :src="inner.image||img" class="img" @click="camera" mode="widthFix" />
    <view>
      <view class="li">
        <text>
          公
          <text class="hidden">一</text>司
          <text class="hidden">名</text>:
        </text>
        <input type="number" :disabled="!showSearch" v-model="corpname" placeholder="请填写企业编号" />
        <view @click="searchs" v-if="showSearch">查询</view>
      </view>
      <view class="li">
        <text>
          姓
          <text class="hidden">一</text>名
          <text class="hidden">一</text>:
        </text>
        <input type="text" v-model="inner.name" placeholder="请填写姓名" />
      </view>
      <view class="li">
        <text>
          性
          <text class="hidden">一</text>别
          <text class="hidden">一</text>:
        </text>
        <view>
          <label class="radio" @click="changeSex(1)">
            <radio :value="1" :checked="inner.sex==1" />男
          </label>
          <label class="radio" @click="changeSex(2)">
            <radio :value="2" :checked="inner.sex==2" />女
          </label>
        </view>
      </view>
      <view class="li">
        <text>
          手机号
          <text class="hidden">一</text>:
        </text>
        <input type="number" v-model="inner.mobile" maxlength="11" placeholder="请填写手机号称" />
      </view>
      <view class="li">
        <text>身份证号:</text>
        <input type="idcard" v-model="inner.cardid" maxlength="18" placeholder="请填写身份证号" />
      </view>
      <view class="li">
        <text>
          部
          <text class="hidden">一</text>门
          <text class="hidden">一</text>:
        </text>
        <input type="text" v-model="inner.dept" placeholder="请填写部门" />
      </view>
      <view class="li">
        <text>
          职
          <text class="hidden">一</text>称
          <text class="hidden">一</text>:
        </text>
        <input type="text" v-model="inner.job" placeholder="请填写职称" />
      </view>

      <view class="btn">
        <text @click="confirm">提交</text>
        <user-infor></user-infor>
      </view>
      <view class="btn1">
        <text @click="toList">登记查询</text>
        <user-infor></user-infor>
      </view>

      <z-alert msg="请到设置中开启摄像头权限" openType="openSetting" ref="alert"></z-alert>
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Iobj } from '@/Interfaces/Icommon';
import { toast, isPhone, isIdCard } from '@/utils/api';
import { indexApi } from '@/api/api'

@Component
export default class Index extends Vue {
  @State public token!: string;
  @State public userInfo!: Iobj;
  @State public headerImg!: string;

  @Provide() showSearch: Boolean = false;
  @Provide() corpname: string = '';
  @Provide() code: string = '';
  @Provide() img: string = require('@/static/img/headerImg.png');
  @Provide() inner: Iobj = {
    wxopenid: '',
    wxname: '',
    name: '',
    mobile: '',
    corpcode: '',
    sex: '1',
    cardid: '',
    dept: '',
    job: '',
    image: '',
  };
  @Watch('headerImg')
  headerImgChange() {
    this.inner = {
      ...this.inner,
      image: this.headerImg,
    };
  }

  @Watch('token')
  tokenChange() {
    if (this.code) {
      this.getInfor(this.code);
    } else {
      this.showSearch = true;
    }
  }

  onLoad(options: Iobj) {
    this.code =
      options.scene || options.corpcode || uni.getStorageSync('corpname');
    this.token && this.code && this.getInfor(this.code);
  }
  changeSex(sex: number): void {
    this.inner = {
      ...this.inner,
      sex,
    };
  }
  searchs() {
    return this.getInfor(this.corpname)
  }
  async getInfor(corpcode: string) {
    const data: any = await indexApi.corpGet(corpcode)
    uni.setStorageSync('corpname', corpcode);
    this.corpname = data.corpname;
    this.showSearch = false;
    this.inner = {
      ...this.inner,
      corpcode,
    };
  }
  async submits(data: Iobj) {
    const that = this;
    const { corpcode } = this.inner;
    uni.showLoading({ title: '上传中' });
    const res: any = await indexApi.imagePerson(this.headerImg,corpcode)
    data.image = res.url;
    await indexApi.gather(data, that)
    uni.showToast({ title: '提交成功' });
    const t = setTimeout(() => {
      clearTimeout(t);
      this.clearn();
    }, 500);
  }

  toList(): void {
    uni.navigateTo({ url: '/pages/index/list' });
  }
  camera() {
    const camera = uni.getStorageSync('camera');
    if (!camera) {
      uni.navigateTo({ url: '/pages/my/camera' });
    } else {
      wx.getSetting({
        success: (res) => {
          console.log(res.authSetting['scope.camera']);
          if (res.authSetting['scope.camera'] === false) {
            (this as any).$refs.alert.open();
          } else {
            uni.navigateTo({ url: '/pages/my/camera' });
          }
        },
      });
    }
  }
  clearn(): void {
    const { corpcode, sex } = this.inner;
    this.inner = {
      wxopenid: '',
      wxname: '',
      name: '',
      mobile: '',
      cardid: '',
      dept: '',
      job: '',
      image: '',
      corpcode,
      sex,
    };
  }
  confirm(): void {
    const { image, name, mobile, corpcode, cardid, dept, job } = this.inner;
    const { nickName } = this.userInfo;
    if (!image) {
      toast('请上传图片');
      return;
    }
    if (!name) {
      toast('请填写姓名');
      return;
    }
    if (!corpcode) {
      toast('请填写公司名');
      return;
    }
    if (!mobile) {
      toast('请填写手机号码');
      return;
    }
    if (isPhone(mobile)) {
      toast('请填写正确的手机号码');
      return;
    }
    this.submits({
      ...this.inner,
      wxname: nickName,
      wxopenid: uni.getStorageSync('openid'),
    });
  }
  onShareAppMessage() {
    return {
      title: '智安云脸',
      path: '/pages/index/addList',
    };
  }
}
</script>

<style lang="scss" scope>
page {
  background: #fff;
}
.Index {
  .img {
    display: block;
    width: 260rpx;
    height: 260rpx;
    margin: 30rpx auto;
  }
  .li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30rpx;
    height: 90rpx;
    text {
      width: 180rpx;
    }
    .hidden {
      color: white;
    }
    input {
      border-bottom: 1px solid $border-color;
      flex: 1;
      height: 60rpx;
      margin-right: 30rpx;
    }
    .radio {
      margin-right: 20rpx;
    }
  }
  .h80 {
    height: 80rpx;
  }
  .btn,
  .btn1 {
    position: relative;
    width: 690rpx;
    margin: 30rpx auto;
    border-radius: 10rpx;
    background: #1f63f9;
    color: white;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    text {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .btn1 {
    border: 1px solid #1f63f9;
    background: white;
    color: #1f63f9;
  }
}
</style>
