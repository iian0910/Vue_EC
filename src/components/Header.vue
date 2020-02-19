<template>
  <div>
    <div class="nav winnieMallBar">
      <div class="container">
        <div class="row align-items-center">
          <router-link to="/" class="mr-auto mr-md-4">
            <img src="../assets/images/logo.svg" class="img img-fluid nav_logo" alt="">
          </router-link>
          <div class="navMoBtn" @click="showNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="list d-md-flex mr-auto pt-5 pt-md-0">
            <router-link to="/about" class="list_link">
              <li class="list_item" @click="hideNav">關於我們</li>
            </router-link>
            <router-link to="/favourable" class="list_link">
              <li class="list_item" @click="hideNav">優惠活動</li>
            </router-link>
            <router-link to="/characters" class="list_link">
              <li class="list_item" @click="hideNav">角色介紹</li>
            </router-link>
            <router-link to="/products" class="list_link">
              <li class="list_item" @click="hideNav">相關產品</li>
            </router-link>
            <router-link to="/login" class="list_link d-block d-md-none">
              <li class="list_item">後台管理</li>
            </router-link>
          </ul>
          <router-link to="/login" target="_blank" class="iconItem d-none d-md-block">
            <i class="fas fa-user d-none d-md-block"></i> <p class="d-black d-md-none text-center">後台管理</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showNav (e) {
      let list = document.querySelector('.list')
      list.classList.add('open')
    },
    hideNav (e) {
      let list = document.querySelector('.list')
      list.classList.remove('open')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/all.scss";

.winnieMallBar{
  padding-top: 10px;
  padding-bottom: 10px;
}
.navMoBtn{
  display: none;
  @include screen($mobile){
    display: block;
    width: 50px;
    height: 50px;
    padding: 10px;
    border: 1px solid $primary;
    border-radius: 3px;
    span{
      display: block;
      margin-bottom: 6px;
      width: 100%;
      height: 5px;
      background-color: $primary;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}
.nav{
  @include screen($mobile){
    padding-left: 15px;
    padding-right: 15px;
  }
  &_logo{
    width: 60px;
    height: 60px;
  }
  .list{
    padding: 0;
    margin: 0;
    list-style: none;
    @include screen($mobile){
      width: 100%;
      height: 100vh;
      background-color: lighten($primary, 20%);
      position: fixed;
      top: 0;
      right: -100%;
      z-index: 99999;
      transition: all 0.3s;
    }
    &_link,
    &_link:hover,
    &_link:focus{
      color: black;
      text-decoration: none;
    }
    &_item{
      margin-right: 5px;
      padding: 14px 10px;
      font-size: 16px;
      line-height: 32px;
      @include screen($mobile){
        padding: 8px 10px;
        text-align: center;
      }
    }
    &.open{
      right: 0;
    }
  }
  .iconItem i{
    font-size: 30px;
    line-height: 30px;
    color: $primary;
  }
}
</style>
