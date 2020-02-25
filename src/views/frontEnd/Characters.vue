<template>
  <div>
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
            <li
              class="breadcrumb-item active"
              aria-current="page"
            >
              角色介紹
            </li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <div class="row">
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/winnie" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/winnie.png"
                  alt="winnie"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    小熊維尼
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/pig" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/pig.png"
                  alt="pig"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    小豬
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/tiger" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/tiger.png"
                  alt="tiger"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    跳跳虎
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/eeyore" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/eeyore.png"
                  alt="eeyore"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    屹耳
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/rabbit" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/rabbit.png"
                  alt="rabbit"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    瑞比
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/kanga" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/kanga.png"
                  alt="kanga"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    袋鼠媽媽
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/roo" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/roo.png"
                  alt="roo"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    小荳
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-2 mb-md-4 characterItem">
            <router-link to="characters/owl" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/owl.png"
                  alt="owl"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    貓頭鷹
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-6 col-md-4 mb-0 mb-md-4 characterItem">
            <router-link to="characters/robin" class="characterLink">
              <div
                class="card"
              >
                <img
                  class="card-img-top"
                  src="../../assets/images/robin.png"
                  alt="robin"
                >
                <div class="card-body">
                  <h5 class="card-title text-center">
                    克里斯多福．羅賓
                  </h5>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/all.scss";

.pageFullBanner{
  background-image: url('../../assets/images/page_charactersBanner.jpg');
  @include screen($mobile){
    background-image: url('../../assets/images/page_charactersBanner_mo.jpg');
  }
}
.characterItem{
  @include screen($mobile){
    &:nth-child(odd){
      padding-right: 2px;
    };
    &:nth-child(even){
      padding-left: 2px;
    }
  }
}
.card-title{
  font-weight: bold;
}
.card-body{
  padding: 0;
}
.card-text{
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 27px;
}
.characterLink,
.characterLink:hover{
  text-decoration: none;
  color: $primary;
}
</style>
