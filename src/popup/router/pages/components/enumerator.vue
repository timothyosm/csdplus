<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-form :model="ValidateForm" ref="ValidateForm" class="demo-ruleForm">
          <el-form-item
            label="Shortcut"
            prop="shortcut"
            :rules="[{ required: true, message: 'Shortcut is required' }]"
          >
            <el-input
              id="shortcut"
              type="age"
              v-model.number="ValidateForm.shortcut"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="Words"
            prop="selector"
            :rules="[{ required: true, message: 'Selector is required' }]"
          >
            <el-input id="selector" v-model.number="ValidateForm.selector" autocomplete="off"></el-input>
          </el-form-item>
          <br>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ValidateForm', ValidateForm.shortcut, ValidateForm.selector)"
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
        shortcut: '',
        selector: '',
      },
    };
  },

  methods: {
    submitForm(formName, shortcut, selector) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // let shortcutValue = shortcut;
          // let selectorValue = selector;
          // let existing = localStorage.getItem('Enumerator');
          // existing = existing ? JSON.parse(existing) : {};
          // existing[shortcutValue] = selectorValue;
          // localStorage.setItem('Enumerator', JSON.stringify(existing));

          // Parse any JSON previously stored in allEntries
          var existingEntries = JSON.parse(localStorage.getItem('Enumerator'));
          if (existingEntries == null) existingEntries = [];
          var entryTitle = shortcut;
          var entryText = selector;
          var entryEnumerator = {
            title: entryTitle,
            words: entryText,
          };
          localStorage.setItem('entryEnumerator', JSON.stringify(entryEnumerator));
          // Save allEntries back to local storage
          existingEntries.push(entryEnumerator);
          localStorage.setItem('Enumerator', JSON.stringify(existingEntries));

          this.$message({
            showClose: true,
            message: 'Saved.',
            type: 'success',
          });
        } else {
          this.$message({
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
