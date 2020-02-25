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
              小荳
            </li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <!-- Start Content -->
        <div class="row">
          <div class="col-10 offset-1">
            <div class="row align-items-center">
              <div class="col-md-6 mb-4 mb-md-0">
                <img src="../../../assets/images/roo.png" class="img img-fluid" alt="">
              </div>
              <div class="col-md-6">
                <h3 class="character_title">小荳</h3>
                <p class="character_info m-0">雄性。<br>袋鼠媽媽的兒子，是一隻六歲的小袋鼠，性格活潑開朗，跟跳跳虎最要好，也喜歡和大夥一起玩拋樹枝大賽。</p>
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
