<template>
   <div id='popUp'>
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-form :model="ValidateForm" ref="ValidateForm" class="demo-ruleForm">
          <el-form-item
            label="Title"
            prop="title"
            :rules="[{ required: true, message: 'Title is required' }]"
          >
            <el-input id="title" type="age" v-model.number="ValidateForm.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="Reply"
            prop="reply"
            :rules="[{ required: true, message: 'Reply is required' }]"
          >
            <el-input
              id="reply"
              type="textarea"
              v-model.number="ValidateForm.reply"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <br>
          <el-form-item>
            <el-button
              id="submitButton"
              type="primary"
              icon="el-icon-check"
              @click="submitForm('ValidateForm', ValidateForm.title, ValidateForm.reply)"
            >Create</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from './menu';

export default {
  name: 'App',
  components: { Menu },
  data() {
    return {
      ValidateForm: {
        title: '',
        reply: '',
      },
    };
  },

  methods: {
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

<style></style>
