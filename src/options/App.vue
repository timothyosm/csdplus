<template>
  <hello-world />
</template>

<script>
import ticketSearch from '@/components/ticketSearch.vue'

export default {
  name: 'App',
  components: { ticketSearch }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
