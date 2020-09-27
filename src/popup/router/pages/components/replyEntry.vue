<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-form :model="ValidateForm" ref="ValidateForm" class="demo-ruleForm">
          <br />
          <el-card>
            <div slot="header" class="clearfix">
              <span><b>Need help?</b></span>
              <el-button style="float: right; padding: 3px 0" type="text">Click here</el-button>
            </div>
            <p v-if="active === 1">1</p>
            <br />
            <el-button size="mini" style="margin-top: 12px;" @click="next">Next step</el-button>
          </el-card>
          <el-form-item label="Title" prop="title" :rules="[{ required: true, message: 'Title is required' }]">
            <el-input id="title" type="age" v-model.number="ValidateForm.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-button @click="shortcut(code.code)" type="success" size="mini" :model="tableData" v-for="(code, index) in tableData" v-bind:key="tableData">
            {{ code.field }}</el-button
          >

          <el-form-item label="Reply" prop="reply" :rules="[{ required: true, message: 'Reply is required' }]">
            <el-input id="reply" type="textarea" v-model.number="ValidateForm.reply" autocomplete="off" placeholder="Hello <CustFirstName>!"></el-input>
          </el-form-item>
          <br />

          <el-form-item>
            <el-button id="submitButton" size="small" type="primary" icon="el-icon-check" @click="submitForm('ValidateForm', ValidateForm.title, ValidateForm.reply)"
              >Create</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
      <!-- <template>
        <el-table :v-if="tableData[0].example !== null" :data="tableData" stripe>
          <el-table-column prop="code" label="Code"></el-table-column>
          <el-table-column prop="field" label="Field"></el-table-column>
          <el-table-column prop="example" label="Example"></el-table-column>
        </el-table>
      </template> -->
    </el-row>
  </div>
</template>


<script>
import Menu from './menu';
var payload = localStorage.getItem('payload');
var exampleObject = JSON.parse(payload);

export default {
  name: 'App',
  components: { Menu },
  data() {
    return {
      active: 0,
      tableData: [
        {
          code: '<name>',
          field: 'Your Name',
        },
        {
          code: '<customer>',
          field: 'Customers Name',
        },
        {
          code: '<customerFirstName>',
          field: 'Customers First Name',
        },
        {
          code: '<ticket>',
          field: 'Ticket Number',
        },
        {
          code: '<time>',
          field: 'Time',
        },
      ],
      ValidateForm: {
        title: '',
        reply: '',
      },
    };
  },

  methods: {
    next() {
      if (this.active++ > 4) this.active = 0;
    },
    shortcut(text) {
      var textValue = document.querySelector('#reply').value;
      var combinedValue = textValue + text;
      document.querySelector('#reply').value = combinedValue;
    },
    submitForm(formName, title, reply) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // Parse any JSON previously stored in allEntries
          var existingEntries = JSON.parse(localStorage.getItem('reply'));
          if (existingEntries == null) existingEntries = [];
          var entryTitle = title;
          var entryText = reply;
          var entry = {
            title: entryTitle,
            text: entryText,
          };
          localStorage.setItem('entry', JSON.stringify(entry));
          // Save allEntries back to local storage
          existingEntries.push(entry);
          localStorage.setItem('reply', JSON.stringify(existingEntries));

          this.$notify({
            showClose: true,
            message: title + ' saved.',
            type: 'success',
          });
        } else {
          this.$notify({
            showClose: true,
            message: 'Please fill out all fields.',
            type: 'error',
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-button {
  margin: 0.0625rem !important;
  margin-left: 0rem !important;
}
</style>
