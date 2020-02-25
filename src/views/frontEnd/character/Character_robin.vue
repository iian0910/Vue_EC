<template>
  <div class="w-100">
    <div class="container">
      <div class="pageFullBanner mb-2" />
      <section class="section">
        <!-- Start Breadcrumb -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-2 p-0 bg-transparent">
            <li class="breadcrumb-item">
              <router-link
                to="/"
                class="breadcrumb-link"
              >
                首頁
              </router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link
                to="/characters"
                class="breadcrumb-link"
              >
                角色介紹
              </router-link>
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
            >
              克里斯多福．羅賓
            </li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <!-- Start Content -->
        <div class="row">
          <div class="col-10 offset-1">
            <div class="row align-items-center">
              <div class="col-md-6 mb-4 mb-md-0">
                <img src="../../../assets/images/robin.png" class="img img-fluid" alt="">
              </div>
              <div class="col-md-6">
                <h3 class="character_title">克里斯多福．羅賓</h3>
                <p class="character_info m-0">男孩子。<br>根據米爾恩的兒子克里斯多福·羅賓·米爾恩所創造出來的小男孩角色，是維尼的主要人類朋友，常常會親暱的對維尼說「小笨熊（Silly old bear）」。</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Content -->
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/all.scss";

.pageFullBanner{
  background-image: url('../../../assets/images/page_charactersBanner.jpg');
  @include screen($mobile){
    background-image: url('../../../assets/images/page_charactersBanner_mo.jpg');
  }
}
.character_title{
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 8px;
  font-weight: bold;
  @include screen($mobile){
    font-size: 20px;
  }
}
.character_info{
  font-size: 18px;
  line-height: 1.5;
  @include screen($mobile){
    font-size: 16px;
  }
}
</style>
