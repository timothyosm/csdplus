<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <h4>Ticket Search</h4>
        <TicketSearch></TicketSearch>
        <br />
        <PRSearch></PRSearch>
        <el-divider>
        </el-divider>
        <h4>Stored Replies</h4>
        <ReplyButtons></ReplyButtons>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PRSearch from './components/prSearch';
import TicketSearch from './components/ticketSearch';
import Menu from './components/menu';
import ReplyButtons from './components/replyButtons';

export default {
  name: 'App',
  components: { TicketSearch, PRSearch, Menu, ReplyButtons },
};
</script>

<style>
</style>
