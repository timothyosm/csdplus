<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size: 14px;">Library PR</span>
            <el-link style="float: right; margin: 3px" type="success" target="_target" href="/popup/popup.html#/PRform">Go to Form</el-link>
          </div>
          <div>Use this form when creating a problem record.</div>
        </el-card>
      </el-col>

      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size: 14px;">Education PR</span>
            <el-link style="float: right; margin: 3px" type="success" target="_target" href="/popup/popup.html#/EDUform">Go to Form</el-link>
          </div>
          <div>Use this form when creating a problem record.</div>
        </el-card>
      </el-col>

      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size: 14px;">Local Gov PR</span>
            <el-link style="float: right; margin: 3px" type="success" target="_target" href="/popup/popup.html#/LGform">Go to Form</el-link>
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
