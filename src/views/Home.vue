<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ticketSearch msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ticketSearch from '@/components/ticketSearch.vue'

export default {
  name: 'Home',
  components: {
    ticketSearch
  }
}
</script>
