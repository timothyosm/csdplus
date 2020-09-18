<template>
  <div id="popUp">
    <el-row>
      <el-col :span="4">
        <Menu></Menu>
      </el-col>
      <el-col :span="20">
        <el-form
          :model="ValidateForm"
          ref="ValidateForm"
          class="demo-ruleForm"
          v-for="(product, index) in products"
          v-bind:key="product"
        >
          <el-form-item label="title" prop="title">
            <el-input id="titleEdit" type v-model.number="product.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Reply" prop="reply">
            <el-input
              id="replyEdit"
              type="textarea"
              v-model.number="product.text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <br>
          <el-form-item>
            <el-button
              id="submitButton"
              type="primary"
              icon="el-icon-edit"
              @click="submitForm('ValidateForm', product.title, product.text,index)"
            >Save</el-button>

            <el-button
              id="submitButton"
              type="danger"
              icon="el-icon-delete"
              @click="deleteForm(index), reload"
            >Delete</el-button>
          </el-form-item>
        </el-form>
                <el-divider>
          <!-- <i class="el-icon-star-on"></i> -->
        </el-divider>
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
    let data = JSON.parse(localStorage.getItem('reply'));
    return {
      products: data,
      ValidateForm: {
        title: '',
        reply: '',
      },
    };
  },

  methods: {
    reload() {
      this.$forceUpdate();
    },

    submitForm(formName, title, reply, index) {
      // this.$refs[formName].validate(valid => {
      // if (valid) {

      let data = JSON.parse(localStorage.getItem('reply'));
      data.splice(index, 1, { title: title, text: reply }); //remove data[i]
      localStorage.setItem('reply', JSON.stringify(data));

      this.$notify({
        showClose: true,
        message: title + ' saved.',
        type: 'success',
      });

      // } else {
      //     this.$notify({
      //       showClose: true,
      //       message: 'Please fill out all fields.',
      //       type: 'error',
      //     });
      //     return false;
      //   }
      // });
    },
    deleteForm(index) {
      let data = JSON.parse(localStorage.getItem('reply'));
      data.splice(index, 1);
      localStorage.setItem('reply', JSON.stringify(data));
      this.$notify({
        showClose: true,
        message: ' deleted.',
        type: 'warning',
      });
      Vue.forceUpdate();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
