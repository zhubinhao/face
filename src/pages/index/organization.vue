<template>
  <view class="Organization" :style="{paddingTop:barHeight+'px'}">
    <Bar title="部门组织" />
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
export default class Organization extends Vue {
  @State barHeight!: number;
}
</script>

<style lang="scss" scope>
.Organization {
}
</style>
