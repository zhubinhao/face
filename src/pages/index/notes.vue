<template>
  <view class="Notes" :style="{paddingTop:barHeight+'px'}">
    <Bar title="进出记录" />
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
export default class Notes extends Vue {
  @State barHeight!: number;
}
</script>

<style lang="scss" scope>
.Notes {
}
</style>
