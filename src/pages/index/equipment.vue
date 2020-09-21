<template>
  <view class="Equipment" :style="{paddingTop:barHeight+'px'}">
    <Bar title="设备管理"/>
  </view>
</template>

<script lang="ts">
import { State } from "vuex-class";
import { Vue, Component, Provide } from "vue-property-decorator";
import Bar from "@/component/Bar.vue"
@Component({
  components: {
    Bar
  }
})
export default class Equipment extends Vue {
  @State barHeight!: number;
}
</script>

<style lang="scss" scope>
.Equipment {
}
</style>
