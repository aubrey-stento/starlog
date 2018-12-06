<template>
  <div class="home">
    <button @click="logout">Log Out</button>
    <h1>YOU MADE IT HOME</h1>
    <h2>Welcome {{user.name}}</h2>
    <logs></logs>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Logs from '@/components/home/Logs.vue'
  import router from '@/router.js'

  export default {
    name: 'home',
    components: {
      Logs
    },

    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>