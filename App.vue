<template>
  <div id="app">
    <div id="nav">
     <!-- <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/register">Register</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg:'请登录' //用到vuex
    }
  },
}
</script>

<style scoped>
    @import './assets/normalize.css';
</style>
