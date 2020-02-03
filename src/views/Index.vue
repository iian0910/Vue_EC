<template>
  <div>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
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
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <router-link to="/news" class="newsLink">
              <div class="card">
                <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">活動消息1</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <router-link to="/news" class="newsLink">
              <div class="card">
                <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">活動消息2</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/news" class="newsLink">
              <div class="card">
                <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">活動消息3</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
      <!-- End News -->
      <!-- Start Characters -->
      <section class="section characters">
        <h3 class="sectionTitle mb-4 text-center">系列角色</h3>
        <div class="row">
          <div class="col-6 col-md-3">
            <router-link to="/characters" class="charactersLink">
              <div class="card border-0">
                <img src="../assets/images/winnie_lg.png" alt="" class="rounded-circle img-fluid">
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
                <img src="../assets/images/pig_lg.png" alt="" class="rounded-circle img-fluid">
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
                <img src="../assets/images/tiger_lg.png" alt="" class="rounded-circle img-fluid">
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
                <img src="../assets/images/eeyore_lg.png" alt="" class="rounded-circle img-fluid">
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
      <!-- Start Vedio -->
      <section class="section vedio">
        <h3 class="sectionTitle mb-4 text-center">相關影音</h3>
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-SwWL5xCzhM"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/eGxMsASLjL8"></iframe>
            </div>
          </div>
        </div>
      </section>
      <!-- End Vedio -->
    </div>
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

    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

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
  background-image: url('../assets/images/page_banner.jpg');
  @include screen($mobile){
    background-image: url('../assets/images/page_banner_mo.jpg');
  }
}
.activeBanner02{
  background-image: url('../assets/images/page_banner_2.jpg');
  @include screen($mobile){
    background-image: url('../assets/images/page_banner_2_mo.jpg');
  }
}

.newsLink:hover{
  text-decoration: none !important;
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
