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
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="row my-5">
            <div class="col-md-4">
              <div class="step">輸入資料</div>
            </div>
            <div class="col-md-4">
              <div class="step">金流付款</div>
            </div>
            <div class="col-md-4">
              <div class="step active">結帳完成</div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-8 offset-2">
              <table class="table table-hover mb-4">
                <thead>
                  <tr>
                    <th class="text-left">產品名稱</th>
                    <th class="text-center">數量</th>
                    <th class="text-center">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="text-left">{{item.product.title}}</td>
                    <td class="text-center">{{item.qty}}/{{item.product.unit}}</td>
                    <td class="text-right">{{item.total|currency}}</td>
                  </tr>
                </tbody>
              </table>
              <table class="table">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.is_paid">尚未付款</span>
                      <span v-else class="text-success">付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="text-center">
            <router-link to="/WMall" class="btn btn-primary">回購物商城</router-link>
          </div>
        </div>
      </div>
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
      orderId: '',
      isLoading: false,
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        if (response.data.success) {
          console.log(response)
          vm.order = response.data.order
          vm.isLoading = false
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
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
.step {
  text-align: center;
  font-size: 18px;
  line-height: 40px;
  border-radius: 40px;
  border: 1px solid #20c997;
  color: #20c997;
  &.active {
    background-color: #20c997;
    color: white;
  }
}
</style>
