<template>
  <div class="product">
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>

    <div class="container mb-4">
      <!-- Start Navbar -->
      <Header/>
      <!-- End Navbar -->

      <!-- Start Jumbotron -->
      <div class="jumbotron">Jumbotron</div>
      <!-- End Jumbotron -->

      <!-- Start Content -->
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 mb-4 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/WMall">首頁</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h3 class="mb-4">{{product.title}}</h3>
          <div class="price d-flex justify-content-between align-items-center mb-4">
            <div class="origin_price text-secondary">售價 {{product.origin_price|currency}}</div>
            <div class="price text-danger">網路價 NT<span>{{product.price|currency}}</span></div>
          </div>
          <div class="input-group">
            <select class="form-control" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="button" @click.prevent="addToCart(product.id, product.num)"><i class="fas fa-cart-arrow-down mr-2"></i>加入購物車</button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <img :src="`${product.imageUrl}`" class="img img-fluid mb-4 productImg" alt="" srcset="">
          <div class="jumbotron content m-0">
            <h1 class="text-center mb-4">購物說明</h1>
            {{product.content}}
          </div>
        </div>
      </div>
      <!-- End Content -->

    </div>
    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
    <!-- Start Cart -->
    <div class="cartIcom">
      <i class="fas fa-shopping-cart text-yellow cartIcon" data-toggle="collapse" href="#checkList" role="button">
        <span class="badge numBadge bg-yellow text-white d-block">{{cartLen}}</span>
        <div class="collapse checkList" id="checkList">
          <div class="card card-body">
            <p class="mb-3">已選購商品</p>
            <table class="table table-hover cartList">
              <tbody>
                <tr v-for="item in carts" :key="item.id">
                  <td width="50">
                    <i class="fas fa-trash-alt" @click="removeCart(item.id)"></i>
                  </td>
                  <td>{{item.product.title}}</td>
                  <td width="50">{{item.qty}}/{{item.product.unit}}</td>
                  <td width="50">{{item.total}}</td>
                </tr>
              </tbody>
            </table>
            <router-link to="/customOrder" class="btn btn-primary text-center text-white">
              結帳去
            </router-link>
          </div>
        </div>
      </i>
    </div>
    <!-- End Cart -->
  </div>
</template>

<script>
import { Circle4 } from 'vue-loading-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Product',
  components: {
    Header,
    Footer,
    Circle4
  },
  data () {
    return {
      product: {},
      carts: [],
      isLoading: false,
      cartLen: '0'
    }
  },
  methods: {
    getProduct () {
      const vm = this
      const producID = vm.$route.params.id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${producID}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        console.log(response.data)
        vm.product = response.data.product
        vm.product.num = 1
        vm.isLoading = false
      })
    },
    addToCart (id, qty = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const cart = {
        product_id: id,
        qty: qty
      }
      vm.isLoading = true
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response)
        vm.isLoading = false
        vm.getCart()
      })
    },
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$http.get(api).then(response => {
        if (response.data.success) {
          console.log('length', response.data.data.carts.length)
          console.log('response', response.data.data)
          vm.cartLen = response.data.data.carts.length
          vm.carts = response.data.data.carts
        }
      })
    },
    removeCart (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      vm.isLoading = true
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          console.log('response.data', response.data)
          vm.getProducts()
          vm.getCart()
        }
      })
    }
  },
  created () {
    this.getProduct()
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.product{
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
}
.table th, .table td {
  vertical-align: middle;
}
.origin_price{
  text-decoration: line-through;
  font-size: 16px;
  line-height: 16px;
}
.price{
  font-size: 26px;
  line-height: 26px;
  font-weight: bold;
  span{
    font-size: 32px;
  }
}
.productImg{
  margin: 0 auto;
  display: block;
}
.content{
  font-size: 18px;
  line-height: 32px;
}
.cartIcon{
  padding: 1rem;
  border-radius: 50%;
  position: fixed;
  right: 10px;
  bottom: 10%;
  border: 1px solid #ffbd00;
  font-size: 20px;
  background-color: white;
}
.numBadge{
  // padding: 7px 5px;
  border-radius: 50%;
  font-size: 15px;
  line-height: 12px;
  transform: translate(58%, 50%);
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.checkList{
  position: absolute;
  right: 0;
  bottom: 60px;
  min-width: 300px;
  i{
    color: rgba(0,0,0,.25);
    cursor: pointer;
  }
}
.cartList{
  font-size: 14px;
  line-height: 21px;
}
</style>
