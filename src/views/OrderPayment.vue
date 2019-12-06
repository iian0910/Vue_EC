<template>
  <div class="orderPayment">
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>

    <div class="container mb-4">
      <!-- Start Navbar -->
      <Header />
      <!-- End Navbar -->

      <!-- Start Content -->

      <!-- End Content -->
    </div>
    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->
  </div>
</template>

<script>
import { Circle4 } from 'vue-loading-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'orderPayment',
  components: {
    Header,
    Footer,
    Circle4
  },
  data () {
    return {
      carts: [],
      final_total: '',
      total: '',
      isLoading: false
    }
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        if (response.data.success) {
          console.log('response.data', response.data)
          vm.carts = response.data.data.carts
          vm.final_total = response.data.data.final_total
          vm.total = response.data.data.total
          vm.isLoading = false
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.orderPayment {
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
}
.table th,
.table td {
  vertical-align: middle;
}
</style>
