<template>
  <div>
    <el-form>
      <el-form-item label="PR Number" label-width="105px">
        <el-input v-model="formPR.prNumber"></el-input>
      </el-form-item>
      <el-collapse size="mini" id="advanced">
        <el-collapse-item
          size="mini"
          id="advanced"
          icon="el-icon-search"
          title="Advanced Search"
          name="1"
        >
          <el-form>
            <el-form-item size="mini" id="advanced" label="Summary">
              <el-input size="mini" v-model="formPR.Summary"></el-input>
            </el-form-item>
            <el-form-item size="mini" id="advanced" label="Details">
              <el-input size="mini" v-model="formPR.Details"></el-input>
            </el-form-item>
            <el-form-item size="mini" id="advanced" label="End User">
              <el-input size="mini" v-model="formPR.endUser"></el-input>
            </el-form-item>
            <el-form-item size="mini" id="advanced" label="Customer Name">
              <el-input size="mini" v-model="formPR.customerName"></el-input>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
      <el-form-item>
        <el-button
          size="mini"
          icon="el-icon-search"
          type="primary"
          @click="submit('open')"
        >Search PR</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPR: {
        prNumber: "",
        prDesc: "",
        Summary: "",
        Details: "",
        endUser: "",
        customerName: "",
      },
    };
  },
};
</script>

<style scoped>
</style>
