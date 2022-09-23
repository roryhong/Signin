<template>
  <div id="app">
    <div v-if="this.$route.path === '/'">
      <Sayhello/>
    </div>
    <router-view />
  </div>
</template>

<script>
  import Sayhello from "./components/Sayhello.vue"

  export default {
    components: {
      Sayhello
    },
    watch: {
      $route(to) {
        this.nowRoute = to
      }
    }
  }
</script>

<style>
  body {
    background: url("https://images.unsplash.com/photo-1645531622852-93ead7c887f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
</style>