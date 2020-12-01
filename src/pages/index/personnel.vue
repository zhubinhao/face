<template>
  <view class="Personnel" :style="{paddingTop:barHeight+'px'}">
    <Bar title="人员管理" />
  </view>
</template>

<script lang="ts">
import { State } from "vuex-class";
import { Vue, Component, Provide } from "vue-property-decorator";
import Bar from "@/component/Bar.vue";

@Component({
  components: {
    Bar
  }
})
export default class Personnel extends Vue {
  @State barHeight!: number;
}
</script>

<style lang="scss" scope>
.Personnel {
}
</style>
