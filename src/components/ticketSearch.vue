<template>
  <div>
    <h1>Ticket Search</h1>
    <el-form :model="formTicket">
      <el-form-item label="Ticket Number">
        <el-input v-model="formTicket.ticketNumber"></el-input>
      </el-form-item>
      <el-collapse>
        <el-collapse-item title="Advanced Search" name="1">
          <el-form>
            <el-form-item label="Summary">
              <el-input v-model="formTicket.Summary"></el-input>
            </el-form-item>
            <el-form-item label="Details">
              <el-input v-model="formTicket.Details"></el-input>
            </el-form-item>
            <el-form-item label="End User">
              <el-input v-model="formTicket.endUser"></el-input>
            </el-form-item>
            <el-form-item label="Customer Name">
              <el-input v-model="formTicket.customerName"></el-input>
            </el-form-item>
            <el-form-item label="Summary">
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                align="right"
              >
              </el-date-picker>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
      <el-form-item>
        <el-button type="primary" @click="submitForm('open')"
          >Search Open</el-button
        >
        <el-button type="primary" @click="submitForm('closed')"
          >Search Closed</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formTicket: {
        ticketNumber: '',
        prDesc: '',
        Summary: '',
        Details: '',
        endUser: '',
        date1: '',
        date2: '',
        customerName: ''
      },
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: 'Last month',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: 'Last 3 months',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
    }
  }
}
</script>

<style scoped></style>
