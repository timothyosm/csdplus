<template>
  <div>
    <div id="buttons" v-for="(product, index) in products" v-bind:key="product">
      <el-popover placement="top-start" width="200" trigger="hover" v-bind:content="product.text">
        <el-button
          id="mainButton"
          type="success"
          plain
          v-on:click="copier(product.title, product.text, index)"
          class="price"
          slot="reference"
        >{{ product.title }}</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var data = JSON.parse(localStorage.getItem('reply'));
    return {
      products: data,
    };
  },

  methods: {
    copier: function(title, text, index) {
      var payload = localStorage.getItem('payload');
      var objectToUse = JSON.parse(payload);

      var analystName = objectToUse.analystName;
      var fullCustname = objectToUse.fullCustname;
      var customerName = objectToUse.customerName;
      var ticket = objectToUse.ticket;
      var timeToReturn = objectToUse.timeToReturn;
      var res = text
        .replace(/<name>/g, analystName)
        .replace(/<customer>/g, fullCustname)
        .replace(/<customerFirstName>/g, customerName)
        .replace(/<ticket>/g, ticket)
        .replace(/<time>/g, timeToReturn);
      console.log(res);

      var dummy = document.createElement('textarea');
      document.body.appendChild(dummy);
      dummy.value = res;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);

      this.$notify({
        showClose: true,
        message: title + ' sent to clipboard.',
        type: 'success',
      });
    },
  },
};
</script>
