<template>
  <div class="wmall">
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
        <div class="col-md-2">
          <div class="row">
            <div class="col-md-12">
              <div class="card border-primary">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    :class="{'active': selected === `${ item }`}"
                    v-for="item in filterCategory"
                    :key="item.id"
                    :data-category="`${ item }`"
                    @click="selectedItem"
                  >{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-4 mb-4" v-for="item in filterProducts" :key="item.id" :items-per-page="9">
              <div class="card border-primary rounded-sm shadow-sm">
                <div style="height: 150px; background-size: cover; background-position: center;" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                <div class="card-body">
                  <span class="badge badge-primary float-right ml-2">{{item.category}}</span>
                  <h5 class="card-title">
                    <a href="#" class="text-dark product_title">{{item.title | titleFilter}}</a>
                  </h5>
                  <p class="card-text text-secondary">{{item.discription | textShow}}</p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <!-- <div class="h5">{{item.origin_price | currency}} 元</div> -->
                    <del class="h6 text-secondary">{{item.origin_price | currency}} 元</del>
                    <div class="h5">特價<span class="price text-danger">{{item.price | currency}}</span>元</div>
                  </div>
                </div>
                <div class="card-footer d-flex bg-white">
                  <button type="button" class="btn btn-yellow btn-sm" @click="getProduct(item.id)">
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id" ></i>
                    查看更多
                  </button>
                  <button type="button" class="btn btn-yellow btn-sm ml-auto" @click="addToCart(item.id, item.qty)">
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- pagination start -->
          <div class="d-flex justify-content-center">
            <Pagination :pages="pagination" @emitPages="getProducts"></Pagination>
          </div>
          <!-- pagination end -->
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
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import $ from 'jquery'

export default {
  name: 'WMall',
  components: {
    Pagination,
    Header,
    Footer,
    Circle4
  },
  data () {
    return {
      products: [],
      product: {},
      carts: [],
      category: [
        '全部'
      ],
      selected: '全部',
      datasetItem: '',
      pagination: {},
      status: {
        loadingItem: ''
      },
      cartLen: '0'
    }
  },
  computed: {
    // 使用 filter() 過濾重複值
    filterCategory (e) {
      const vm = this
      return vm.category.filter((element, index, arr) => {
        return arr.indexOf(element) === index
      })
    },
    // 使用 forEach() 篩選我要的資料
    filterProducts () {
      const vm = this
      let newProducts = []
      if (vm.selected === '全部') {
        return vm.products
      }
      vm.products.forEach((item) => {
        if (vm.selected === item.category) {
          newProducts.push(item)
        }
      })
      return newProducts
    }
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        console.log(response)
        vm.products = response.data.products
        vm.isLoading = false
        vm.pagination = response.data.pagination
        for (let i = 0; i < vm.products.length; i++) {
          vm.category.push(response.data.products[i].category)
        }
      })
    },
    selectedItem (e) {
      const vm = this
      const dataitem = e.target.dataset.category
      const item = e.target.textContent
      console.log('item', item)
      vm.datasetItem = dataitem
      vm.selected = item
    },
    getProduct (id) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      vm.status.loadingItem = id
      this.$http.get(api).then(response => {
        if (response.data.success) {
          const pageID = response.data.product.id
          vm.status.loadingItem = ''
          vm.$router.push(`/product/${pageID}`)
        }
      })
    },
    addToCart (id, qty = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: qty
      }
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response)
        vm.status.loadingItem = ''
        vm.getCart()
      })
    },
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$http.get(api).then(response => {
        if (response.data.success) {
          console.log('length', response.data.data.carts.length)
          console.log('carts', response.data.data.carts)
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
    this.getProducts()
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.wmall{
  min-height: 100vh;
  position: relative;
  padding-bottom: 70px;
}
.table th, .table td {
  vertical-align: middle;
}
.list-group-item{
  border-color: #7093bb;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background-color: #7093bb;
    color: white;
  }
}
.card-body{
  padding: 16px;
  .product_title{
    text-decoration: none;
  }
  .card-text{
    font-size: 1rem;
  }
  .price{
    font-size: 1.75rem;
  }
}
.card-footer{
  border-top: 1px solid #7093bb;
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
