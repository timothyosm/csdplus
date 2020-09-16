<template>
  <div>
    <TicketSearch></TicketSearch>
    <br />
    <PRSearch></PRSearch>
  </div>
</template>

<script>
import PRSearch from "@/components/prSearch.vue";
import TicketSearch from "@/components/ticketSearch.vue";


export default {
  name: "Home",
  components: { TicketSearch, PRSearch }
};
</script>

<style>
html {
  width: 500px;
}

.el-menu--collapse {
  height: 500px;
}

.el-collapse {
  border-top: 0px solid #ebeef5 !important;
  border-bottom: 0px solid #ebeef5 !important;
}

.el-collapse-item__header {
  border-top: 0px solid #ebeef5 !important;
  border-bottom: 0px solid #ebeef5 !important;
}

.el-form-item {
  margin-bottom: 0px !important;
}
</style>
