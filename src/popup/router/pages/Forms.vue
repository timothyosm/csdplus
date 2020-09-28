<template>
  <div id='popUp'>
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size: 14px;">Problem Record</span>
            <el-link
              style="float: right; margin: 3px"
              type="success"
              target="_target"
              href='chrome-extension://' + window.location.host + ' /popup/popup.html#/PRform'
            >Go to Form</el-link>
          </div>
          <div>Use this form when creating a problem record.</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from './components/menu';

export default {
  name: 'App',
  components: { Menu },
};
</script>

<style>
.box-card {
  margin-top: 20px;
}
</style>
