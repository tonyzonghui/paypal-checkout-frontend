<template>
  <div class="shopping-cart-page">
    <ShoppingItem :product="product" />
  </div>
</template>

<script>
import ShoppingItem from '@/components/ShoppingItem'
export default {
  name: 'Shopping Cart',
  data () {
    return {
      message: 'This is an about page',
      product: {
        image:
          'https://images.philips.com/is/image/PhilipsConsumer/TAKH402PK_00-IMS-en_SG?wid=840&hei=720&$jpglarge$',
        name: 'BeoPlay H4 Wireless Headphones',
        category: 'Bang & Olufsen',
        price: 199.0,
        description: `<ul>
        <li>Lightweight design makes it ideal for listening while during exercise, travel or for everyday wear</li>
        <li>Hard chrome earphone finishes for rugged durability and everlasting shine</li>
        <li>Precision machined single billet metal housing prevents vibrations</li>
        </ul>`
      }
    }
  },
  methods: {
    reverseMessage () {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
      console.log(this.message)
    }
  },
  components: {
    ShoppingItem
  }
}
</script>
