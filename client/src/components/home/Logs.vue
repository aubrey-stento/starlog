<template>
  <div class="logs">
    {{logs}}
    <button @click="showLogForm = !showLogForm">Create a Log</button>
    <logForm v-if="showLogForm"></logForm>
  </div>
</template>

<script>
  import LogForm from '@/components/home/LogForm.vue'

  export default {
    name: 'logs',
    data() {
      return {
        showLogForm: false
      }
    },
    mounted() {
      this.$store.dispatch("getLogs")
    },
    computed: {
      logs() {
        return this.$store.state.logs
      },
      addLog() {
        return this.$store.state.addLog
      }
    },
    methods: {
    },
    components: {
      LogForm
    }
  }

</script>

<style>


</style>