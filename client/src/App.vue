<template>
  <div id="app">
    <div id="nav">
      <h1>Welcome to Star Logs!</h1>
      <router-link :to="{name: 'home'}">Home </router-link> |
      <router-link to="/auth">Login/Register </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>