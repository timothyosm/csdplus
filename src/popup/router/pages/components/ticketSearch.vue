<template>
  <div>
    <el-form>
      <el-form-item label="Ticket Number" label-width="110px">
        <el-input size="mini" v-model="formTicket.ticketNumber" ></el-input>
      </el-form-item>
      <el-collapse size="mini" id="advanced">
        <el-collapse-item
          size="mini"
          id="advanced"
          icon="el-icon-search"
          title="Advanced Search"
          name="1"
          style="color:#ADD8E6"
        >
          <el-form>
            <el-form-item size="mini" id="advanced" label="Summary">
              <el-input size="mini" v-model="formTicket.Summary"></el-input>
            </el-form-item>
            <el-form-item size="mini" id="advanced" label="Details">
              <el-input size="mini" v-model="formTicket.Details"></el-input>
            </el-form-item>
            <el-form-item size="mini" id="advanced" label="End User">
              <el-input v-model="formTicket.endUser"></el-input>
            </el-form-item>
            <el-form-item size="mini"  id="advanced" label="Customer Name">
              <el-input v-model="formTicket.customerName"></el-input>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
      <el-form-item>
        <el-button
          size="mini"
          icon="el-icon-search"
          type="primary"
          @click="search(formTicket,'_ActiveAllModuleSearch')"
        >Search Open</el-button>
        <el-button
          size="mini"
          icon="el-icon-search"
          type="primary"
          @click="search(formTicket,'_CompletedAllModuleSearch')"
        >Search Closed</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formTicket: {
        ticketNumber: '',
        Summary: '',
        Details: '',
        endUser: '',
        customerName: '',
      },
      search(formTicket, type) {
        window.open(
          'https://servicedesk.civica.co.uk/ServiceDesk/wd/Query/List.rails?class_name=Process.Process&query=' +
            type +
            '&page_size=30&attributes=Colour%3ASLA%2C_ProcessRef%3ARef%2C_CustomerProc.Name%2CRaiseUser.Title%3ARaised%20User%2CTitle%3ASummary%2CStatus.Title%3ACurrent%20Status%2CCreationDate%2C_NewCalcPriority%3APriority%2CCurrentAssignment.Group._DisplayName%3ACurrent%20Assigned%20Group%2CCurrentAssignment.User.Title%3ACurrent%20Assigned%20Analyst%2CLastUpdateUser.Title%3ALast%20Updated%20By%2CLastUpdateUser.UserType.Name%3ALast%20Updated%20User%20Type%2CLastUpdate%3ALast%20Updated%2C_CustomerRef&sort_by=CreationDate%20desc&launch_path=.&hide_filters=False&query_changed=False&currentShortcutItem=cb8b9f4a-a055-4450-a81b-98d8edcfc3f7%2Ccb8b9f4a-a055-4450-a81b-98d8edcfc3f7&cns=_CustomerProc._ServiceSystemCol1._ServiceSystem._GroupCol._Group-iwmg_a_Status.IsEnd-e-0_a_Status.IsCompletion-e-1_a_%28_ProcessRef-c-2-_a_Title-c-3-_a_Description-c-4-_a_RaiseUser.Title-c-5-_a_CreationDate-ibd-6-_a_LastUpdate-ibd-7-_a_LastUpdateUser.Title-c-8-_a__CategoryLevel1-e-9-_a__CategoryLevel2._DisplayName-c-10-_a__CategoryLevel3._DisplayName-c-11-_a_CurrentAssignment.Group._DisplayName-c-12-_a__CustomerRef-c-13-_a__CustomerProc.Name-c-14-%29&c0=False&c1=False&cd2=Reference&c2=' +
            formTicket.ticketNumber +
            '&cd3=Summary&c3=' +
            formTicket.Summary +
            '&cd4=Details&c4=' +
            formTicket.Details +
            '&cd5=End%20User&c5=' +
            formTicket.endUser +
            '&cd8=Last%20Updated%20By&cd10=Category%202&cd11=Category%203&cd12=Current%20Assigned%20Group&cd14=Customer%20Name&c14=' +
            formTicket.customerName
        );
      },
    };
  },
};
</script>

<style scoped>
</style>
