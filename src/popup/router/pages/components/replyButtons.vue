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
    let data = JSON.parse(localStorage.getItem('reply'));
    return {
      products: data,
    };
  },

  methods: {
    copier: function(title, text, index) {
      let foo = JSON.parse(localStorage.getItem('reply'));
      let bar = JSON.parse(localStorage.getItem('Enumerator'));
      let ar;
      let loo;
      if (!bar) {
        localStorage.setItem('Enumerator', '[{"title":"filler","words":"filler"}]');
      } else {
        for (let i = 0; i <= bar.length - 1; i++) {
          let boo = bar[i].words.split(',');
          let yoo = boo[Math.floor(Math.random() * boo.length)];
          console.log('replacing [' + bar[i].title + '] with ' + yoo);
          if (typeof ar === 'undefined') {
            loo = foo[index].text.replace('[' + bar[i].title + ']', yoo);
          } else {
            loo = ar.replace('[' + bar[i].title + ']', yoo);
          }
          ar = loo;

          let notObject = localStorage.getItem('7566887b-6c8e-4f43-a469-59f0a26162a6');
          let objectToUse = JSON.parse(notObject);

          let analystName = objectToUse.analystName;
          let fullCustname = objectToUse.fullCustname;
          let customerName = objectToUse.customerName;
          let ticket = objectToUse.ticket;
          let timeToReturn = objectToUse.timeToReturn;
          let res = ar
            .replace(/<name>/g, analystName)
            .replace(/<customer>/g, fullCustname)
            .replace(/<customerFirstName>/g, customerName)
            .replace(/<ticket>/g, ticket)
            .replace(/<time>/g, timeToReturn);
          console.log(res);
          let dummy = document.createElement('textarea');
          document.body.appendChild(dummy);
          dummy.value = res;
          dummy.select();
          document.execCommand('copy');
          document.body.removeChild(dummy);
        }
      }

      this.$notify({
        showClose: true,
        message: title + ' sent to clipboard.',
        type: 'success',
      });
    },
  },
};
</script>
