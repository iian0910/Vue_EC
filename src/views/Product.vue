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
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="button"><i class="fas fa-cart-arrow-down mr-2"></i>加入購物車</button>
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
    <i class="fas fa-shopping-cart text-yellow cartIcon"></i>
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
      isLoading: false
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
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
.product{
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
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
</style>
