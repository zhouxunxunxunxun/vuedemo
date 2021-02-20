<template>
<div class="res">
<resourcetable></resourcetable>
</div>

</template>

<script>
import resourcetable from '@/components/resourcetable.vue'
export default {
    components:{
        resourcetable
    }
}
</script>

<style scoped>
.res{
    width: 100%;
    height: 550px;
    /* border:1px solrgb(32, 16, 16)ack; */
    margin-top: 30px;
}
</style>