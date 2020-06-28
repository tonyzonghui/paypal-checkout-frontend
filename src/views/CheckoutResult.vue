<template>
  <el-container id="checkout-result-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 v-if="success">Congratulations</h2>
        <h2 v-if="error">Ooops</h2>
      </div>
      <div class="box-body">
        <div v-if="success">
          {{ payerName }}, your payment has been completed successfully.
        </div>
        <div v-if="error">
          Your payment has failed. Please try again.
        </div>

        <div id="home-link">
          <el-button type="primary" @click="gotoHome">Home</el-button>
        </div>
      </div>
    </el-card>
  </el-container>
</template>

<script>
export default {
  name: 'CheckoutResult',
  data () {
    return {
      lastName: '',
      firstName: '',
      success: false,
      error: false
    }
  },
  computed: {
    payerName () {
      return this.lastName + ' ' + this.firstName
    }
  },
  created () {
    this.success = this.$store.state.checkoutComplete
    this.error = this.$store.state.checkoutError
    if (this.success && this.$store.state.payerInfo) {
      this.lastName = this.$store.state.payerInfo.last_name
      this.firstName = this.$store.state.payerInfo.first_name
    }
  },
  methods: {
    gotoHome () {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
#checkout-result-page {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  text-align: left;
}

.box-card {
  width: 100%;
  max-width: 700px;
}

#home-link {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
