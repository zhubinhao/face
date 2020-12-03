<script lang="ts">
import Vue from 'vue';
import { getOpenIds } from '@/utils/api';

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
      const data = {
        user: 'admin',
        pwd: '21232F297A57A5A743894A0E4A801FC3',
      };
      const token = await (this as any).$http
        .post('/JY/GetToken', data)
        .then((res: any) => res.token);
      this.$store.commit('setToken', token);
      getOpenIds().then((res: any) => {
        uni.setStorageSync('openid', res.openid);
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
