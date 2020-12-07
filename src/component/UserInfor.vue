<template>
  <button class="UserInfor" open-type="getUserInfo" @getuserinfo="getuserinfo" v-if="show"></button>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
@Component
export default class UserInfor extends Vue {
  @Provide() show: boolean = false;
  @Mutation setUserInfo!: Function;
  
  created() {
    uni.getSetting({
      success: (e: any) => {
        this.show = !e.authSetting['scope.userInfo'];
      },
    });
  }
  getuserinfo(e: any) {
    const { userInfo } = e.detail;
    if(!userInfo) return
    this.show = false;
    this.setUserInfo(userInfo);
  }
}
</script>

<style lang="scss" scoped>
.UserInfor {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
}
</style>
