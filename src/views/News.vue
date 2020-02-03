<template>
  <div>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
    <div class="container">
      <div class="pageFullBanner mb-2"></div>
      <section class="section">
        <!-- Start Breadcrumb -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2 p-0 bg-transparent">
            <li class="breadcrumb-item">
              <router-link to="/" class="breadcrumb-link">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">最新消息</li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息1</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息2</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息3</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息4</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息5</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息6</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息7</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息8</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-0">
            <div class="card">
              <img class="card-img-top" src="https://fakeimg.pl/600x400/" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">活動消息9</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  name: 'news',
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

.pageFullBanner{
  background-image: url('../assets/images/page_newsBanner.jpg');
  @include screen($mobile){
    background-image: url('../assets/images/page_newsBanner_mo.jpg');
  }
}
</style>
