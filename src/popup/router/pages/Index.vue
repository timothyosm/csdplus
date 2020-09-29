<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-search"></i>  Ticket & PR Search</span>
          </div>
          <TicketSearch></TicketSearch>
          <PRSearch></PRSearch>
        </el-card>
        <el-card id="lastBox" class="box-card">
          <div slot="header" class="clearfix">
            <span><i class="el-icon-document-copy"></i>  Smart Replies</span>
          </div>
          <ReplyButtons></ReplyButtons>
        </el-card>
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
