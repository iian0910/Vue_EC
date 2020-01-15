<template>
  <div class="mainContent">
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->

    <!-- Start Content -->
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-2 p-0 bg-transparent">
          <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products">相關產品</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-4">col-md-4</div>
        <div class="col-md-8">col-md-8</div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'product',
  data () {
    return {
      pageName: '系列產品',
      product: {}
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    getProduct () {
      const vm = this
      const producID = vm.$route.params.id
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${producID}`
      this.$http.get(api).then(response => {
        vm.product = response.data.product
        // 數量預設值為1
        vm.product.num = 1
      })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

.mainContent{
  height: 100vh;
}
</style>
