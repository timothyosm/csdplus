<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style>
#buttons {
  padding: 2px;
  display: inline-block;
}
#popUp {
  width: 525px;
  min-height: 700px;
}

body {
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
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

.el-form-item__label {
  margin-top: 10px;
}
#replyEdit {
  height: 100px;
}
#reply {
  height: 250px;
}
a:link {
  text-decoration: none;
}
</style>
