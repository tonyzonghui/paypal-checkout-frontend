<template>
  <div class="shopping-item">
    <el-card class="box-card">
      <div slog="header" class="clearfix">
        <h2>Shopping Cart</h2>
      </div>
      <hr />
      <div class="box-body">
        <el-row :gutter="12" class="product-row">
          <el-col :span="10" class="image-container">
            <img :src="product.image" class="product-image" />
          </el-col>
          <el-col :span="14" class="product-desc">
            <h2>{{ product.name }}</h2>
            <div class="product-category">{{ product.category }}</div>
            <div class="product-description">
              <span v-html="product.description"></span>
            </div>
            <el-row id="price-quantity">
              <el-col :span="12" class="price-container">
                <div>Price</div>
                <div>
                  USD
                  <span class="price-value">
                    {{
                    priceString(product.price)
                    }}
                  </span>
                </div>
              </el-col>
              <el-col :span="12" class="quantity-container">
                <div>Quantity</div>
                <el-input-number size="mini" v-model="quantity" :min="1" :max="10"></el-input-number>
              </el-col>
            </el-row>
            <el-row id="paypal-button"></el-row>
            <div class="paypal-button-container">
              <Paypal v-bind:amount="payAmount" />
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import Paypal from '@/components/Paypal'
export default {
  name: 'ShoppingItem',
  props: {
    product: Object
  },
  components: {
    Paypal
  },
  data () {
    return {
      quantity: 1
    }
  },
  computed: {
    payAmount () {
      return this.product.price * this.quantity
    }
  },
  methods: {
    priceString (price) {
      const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      return formatter.format(price)
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
}

.shopping-item {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  text-align: left;
}

.box-card {
  width: 100%;
  max-width: 700px;
}

.product-row {
  display: flex;
  flex-direction: row;
}

.product-image {
  max-width: 200px;
  height: auto;
  object-fit: cover;
  flex: 1;
}

.product-category {
  font-size: 12px;
}

.product-description {
  font-size: 12px;
}

.price-value {
  font-weight: bold;
}

.product-desc {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.paypal-button-container {
  padding: 20px 0 0 0;
}
</style>
