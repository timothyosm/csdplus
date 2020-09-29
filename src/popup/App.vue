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
#container > form > div > div:nth-child(1) > div:nth-child(9) > div > div > textarea {
  min-height: 4.375rem;
  height: 4.375rem;
}

#buttons {
  padding: 0.125rem;
  display: inline-block;
}
#popUp {
  width: 32.8125rem;
}

body {
  margin-left: 0rem;
  margin-top: 0rem;
  margin-bottom: 0rem;
}

#lastBox {
  margin-bottom: 25px;
}

.el-menu--collapse {
  height: 100vh;
}
.el-collapse {
  border-top: 0rem solid #ebeef5 !important;
  border-bottom: 0rem solid #ebeef5 !important;
}

.el-collapse-item__header {
  border-top: 0rem solid #ebeef5 !important;
  border-bottom: 0rem solid #ebeef5 !important;
}

.el-form-item {
  margin-bottom: 0rem !important;
}

.el-form-item__label {
  margin-top: 0.625rem;
}
#replyEdit {
  height: 6.25rem;
}
#reply {
  height: 15.625rem;
}
a:link {
  text-decoration: none;
}
</style>
