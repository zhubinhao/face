<template>
    <view class="My" :style="{paddingTop:barHeight+'px'}">
        <Bar title="我的" />
    </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import {State} from "vuex-class"
import Bar from '@/component/Bar.vue'

@Component({
    components: {Bar},
})
export default class My extends Vue {
    @State barHeight!:number;
}
</script>

<style lang="scss" scope>
.My {

}
</style>
