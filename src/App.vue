<script lang="ts">
import Vue from 'vue';
import http from '@/utils/http';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    this.getToken();
    this.getUserInfo();
  },
  onShow() {},
  onHide() {},
  methods: {
    getToken() {
      const _this = this;
      uni.login({
        provider: 'weixin',
        success: function (loginRes) {
          http
            .post('/wxopenID', {
              token: '{A9B62A7B-CE65-4D80-A1B5-0713CC529F13}',
              code: loginRes.code,
            })
            .then((res: any) => {
              uni.setStorageSync('openid', res.openid);
              uni.setStorageSync('token', res.token);
              _this.$store.commit('setToken', res.token);
              console.log(res);
            })
            .catch((res) => {});
        },
      });
    },
    getUserInfo() {
      uni.getUserInfo({
        success: (e: any) => {
          const { userInfo } = e;
          this.$store.commit('setUserInfo', userInfo);
        },
      });
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
