# Paypal-checkout-frontend

## Development Instruction

**Project setup**

```
yarn install
```

**Compiles and hot-reloads for development**

```
yarn serve
```

**Compiles and minifies for production**

```
yarn build
```

**Lints and fixes files**

```
yarn lint
```

**Folder structure**

```
- src
    - assets: static files like images, audios, etc.
    - components: reusable components
    - router: navigation routers
    - store: vuex store states
    - views: web pages
    - plugins: plugin libraries
```

### Demo App Flow

There are 2 pages for the demo app:

- Shopping cart page
  In the shopping cart page user can see product price and change purchase quantity. Click Paypal Checkout button to start the checkout process.

- Checkout result page
  After checkout process completes, user will be redirected to the result page to see the checkout result.

### Heroku Demo Url

https://paypal-checkout-frontend.herokuapp.com/
