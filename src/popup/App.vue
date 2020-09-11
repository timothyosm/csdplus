<template>
  <div>
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <TicketSearch></TicketSearch>
        <PRSearch></PRSearch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PRSearch from "@/components/prSearch.vue";
import TicketSearch from "@/components/ticketSearch.vue";
import Menu from "@/components/menu.vue";

export default {
  name: "App",
  components: { TicketSearch, PRSearch, Menu },
};
</script>

<style>
html {
  width: 500px;
}

.el-menu--collapse {
  height: 500px;
}

</style>
