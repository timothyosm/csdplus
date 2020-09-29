<template>
  <div>
    <el-menu
      class="menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <router-link to="/">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">Home</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span slot="title">Replies</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Replies</span>
          <router-link to="/replyEntry">
            <el-menu-item index="2-1">Enter Reply</el-menu-item>
          </router-link>
          <router-link to="/edit">
            <el-menu-item index="2-2">Edit Replies</el-menu-item>
          </router-link>
      </el-submenu>

      <router-link to="/form">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">Forms</span>
        </el-menu-item>
      </router-link>

      <!-- <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">Settings</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
