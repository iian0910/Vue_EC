<template>
  <div>
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->

    <!-- Start Content -->
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="row">
                    <div class="col-md-4 mb-2 mb-md-4">
                        <div class="step active">資料填寫</div>
                    </div>
                    <div class="col-md-4 mb-2 mb-md-4">
                        <div class="step">確認訂單</div>
                    </div>
                    <div class="col-md-4 mb-2 mb-md-4">
                        <div class="step">完成</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="row mb-4">
                    <div class="col-12">
                        <div id="accordion">
                            <div class="card">
                                <button class="card-header btn btn-link d-flex justify-content-between" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <h5 class="mb-0">購物車清單</h5><div class="totalPrice">{{totalPrice|currency}}</div>
                                </button>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body p-0">
                                        <table class="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th width="20%"></th>
                                                    <th class="text-left">產品名稱</th>
                                                    <th class="text-center">單位</th>
                                                    <th class="text-right">價格</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in carts" :key="item.id">
                                                    <td><img :src="`${item.product.imageUrl}`" :alt="`${item.product.title}`" class="img img-fluid cartImg"></td>
                                                    <td class="text-left">{{item.product.title}}</td>
                                                    <td class="text-center">{{item.qty}}/{{item.product.unit}}</td>
                                                    <td class="text-right">{{item.product.price|currency}}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="輸入優惠代碼" aria-label="輸入優惠代碼" aria-describedby="basic-addon2">
                                                            <div class="input-group-append">
                                                                <button class="btn btn-outline-secondary" type="button">Button</button>
                                                            </div>
                                                            </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3" class="text-right">合計：</td>
                                                    <td class="text-right">{{totalPrice|currency}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
  </div>
</template>

<script>
import { Circle4 } from 'vue-loading-spinner'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'checkuot',
  data () {
    return {
      carts: [],
      isLoading: false,
      totalPrice: 0
    }
  },
  components: {
    Circle4,
    Header,
    Footer
  },
  methods: {
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.isLoading = true
      vm.axios.get(api).then((response) => {
        vm.isLoading = false
        console.log(response.data.data.carts)
        vm.carts = response.data.data.carts
        vm.addPrice()
      })
    },
    addPrice () {
      const vm = this
      const priceLen = vm.carts.length
      for (let i = 0; i < priceLen; i++) {
        vm.totalPrice += Math.floor(vm.carts[i].product.price)
      }
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

.step{
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: $primary;
    border: 1px solid $primary;
    border-radius: 20px;
    &.active{
        background-color: $primary;
        color: white
    }
}
#accordion{
    width: 100%;
    .btn-link,
    .btn-link:hover{
        text-decoration: none;
    }
    .totalPrice{
        font-weight: bold;
    }
}
</style>
