<template>
<div class="depar">
    <departmenttable></departmenttable>
</div>


</template>

<script>
import departmenttable from '@/components/departmenttable.vue'
export default {
    components:{
        departmenttable
    }
}
</script>

<style scoped>
.depar{
    width: 100%;
    height: 550px;
    margin-top: 30px;
}
</style>