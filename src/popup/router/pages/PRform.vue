<template>
  <div id="container">
    <h1>PR Ticket Form</h1>

    <el-form :model="prForm" ref="form">
      <el-row :gutter="20">
        <el-col :span="8">
          <h2>General Information</h2>
          <el-form-item
            size="mini"
            id="formItem"
            prop="customerOrganisationName"
            label="Customer URL"
            :rules="[{ required: true, message: 'Please input a Customer URL', trigger: 'blur' }]"
          >
            <el-input v-model="prForm.customerOrganisationName"></el-input>
          </el-form-item>

          <el-form-item size="mini" id="formItem" prop="analystName" label="Customer login profile (if not the Civica user)">
            <!--v-model="prForm.analystName" -->
            <el-input
              placeholder="User login details if the incident is specific to a user/login. Borrower details – ID/password where applicable on customers TEST/LIVE system if only replicated onsite. If not supply the QA borrower (ID/password) used to repeat the bug"
              v-model="prForm.analystName"
              type="textarea"
            ></el-input>
          </el-form-item>
          <!--    <el-form-item size="mini" prop="date" label="Replication Date" :rules="[{ required: true, message: 'Please input a Replication Date', trigger: 'blur' }]">
            <el-date-picker type="date" placeholder="Pick a date" v-model="prForm.date" style="width: 100%;"></el-date-picker>
          </el-form-item> -->
          <el-form-item size="mini" label="Number of Impacted Users" prop="impactedUsers">
            <el-radio-group v-model="prForm.impactedUsers" size="mini" style="width: 100%;">
              <el-radio border label="One"></el-radio>
              <el-radio border label="Multiple"></el-radio>
              <el-radio border label="All"></el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- <el-form-item size="mini" prop="link" label="Link" :rules="[{ required: true, message: 'Please input a Link', trigger: 'blur' }]">
            <el-input v-model="prForm.link"></el-input>
          </el-form-item> -->

          <el-form-item
            size="mini"
            label="Environment"
            prop="enviroment"
            :rules="[{ required: true, message: 'Customer product and version information must be added to Defective Version field on CSD problem ticket', trigger: 'blur' }]"
          >
            <el-radio-group v-model="prForm.enviroment" size="mini" style="width: 100%;">
              <el-radio border label="Live"></el-radio>
              <el-radio border label="Test"></el-radio>
              <el-radio border label="Other"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item size="mini" prop="otherEnviroment" label="Other Enviroment" v-if="prForm.enviroment === 'Other'">
            <el-input v-model="prForm.otherEnviroment"></el-input>
          </el-form-item>

          <h2>QA Information</h2>
          <!-- Version and Site Information -->

          <!--
          <el-form-item size="mini" label="Product Version">
            <el-select v-model="prForm.productVersion" placeholder="please select the Product Version" style="width: 100%;">
              <el-option label="Spydus WBA (W10.x)" value="Spydus WBA (W10.x)"></el-option>
              <el-option label="Spydus Server (10.x)" value="Spydus Server (10.x)"></el-option>
              <el-option label="Spydus Tray (ST1.x)" value="Spydus Tray (ST1.x)"></el-option>
              <el-option label="Spydus Mobile" value="Spydus Mobile"></el-option>
              <el-option label="Spydus Go" value="Spydus Go"></el-option>
              <el-option label="Thick Client (10.x)" value="Thick Client (10.x)"></el-option>
              <el-option label="Circulation Offline" value="Circulation Offline"></el-option>
              <el-option label="EDI" value="EDI"></el-option>
              <el-option label="Desktop Management (DM 2.1.x)" value="Desktop Management (DM 2.1.x)"></el-option>
              <el-option label="NLB Web Services (NLBWS3.x)" value="NLB Web Services (NLBWS3.x)"></el-option>
              <el-option label="Other" value="Other"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item size="mini" prop="version" label="Version">
            <el-input @change="percentagecalc(prform)" v-model="prForm.version"></el-input>
          </el-form-item>
-->
          <!--
          <el-form-item size="mini" label="Module">
            <el-select v-model="prForm.module" placeholder="please select the Module" style="width: 100%;">
              <el-option label="Acquisitions" value="Acquisitions"></el-option>
              <el-option label="Archives" value="Archives"></el-option>
              <el-option label="Cataloguing" value="Cataloguing"></el-option>
              <el-option label="Circulation" value="Circulation"></el-option>
              <el-option label="Enquiry" value="Enquiry"></el-option>
              <el-option label="ERM" value="ERM"></el-option>
              <el-option label="Events" value="Events"></el-option>
              <el-option label="Serials" value="Serials"></el-option>
              <el-option label="Home" value="Home"></el-option>
              <el-option label="Requests" value="Requests"></el-option>
              <el-option label="Reports" value="Reports"></el-option>
              <el-option label="Spydus BI" value="Spydus BI"></el-option>
              <el-option label="Maintenance" value="Maintenance"></el-option>
              <el-option label="Mobile (e.g. SpydusGo, SpydusMobile)" value="Mobile (e.g. SpydusGo, SpydusMobile)"></el-option>
              <el-option label="File Interfaces (e.g. Web Services, API)" value="File Interfaces (e.g. Web Services, API)"></el-option>
              <el-option label="Self Service" value="Self Service"></el-option>
              <el-option label="OPAC/WPAC" value="OPAC/WPAC"></el-option>
              <el-option label="eResources /eVendors" value="eResources /eVendors"></el-option>
              <el-option label="Payment gateway (e.g. Paypal, EPAY)" value="Payment gateway (e.g. Paypal, EPAY)"></el-option>
              <el-option label="Circulation Office" value="Circulation Office"></el-option>
              <el-option label="Other (Please specify below)" value="Other"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item size="mini" prop="otherModule" label="Other Module" v-if="prForm.module === 'Other'">
            <el-input v-model="prForm.otherModule"></el-input>
          </el-form-item>
-->

          <el-form-item size="mini" label="Tested in QA?" prop="qaTested" :rules="[{ required: true, message: 'Please Specify if this was tested in QA', trigger: 'blur' }]">
            <el-radio-group v-model="prForm.qaTested" size="mini" style="width: 100%;">
              <el-radio border label="Yes"></el-radio>
              <el-radio border label="No"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item size="mini" prop="loginUserProfile" label="QA URLs tested in:" :rules="[{ required: true, message: 'Please list the URLs tested', trigger: 'blur' }]">
            <el-input
              placeholder="QA URL/s tested in. Please test in Web App (Production tree) to verify the bug can be replicated as well as Web App (customer installed). The Production tree will be the next available patch."
              v-model="prForm.loginUserProfile"
              type="textarea"
            ></el-input>
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
          <!--
          <el-form-item size="mini" prop="systemInfo" label="System Info" :rules="[{ required: true, message: 'Please input System Info', trigger: 'blur' }]">
            <quill-editor
              style="margin-top:50px;"
              ref="myQuillEditor"
              v-model="prForm.systemInfo"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </el-form-item> -->

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

          <!--       <el-form-item size="mini" prop="actualOutcome" label="Actual Outcome" :rules="[{ required: true, message: 'Please input Actual Outcome', trigger: 'blur' }]">
            <quill-editor
              style="margin-top:50px;"
              ref="myQuillEditor"
              v-model="prForm.actualOutcome"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </el-form-item> -->
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-button style="float: right; padding: 3px 0" type="text" @click="submitForm('form')">Send form to clipboard</el-button>
            </div>

            <div id="formCont">
              <div v-if="prForm.customerOrganisationName !== ''">
                <h3>Customer URL</h3>
                <div>{{ prForm.customerOrganisationName }}</div>
              </div>
              <div v-if="prForm.analystName !== ''">
                <h3>Customer login profile:</h3>
                <div>{{ prForm.analystName }}</div>
              </div>
              <!--              <div v-if="prForm.date !== ''">
                <h3>Replication Date</h3>
                <div>{{ prForm.date }}</div>
              </div> -->
              <div v-if="prForm.productVersion !== ''">
                <h3>Product Version</h3>
                <div>{{ prForm.productVersion }}</div>
              </div>
              <div v-if="prForm.version !== ''">
                <h3>Product Version</h3>
                <div>{{ prForm.version }}</div>
              </div>
              <div v-if="prForm.module !== ''">
                <h3>Module</h3>
                <div>{{ prForm.module }}</div>
              </div>
              <div v-if="prForm.otherModule !== ''">
                <h3>Other Module</h3>
                <div>{{ prForm.otherModule }}</div>
              </div>

              <div v-if="prForm.impactedUsers !== ''">
                <h3>Impacted Users</h3>
                <div>{{ prForm.impactedUsers }}</div>
              </div>
              <div v-if="prForm.link !== ''">
                <h3>Link</h3>
                <div>{{ prForm.link }}</div>
              </div>
              <div v-if="prForm.enviroment !== ''">
                <h3>Environment</h3>
                <div>{{ prForm.enviroment }}</div>
              </div>
              <div v-if="prForm.otherEnviroment !== ''">
                <h3>Other Environment</h3>
                <div>{{ prForm.otherEnviroment }}</div>
              </div>
              <div v-if="prForm.qaTested !== ''">
                <h3>Tested in QA?</h3>
                <div>{{ prForm.qaTested }}</div>
              </div>
              <div v-if="prForm.loginUserProfile !== ''">
                <h3>Login User Profile</h3>
                <div>{{ prForm.loginUserProfile }}</div>
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
