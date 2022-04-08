<template>
  <div id="container">
    <h1>CES Problem Form</h1>

    <el-form :model="EDUForm" ref="form">
      <el-row :gutter="20">
        <el-col :span="8">
          <h2>General Information</h2>

          <el-form-item size="mini" label="Number of Impacted Users" prop="impactedUsers">
            <el-radio-group v-model="prForm.impactedUsers" size="mini" style="width: 100%;">
              <el-radio border label="One"></el-radio>
              <el-radio border label="Multiple"></el-radio>
              <el-radio border label="All"></el-radio>
            </el-radio-group>
          </el-form-item>

          <h2>Customer Replication Information</h2>

          <el-form-item size="mini" label="Environment" prop="environment" :rules="[{ required: True, message: 'Please select', trigger: 'blur' }]">
            <el-radio-group v-model="prForm.enviroment1" size="mini" style="width: 100%;">
              <el-radio border label="Live"></el-radio>
              <el-radio border label="Test"></el-radio>
              <el-radio border label="Other"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item
            size="mini"
            id="formItem"
            prop="customerOrganisationName"
            label="Environment Link"
            :rules="[{ required: true, message: 'Please input a URL', trigger: 'blur' }]"
          >
            <el-input v-model="prForm.customerOrganisationName"></el-input>
          </el-form-item>

          <el-form-item size="mini" label="Customer Browser" prop="browser" :rules="[{ required: true, message: 'Customer browser the issue was reported in', trigger: 'blur' }]">
            <el-radio-group v-model="prForm.enviroment" size="mini" style="width: 100%;">
              <el-radio border label="Chrome"></el-radio>
              <el-radio border label="Internet Explorer"></el-radio>
              <el-radio border label="Microsoft Edge"></el-radio>
              <el-radio border label="Other?"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item size="mini" prop="otherEnviroment" label="Other Browser" v-if="prForm.enviroment === 'Other?'">
            <el-input v-model="prForm.otherEnviroment"></el-input>
          </el-form-item>

          <el-form-item size="mini" label="Customer Database Provided">
            <el-select v-model="prForm.module" placeholder="please select the Module" style="width: 100%;">
              <el-option label="No" value="No"></el-option>
              <el-option label="Yes (Please provide link below)" value="Yes"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item size="mini" prop="otherModule" label="Database Link" v-if="prForm.module === 'Yes'">
            <el-input v-model="prForm.otherModule"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <h2>Problem Information</h2>
          <el-form-item size="mini" prop="title" label="Title" :rules="[{ required: true, message: 'Please input a Title', trigger: 'blur' }]">
            <el-input v-model="prForm.title"></el-input>
          </el-form-item>

          <el-form-item size="mini" prop="description" label="Description" :rules="[{ required: true, message: 'Please input a description', trigger: 'blur' }]">
            <quill-editor
              placeholder="Enter the details of the issue reported, it’s useful to know the impact to Customer(s). If the customer anecdotally explains how this is impacting their business function it can be documented here, to let development know that impact, so they can prioritise the issue"
              style="margin-top:50px;"
              ref="myQuillEditor"
              v-model="prForm.description"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </el-form-item>

          <el-form-item size="mini" prop="expectedOutcome" label="Expected Outcome" :rules="[{ required: true, message: 'Please input Expected Outcome', trigger: 'blur' }]">
            <quill-editor
              style="margin-top:50px;"
              ref="myQuillEditor"
              v-model="prForm.expectedOutcome"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </el-form-item>

          <el-form-item size="mini" prop="actualOutcome" label="Actual Outcome" :rules="[{ required: true, message: 'Please input Actual Outcome', trigger: 'blur' }]">
            <quill-editor
              style="margin-top:50px;"
              ref="myQuillEditor"
              v-model="prForm.actualOutcome"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-button style="float: right; padding: 3px 0" type="text" @click="submitForm('form')">Send form to clipboard</el-button>
            </div>

            <div id="formCont">
              <div v-if="prForm.impactedUsers !== ''">
                <h3>Impacted Users</h3>
                <div>{{ prForm.impactedUsers }}</div>
              </div>
              <div v-if="prForm.enviroment1 !== ''">
                <h3>Environment</h3>
                <div>{{ prForm.enviroment1 }}</div>
              </div>
              <div v-if="prForm.enviroment !== ''">
                <h3>Environment</h3>
                <div>{{ prForm.enviroment }}</div>
              </div>
              <div v-if="prForm.otherEnviroment !== ''">
                <h3>Other Environment</h3>
                <div>{{ prForm.otherEnviroment }}</div>
              </div>
              <div v-if="prForm.module !== ''">
                <h3>Customer Database Provided</h3>
                <div>{{ prForm.module }}</div>
              </div>
              <div v-if="prForm.otherModule !== ''">
                <h3>Database Link</h3>
                <div>{{ prForm.otherModule }}</div>
              </div>
              <div v-if="prForm.title !== ''">
                <h3>Title</h3>
                <div>{{ prForm.title }}</div>
              </div>
              <div v-if="prForm.description !== ''">
                <h3>Description</h3>
                <div v-html="prForm.description"></div>
              </div>
              <div v-if="prForm.systemInfo !== ''">
                <h3>System Info</h3>
                <div v-html="prForm.systemInfo"></div>
              </div>
              <div v-if="prForm.expectedOutcome !== ''">
                <h3>Expected Outcome</h3>
                <div v-html="prForm.expectedOutcome"></div>
              </div>
              <div v-if="prForm.actualOutcome !== ''">
                <h3>Actual Outcome</h3>
                <div v-html="prForm.actualOutcome"></div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: true,
        },
      },

      prForm: {
        customerOrganisationName: '',
        analystName: '',
        date: '',
        productVersion: '',
        version: '',
        module: '',
        otherModule: '',
        loginUserProfile: '',
        impactedUsers: '',
        link: '',
        enviroment: '',
        otherEnviroment: '',
        qaTested: '',
        title: '',
        description: '',
        systemInfo: '',
        expectedOutcome: '',
        actualOutcome: '',
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          function listener(e) {
            e.clipboardData.setData('text/html', document.querySelector('#formCont').innerHTML);
            e.clipboardData.setData('text/plain', document.querySelector('#formCont').innerHTML);
            e.preventDefault();
          }
          document.addEventListener('copy', listener);
          document.execCommand('copy');
          document.removeEventListener('copy', listener);

          this.$message({
            message: 'Sent to clipboard.',
            type: 'success',
          });
        } else {
          this.$message({
            message: 'Please fill in all required feilds',
            type: 'error',
          });
          return false;
        }
      });
    },
    onEditorBlur(quill) {
      console.log('editor blur!', quill);
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill);
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text);
      this.content = html;
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log('this is current quill instance object', this.editor);
  },
};
</script>

<style scoped>
#container > form > div > div:nth-child(1) > div:nth-child(9) > div > div > textarea {
  min-height: 4.375rem;
  height: 4.375rem;
}
#container {
  margin: 20px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
