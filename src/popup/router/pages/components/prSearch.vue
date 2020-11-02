<template>
  <div>
    <el-form>
      <el-form-item label="PR Desc." label-width="105px">
        <el-input size="mini" v-model="formPR.prDesc"></el-input>
      </el-form-item>
      <el-collapse size="mini" id="advanced">
        <el-collapse-item size="mini" id="advanced" icon="el-icon-search" title="Advanced Search" name="1">
          <el-form>
            <el-form-item size="mini" id="advanced" label="Problem Number">
              <el-input size="mini" v-model="formPR.ticketNumber"></el-input>
            </el-form-item>
            <el-form-item size="mini" id="advanced" label="Summary">
              <el-input size="mini" v-model="formPR.Summary"></el-input>
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
        <el-button size="mini" icon="el-icon-search" type="primary" @click="search(formPR)">Search PR</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPR: {
        prDesc: '',
        Summary: '',
        endUser: '',
        customerName: '',
        ticketNumber: '',
      },
      search(formPR) {
        window.open(
          'https://servicedesk.civica.co.uk/ServiceDesk/wd/Query/List.rails?class_name=ProblemManagement.Problem&query=_ProblemsSearch&page_size=15&page=-1&attributes=_ProcessRef%3AReference%2CTitle%3ASummary%2CStatus.Title%3AStatus%2C_CustomerProc.Title%3ACustomer%2CRaiseUser.Title%3AEnd%20User%2CCreationDate%3ALogged%2CLatestAssignment.User.Title%3AAnalyst%2CLastUpdate%3AUpdated%2CLastUpdateUser.UserType.Title%3AUpdated%20By%2C_ProblemProcess1._ProblemProcess%3AProblem%20Process%2C_ProblemOwner.Title%3AProblem%20Owner%2C_ProblemOwnerGroups._DisplayName%3AProblem%20Owner%20Group%2C_TFSReference%3ADevOps%20Ref%2C_CustomerRef%2C_Service._Service%3AService%2C_CategoryLevel1._DisplayName%3ACat%201%2C_CategoryLevel2._DisplayName%3ACat%202%2C_CategoryLevel3._DisplayName%3ACat%203%2CConfigurationItem.Title%3AItem%2C_Environment._Environment%3AEnvironment%2C_DescriptionTruncated%3ADetails%2C_FixedinVersion%2C_CalcIncCount%3ALinked%20Incidents%2C_ProblemPriority._ProblemPriority%3AProblem%20Priority%2CResponseLevel.Description%3AService%20Level%20Priority&sort_by=CreationDate%20desc&launch_path=.&hide_filters=False&query_changed=False&currentShortcutItem=cb8b9f4a-a055-4450-a81b-98d8edcfc3f7%2Ccb8b9f4a-a055-4450-a81b-98d8edcfc3f7&cns=_CustomerProc._ServiceSystemCol1._ServiceSystem._GroupCol._Group-iwmg_a_%28Id-e-0-_a_Title-e-1-_a_Description-c-2-_a_RaiseUser.Title-c-3-_a_CreationDate-ibd-4-_a_LastUpdate-ibd-5-_a__CustomerProc.Name-c-6-_a__CustomerRef-c-7-_a__Service._Service-c-8-_a__FixedinVersion-c-9-_a__ProblemOwner.Title-c-10-_a__ProblemOwnerGroups.Title-c-11-_a__TFSReference-c-12-_a_Status-e-13-%29' +
            '&c0=' +
            formPR.ticketNumber +
            '&c1=' +
            formPR.Summary +
            '&c2=' +
            formPR.prDesc +
            '&c3=' +
            formPR.endUser +
            '&c6=' +
            formPR.customerName +
            '&cd7=Customer%20Reference&cd8=Service&cd10=Problem%20Owner&cd11=Problem%20Owner%20Group&cd12=DevOps%20Reference'
        );
      },
    };
  },
};
</script>

<style scoped></style>
