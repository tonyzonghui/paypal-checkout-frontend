module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    proxy: "https://paypal-checkout-backend.herokuapp.com"
  }
};
