<template>
    <view class="About" :style="{paddingTop:barHeight+'px'}">
        <bar title="我的" />
        1
    </view>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import {State} from "vuex-class"
import bar from '@/component/bar.vue'
import { http } from '@/utils/http';
import { imgUrl } from '@/utils/path';


@Component({
    name: 'About',
    components: {bar},
})
export default class Index extends Vue {
    @Provide() userInfos: any = {};
    @State barHeight!:number;
    mounted() {
        this.load()
    }
    load(){
     this.userInfos = uni.getStorageSync("userInfos")||{};
    }
    nativeTo(url:string){
      uni.navigateTo({url})
    }
    
}
</script>

<style lang="scss" scope>

.titles {
    padding: 20rpx  30rpx;
    display: flex;
    font-size: 32rpx;
    justify-content: space-between;
    align-items: center;
    border-bottom: 20rpx solid #f6f6f6;
    position: relative;
    .img{
      width: 90rpx;
      height: 90rpx;
      border-radius: 50%;
      border:1px solid lightgray;
    }

}
.p{
    padding: 0rpx  30rpx;
    font-size: 32rpx;
    height: 90rpx;
    line-height: 90rpx;
    border-bottom: 1rpx solid lightgray;

}

</style>
