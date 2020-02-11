<template>
  <div>
    <div class="container">
      <!-- Start Carousel -->
      <div id="indexBanner" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#indexBanner" data-slide-to="0" class="active"></li>
          <li data-target="#indexBanner" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item activeBanner01 active"></div>
          <div class="carousel-item activeBanner02"></div>
        </div>
        <a class="carousel-control-prev" href="#indexBanner" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#indexBanner" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- End Carousel -->
      <!-- Start News -->
      <section class="section news">
        <h3 class="sectionTitle mb-4 text-center">最新消息</h3>
        <div class="row align-items-center">
          <div class="col-md-6">
            <ul class="news_list">
              <li class="news_list_item">
                <div class="news_date">2020.02.10</div>
                <div class="news_text">戀愛季節【熊愛你】，購物滿 $5,000 送 $500</div>
              </li>
              <li class="news_list_item mb-2">
                <div class="news_date">2020.01.23</div>
                <div class="news_text">返鄉過年【熊黑皮】，過年期間暫停營業</div>
              </li>
              <li class="news_list_item mb-2">
                <div class="news_date">2020.01.20</div>
                <div class="news_text">過年放假【熊放肆】，食品系列商品 6 折起</div>
              </li>
              <li class="news_list_item mb-2">
                <div class="news_date">2020.01.01</div>
                <div class="news_text">跨年無伴【熊孤單】，玩偶系列商品 7 折起</div>
              </li>
              <li class="news_list_item mb-2">
                <div class="news_date">2019.12.25</div>
                <div class="news_text">冬季聖誕【熊溫暖】，服飾系列商品 85 折起</div>
              </li>
            </ul>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <img src="../../assets/images/newsImg.jpg" class="img img-fluid" alt="">
          </div>
        </div>
      </section>
      <!-- End News -->
      <!-- Start Hot -->
      <section class="section hot">
        <h3 class="sectionTitle mb-4 text-center">經典熱銷</h3>
        <div class="row">
          <div class="col-md-4" v-for="item in products.slice(0, 3)" :key="item.key">
            <div class="card productItem">
              <img class="card-img-top" :src="`${item.imageUrl}`" :alt="`${item.title}`">
              <div class="card-body productItem_body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title m-0">{{ item.title | titleFilter}}</h5>
                  <span class="badge badge-pill badge-primary">{{item.category}}</span>
                </div>
                <!-- <p class="card-text">{{ item.discription }}</p> -->
                <div class="d-flex align-items-end">
                  <p class="card-text org_price mb-0" v-if="item.origin_price !== item.price">原價：<span>{{ item.origin_price | currency }}</span></p>
                  <p class="card-text price mb-0">網路價：<span>{{ item.price | currency }}</span></p>
                </div>
              </div>
              <div class="card-footer productItem_footer d-flex justify-content-between">
                <button type="button" class="btn btn-primary px-0" @click="getProduct(item.id)">查看更多</button>
                <button type="button" class="btn btn-orange px-0" @click="addToCart(item.id, item.qty)">加入購物車</button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <!-- End Hot -->
      <!-- Start Characters -->
      <section class="section characters">
        <h3 class="sectionTitle mb-4 text-center">系列角色</h3>
        <div class="row">
          <div class="col-6 col-md-3">
            <router-link to="/characters" class="charactersLink">
              <div class="card border-0">
                <img src="../../assets/images/winnie_lg.png" alt="" class="rounded-circle img-fluid">
                <div class="card-body">
                  <h5 class="card-title text-center">維尼（Winnie）</h5>
                </div>
              </div>
              <button class="btn btn-danger btn-lg charactersBtn">看更多</button>
            </router-link>
          </div>
          <div class="col-6 col-md-3">
            <router-link to="/characters" class="charactersLink">
              <div class="card border-0">
                <img src="../../assets/images/pig_lg.png" alt="" class="rounded-circle img-fluid">
                <div class="card-body">
                  <h5 class="card-title text-center">小豬（Piglet）</h5>
                </div>
              </div>
              <button class="btn btn-danger btn-lg charactersBtn">看更多</button>
            </router-link>
          </div>
          <div class="col-6 col-md-3">
            <router-link to="/characters" class="charactersLink">
              <div class="card border-0">
                <img src="../../assets/images/tiger_lg.png" alt="" class="rounded-circle img-fluid">
                <div class="card-body">
                  <h5 class="card-title text-center">跳跳虎（Tiger）</h5>
                </div>
              </div>
              <button class="btn btn-danger btn-lg charactersBtn">看更多</button>
            </router-link>
          </div>
          <div class="col-6 col-md-3">
            <router-link to="/characters" class="charactersLink">
              <div class="card border-0">
                <img src="../../assets/images/eeyore_lg.png" alt="" class="rounded-circle img-fluid">
                <div class="card-body">
                  <h5 class="card-title text-center">屹耳（Eeyore）</h5>
                </div>
              </div>
              <button class="btn btn-danger btn-lg charactersBtn">看更多</button>
            </router-link>
          </div>
        </div>
      </section>
      <!-- End Characters -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      vm.axios.get(api).then((response) => {
        console.log(response.data)
        vm.products = response.data.products
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/all.scss";

.section{
  padding-top: 80px;
  @include screen($mobile){
    padding-top: 40px;
  }
  .sectionTitle{
    font-size: 26px;
    line-height: 26px;
    font-weight: bold;
    letter-spacing: 1px;
    @include screen($mobile){
        font-size: 24px;
        line-height: 24px;
    }
  }
}
.activeBanner01,
.activeBanner02{
  width: 100%;
  height: 400px;
  @include screen($mobile){
    height: 0;
    padding-top: 78.94%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
.activeBanner01{
  background-image: url('../../assets/images/page_banner.jpg');
  @include screen($mobile){
    background-image: url('../../assets/images/page_banner_mo.jpg');
  }
}
.activeBanner02{
  background-image: url('../../assets/images/page_banner_2.jpg');
  @include screen($mobile){
    background-image: url('../../assets/images/page_banner_2_mo.jpg');
  }
}
.news{
  &_list{
    padding: 0;
    margin: 0;
    list-style: none;
    &_item{
      line-height: 27px;
      border-bottom: 1px solid rgba(129, 129, 129, 0.5);
      font-size: 18px;
    }
  }
  &_date{
    color: $yellow;
    margin-right: 16px;
    font-weight: bold;
  }
  &_text{
    color: $primary;
  }
}
.hot{
  .card{
    @include screen ($mobile){
      margin-bottom: 24px;
    }
    .categoryItem{
      cursor: pointer;
    }
    .productItem_body{
      padding-bottom: 16px;
      .badge{
        font-size: 12px;
        line-height: 12px;
        width: 60px;
        text-align: center;
      }
      .card-title{
        font-size: 24px;
        line-height: 24px;
        color: $black;
      }
      .org_price{
        font-size: 12px;
        line-height: 18px;
        color: $secondary;
        text-decoration: line-through;
        margin-right: 8px;
      }
      .price{
        font-size: 18px;
        line-height: 18px;
        color: $black;
        span{
          font-size: 22px;
          line-height: 22px;
          font-weight: bold;
          color: $danger;
        }
      }
    }
    .productItem_footer{
      padding: 0 20px 20px 20px;
      border: none;
      background-color: transparent;
      .btn{
        padding-top: calc((45px - 16px) / 2);
        padding-bottom: calc((45px - 16px) / 2);
        border-radius: 0;
        font-size: 16px;
        line-height: 16px;
        text-align: center;
        width: 50%;
      }
    }
  }
}
.charactersLink{
  display: block;
  width: 100%;
  height: 100%;
  transition: all .5s;
  .charactersBtn{
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  &:hover{
    text-decoration: none !important;
    .charactersBtn{
      display: block;
      z-index: 15;
    }
    &::before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(245, 184, 87, 0.47);
      z-index: 10;
    }
  }
}
</style>
