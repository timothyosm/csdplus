<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-form :model="ValidateForm" ref="ValidateForm" class="demo-ruleForm">
          <el-collapse accordion>
            <el-collapse-item name="1">
              <template slot="title"> <i class="el-icon-question"></i> Need Help? Click Here!</template>

              <ol>
                <li>Enter a short Title</li>
                <li>
                  Type out your message, use the field buttons to add a dynamic field. This scrapes the data from the CSD when you click the button on the home page. For example
                  <code><span>&#60;</span>customerFirstName<span>&#62;</span></code> will be replaced with the customers first name when the reply is sent to your clipboard.
                </li>
                <li>Go back to the homepage and you can now use your smart reply!</li>
              </ol>
            </el-collapse-item>
          </el-collapse>

          <el-form-item label="Title" prop="title" :rules="[{ required: true, message: 'Title is required' }]">
            <el-input id="title" type="age" v-model.number="ValidateForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <br />
          <el-button @click="shortcut(code.code)" size="mini" :model="tableData" v-for="(code, index) in tableData" v-bind:key="tableData"> {{ code.field }}</el-button>
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
