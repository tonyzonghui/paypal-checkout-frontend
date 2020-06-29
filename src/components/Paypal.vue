<template>
  <div>
    <div
      id="paypal-button-container"
      v-loading.fullscreen.lock="processing"
    ></div>
  </div>
</template>

<script>
export default {
  name: "paypal",
  props: {
    amount: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: "USD",
    },
  },
  data() {
    return { success: false, error: false, processing: false };
  },
  mounted() {
    const createOrder = (data, actions) => {
      console.log("create order");
      const paymentData = {
        amount: this.amount,
        currency: this.currency,
      };

      return this.createPaypalOrder({ data: paymentData })
        .then((order) => {
          return order.data.orderID;
        })
        .catch((error) => {
          console.log("create order error: ", error);
          this.error = true;
        });
    };

    const onApprove = (data) => {
      const orderID = data.orderID;
      this.processing = true;
      return this.captureOrder(orderID)
        .then((payerInfo) => {
          console.log("order payment: ", payerInfo);
          this.checkoutComplete(true, payerInfo.data);
        })
        .catch((error) => {
          console.log("order capture failed: ", error);
          this.checkoutComplete(false, null);
        })
        .finally(() => {
          this.processing = false;
        });
    };

    paypal
      .Buttons({
        env: "sandbox",
        style: {
          locale: "en-US",
          layout: "horizontal",
          size: "responsive",
          color: "gold",
          shape: "rect",
          label: "checkout",
          tagline: "false",
          fundingSource: paypal.FUNDING.PAYPAL,
        },
        createOrder,
        onApprove,
      })
      .render("#paypal-button-container");
  },
  methods: {
    async createPaypalOrder(data) {
      const order = await axios.post("/create-payment", data);
      return order;
    },

    async captureOrder(orderID) {
      const orderPayment = await axios.post("/checkout-paypal", { orderID });
      return orderPayment;
    },

    checkoutComplete(success, payerInfo) {
      if (success) {
        this.success = true;
        this.$store.commit("setCheckoutResult", {
          isComplete: true,
          hasError: false,
          payerInfo: payerInfo,
        });

        // go to checkout result page
        this.$router.push({ name: "CheckoutResult" });
      } else {
        this.error = true;
        this.$store.commit("setCheckoutResult", {
          isComplete: false,
          hasError: true,
          payerInfo: {},
        });
        this.$router.push("CheckoutResult");
      }
    },
  },
};
</script>

<style scoped>
#paypal-button-container {
  height: 50px;
}
</style>
