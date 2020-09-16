<template>
  <div>
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
    components: {
    Menu
  },
};
</script>
