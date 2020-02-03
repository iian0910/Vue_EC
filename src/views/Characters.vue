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
            <li class="breadcrumb-item active" aria-current="page">角色介紹</li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/winnie.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">小熊維尼</h5>
                <p class="card-text">主角，雄性，只穿著紅色的上衣，不穿褲子，主要食糧是蜂蜜，而當蜂蜜吃完以後常常立刻跑去瑞比家要蜂蜜；雖然常常因為腦袋小而提供錯誤解決辦法，不過對朋友很講義氣。另維尼家的門上寫著「MR. SANDERZ」。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/pig.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">小豬</h5>
                <p class="card-text">雄性，他是一隻粉紅色的小豬，因為體型小，所以特別膽小。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/tiger.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">跳跳虎</h5>
                <p class="card-text">雄性，一隻喜歡彈跳的老虎，常常會用彈簧尾巴到處跳來跳去，因此時常會有小破壞。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/eeyore.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">屹耳</h5>
                <p class="card-text">雄性，一隻時常很憂鬱的驢子，住在山頂上只用幾根木頭所搭建的「屋子」裡。常常愁眉苦臉，自怨自艾，又因頸部不能挺直，令他看來沒精打采；幸有維尼和好朋友為他帶來歡樂，因此他會默默守護在朋友的身邊。特徵是尾巴經常會甩尾。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/rabbit.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">瑞比</h5>
                <p class="card-text">雄性，一隻喜歡園藝的兔子，在家門前面有一大片的菜園。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/kanga.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">袋鼠媽媽</h5>
                <p class="card-text">雌性，小荳的媽媽。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/roo.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">小荳</h5>
                <p class="card-text">雄性，袋鼠媽媽的兒子，是一隻六歲的小袋鼠，性格活潑開朗，跟跳跳虎最要好，也喜歡和大夥一起玩拋樹枝大賽。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/owl.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">貓頭鷹</h5>
                <p class="card-text">雄性，常常會扮演解決問題的智者，不過也是跟維尼一樣常常提供錯誤解答。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-0 mb-md-4">
            <div class="card h-100">
              <img class="card-img-top" src="../assets/images/robin.png" alt="winnie">
              <div class="card-body">
                <h5 class="card-title">克里斯多福．羅賓</h5>
                <p class="card-text">男孩子，根據米爾恩的兒子克里斯多福·羅賓·米爾恩所創造出來的小男孩角色，是維尼的主要人類朋友，常常會親暱的對維尼說「小笨熊（Silly old bear）」。</p>
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
  name: 'characters',
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
  background-image: url('../assets/images/page_charactersBanner.jpg');
  @include screen($mobile){
    background-image: url('../assets/images/page_charactersBanner_mo.jpg');
  }
}
.card-title{
  font-weight: bold;
}
.card-text{
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 27px;
}
</style>
