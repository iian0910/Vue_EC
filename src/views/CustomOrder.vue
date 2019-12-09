<template>
  <div class="order">
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
          <div class="row my-4">
            <div class="col-md-4">
              <div class="step active">輸入資料</div>
            </div>
            <div class="col-md-4">
              <div class="step">金流付款</div>
            </div>
            <div class="col-md-4">
              <div class="step">結帳完成</div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <div id="accordion">
                <div class="card border-0">
                  <div
                    class="card-header d-flex justify-content-between align-items-center"
                    id="checkListBar"
                    data-toggle="collapse"
                    data-target="#checkList"
                  >
                    <h5 class="mb-0 checkListTitle">顯示購物車細節</h5>
                    <p class="listPrice m-0">{{final_total|currency}}</p>
                  </div>
                  <div
                    id="checkList"
                    class="collapse"
                    aria-labelledby="checkListBar"
                    data-parent="#accordion"
                  >
                    <div class="card-body p-0">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th class="text-left">產品名稱</th>
                            <th class="text-center">數量</th>
                            <th class="text-center">小計</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in carts" :key="item.id">
                            <td class="text-center align-items-center">
                              <button class="btn btn-outline-danger" @click="removeCart(item.id)">
                                <i class="fas fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <img :src="`${item.product.imageUrl}`" width="100" alt srcset />
                            </td>
                            <td class="text-left">
                              {{item.product.title}}
                              <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                            </td>
                            <td class="text-center">{{item.qty}}/{{item.product.unit}}</td>
                            <td class="text-right">{{item.total|currency}}</td>
                          </tr>
                          <tr class="checkListPrice">
                            <td class="text-right" colspan="4">小計</td>
                            <td class="text-right">{{total|currency}}</td>
                          </tr>
                          <tr v-if="final_total !== total" class="checkListPrice text-success">
                            <td class="text-right" colspan="4">網路優惠價</td>
                            <td class="text-right">{{final_total|currency}}</td>
                          </tr>
                          <tr>
                            <td colspan="5">
                              <div class="input-group mb-3">
                                <input
                                  type="text"
                                  v-model="coupon_code"
                                  class="form-control"
                                  placeholder="Coupon Code"
                                  aria-label="Coupon Code"
                                  aria-describedby="basic-addon2"
                                />
                                <div class="input-group-append">
                                  <button
                                    class="btn btn-outline-secondary"
                                    type="button"
                                    @click.prevent="addCouponCode"
                                  >輸入優惠券</button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <h3 class="py-3 bg-secondary text-white text-center orderTitle">訂購人資訊</h3>
              <form @submit.prevent="createOrder">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">訂購人姓名</label>
                      <input
                        v-model="form.user.name"
                        id="name"
                        class="form-control"
                        :class="{'is-invalid':errors.has('name')}"
                        type="text"
                        placeholder="請輸入姓名"
                        name="name"
                        v-validate="'required'"
                      />
                      <span class="text-danger" v-if="errors.has('name')">名字必須輸入</span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="email">電子信箱</label>
                      <input
                        v-model="form.user.email"
                        type="email"
                        class="form-control"
                        :class="{'is-invalid':errors.has('email')}"
                        id="email"
                        placeholder="請輸入EMAIL"
                        name="email"
                        v-validate="'required|email'"
                      />
                      <span class="text-danger" v-if="errors.has('email')">
                        {{ errors.first('email') }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="tel">訂購人電話</label>
                      <input
                        v-model="form.user.tel"
                        type="tel"
                        class="form-control"
                        :class="{'is-invalid':errors.has('tel')}"
                        id="tel"
                        placeholder="請輸入電話"
                        name="tel"
                        v-validate="'required'"
                      />
                    </div>
                    <span class="text-danger" v-if="errors.has('tel')">訂購人電話必須輸入</span>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="address">聯絡地址</label>
                      <input
                        v-model="form.user.address"
                        type="text"
                        class="form-control"
                        :class="{'is-invalid':errors.has('address')}"
                        id="address"
                        placeholder="請輸入地址"
                        name="address"
                        v-validate="'required'"
                      />
                    </div>
                    <span class="text-danger" v-if="errors.has('address')">訂購人地址必須輸入</span>
                  </div>
                </div>
                <div class="form-group mb-4">
                  <label for="message">留言</label>
                  <textarea v-model="form.message" class="form-control" id="message" rows="5"></textarea>
                </div>
                <div class="text-center">
                  <router-link to="/WMall" class="btn btn-primary mr-3">繼續購物</router-link>
                  <button class="btn btn-primary">送出訂單</button>
                </div>
              </form>
            </div>
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
  name: 'checkList',
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
      coupon_code: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
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
    },
    removeCart (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      vm.isLoading = true
      this.$http.delete(api).then(response => {
        if (response.data.success) {
          console.log('response.data', response.data)
          vm.getCart()
        }
      })
    },
    addCouponCode () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const coupon = {
        code: vm.coupon_code
      }
      vm.isLoading = true
      this.$http.post(api, { data: coupon }).then(response => {
        if (response.data.success) {
          console.log(response)
          vm.isLoading = false
          vm.getCart()
        }
      })
    },
    createOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const order = vm.form
      vm.isLoading = true
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(api, { data: order }).then(response => {
            console.log('訂單已建立', response)
            if (response.data.success) {
              vm.$router.push(`/orderPayment/${response.data.orderId}`)
            }
          })
        } else {
          console.log('欄位不完正')
        }
      })
      vm.isLoading = false
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.order {
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
.card-header {
  padding: 20px;
  cursor: pointer;
  .checkListTitle {
    font-size: 18px;
    color: #20c997;
    font-weight: 600;
  }
  .listPrice {
    font-size: 26px;
    line-height: 26px;
    font-weight: bold;
  }
}
.checkListPrice {
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
}
.orderTitle {
  font-size: 22px;
  line-height: 22px;
}
textarea {
  resize: none;
}
</style>
