<template>
<div class="gonggao">
    <gonggaotable></gonggaotable>
</div>


</template>

<script>
import gonggaotable from '@/components/gonggaotable.vue'
export default {
    components:{
        gonggaotable
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.gonggao{
    width: 100%;
    height: 550px;
    /* border:1px solrgb(32, 16, 16)ack; */
    margin-top: 30px;
}
</style>