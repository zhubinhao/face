<template>
  <view class="Access">
    <uni-search @search="search"></uni-search>
    <block v-for="(item,index) in list" :key="index">
      <people-list :type="2" />
    </block>
    <loading-more :type="dataType"></loading-more>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import PeopleList from '@/component/PeopleList.vue';
import Search from '@/component/Search.vue';
import LoadingMore from '@/component/LoadingMore.vue';

@Component({
  components: {
    'people-list': PeopleList,
    'uni-search': Search,
    'loading-more': LoadingMore,
  },
})
export default class Access extends Vue {
  @Provide() list: Array<any> = [];
  @Provide() pageNo: number = 1;
  @Provide() dataType: number = 0; //0上拉加载更多,1加载中,2没有更多数据
  onLoad() {
    this.getData();
  }
  search(keyWorld: string): void {
    console.log(keyWorld);
    this.getData();
  }
  async getData() {
    this.dataType = 1;
    const data = await 1;
    this.dataType = 0;
  }
  onReachBottom() {
    if (this.dataType === 0) {
      this.pageNo++;
      this.getData();
    }
  }
}
</script>

<style lang="scss" scope>
</style>
