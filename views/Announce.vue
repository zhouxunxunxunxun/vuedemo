<template>
  <div class="announce">
    <!-- <Nav msg="Welcome to Your Vue.js App"/> -->
    <Gonggao></Gonggao>
  </div>
</template>

<script>
// @ is an alias to /src
import Gonggao from '@/components/gonggao.vue'

export default {
  name: 'announce',
  components: {
    Gonggao
  },
}
</script>

<style scoped>

</style>
