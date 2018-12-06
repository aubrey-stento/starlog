<template>
  <div class="logForm">
    <form @submit.prevent="addLog">
      <input type="text" v-model="logs.title">
      <input type="text" v-model="logs.body">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'logForm',
    data() {
      return {
        logs: {
          title: '',
          body: ''
        }
      }
    },
    computed: {},
    methods: {
      addLog() {
        this.$store.dispatch('addLog', this.logs)
      }
    }
  }

</script>

<style>


</style>