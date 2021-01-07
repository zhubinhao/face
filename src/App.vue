<script lang="ts">
import Vue from 'vue';
import http from '@/utils/http';
import { userApi } from '@/api/api';
import { Iobj } from '@/Interfaces/Icommon';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    this.getToken();
    this.getUserInfo();
  },
  onShow() {},
  onHide() {},
  methods: {
    async getToken() {
      const code: string = await userApi.getCode().then((res: any) => res.code);
      const data = await userApi.getOpenId(code).then((res: any) => res);
      uni.setStorageSync('openid', data.openid);
      uni.setStorageSync('token', data.token);
      uni.setStorageSync('base', data.base);
      this.$store.commit('setToken', data.token);
    },
    async getUserInfo() {
      const userInfo = await userApi.getUserInfo().then((res: any) => res.userInfo);
      this.$store.commit('setUserInfo', userInfo);
    },
  },
});
</script>
<style>
* {
  font-family: '微软雅黑';
}
page {
  background: #f2f2f2;
}
</style>
