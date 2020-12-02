<template>
  <view class="Access">
    <uni-search></uni-search>
    <block v-for="(item,index) in list" :key="index">
      <people-list :type="2" />
    </block>
  </view>
</template>

<script lang="ts">
import PeopleList from '@/component/PeopleList.vue'
import Search from '@/component/Search.vue'

import { Vue, Component, Provide } from 'vue-property-decorator';
@Component({
  components:{
    'people-list': PeopleList,
    'uni-search': Search
  }
})
export default class Access extends Vue {
  @Provide() list: Array<any> = [1,2,3];
  onLoad(optons: any) {
  }
}
</script>

<style lang="scss" scope>
</style>
