<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container">
        <router-link class="logo" to="/"></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse mobileNav navbar-collapse" id="navbarSupportedContent">
          <div class="closeIcon" @click="closeNav">
            <span></span>
            <span></span>
          </div>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="item" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="item" to="/news">最新消息</router-link>
            </li>
            <li class="nav-item">
              <router-link class="item" to="/products">相關產品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="item" to="/characters">角色一覽</router-link>
            </li>
          </ul>
          <div class="d-flex flex-row justify-content-center">
            <router-link to="/login" target="_blank" class="iconItem">
              <i class="fas fa-user d-none d-md-block"></i> <p class="iName d-black d-md-none text-center" @click="closeNav">後台管理</p>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {}
  },
  methods: {
    closeNav () {
      let mobileNav = document.querySelector('.mobileNav')
      mobileNav.classList.remove('show')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/all.scss";

.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  .logo {
    background-image: url("../assets/images/logo.svg");
    width: 70px;
    height: 70px;
    display: $black;
  }
  .navbar-nav {
    margin-left: 30px;
    .nav-item {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    .item {
      font-size: 16px;
      line-height: 16px;
      color: #252525;
      font-weight: bold;
      &:hover,
      &:focus,
      &:active {
        text-decoration: none;
      }
    }
  }
}
.closeIcon{
  display: none
}
.iconItem i{
  font-size: 30px;
  line-height: 30px;
  color: $primary;
}
@media screen and (max-width: 576px){
  .mobileNav{
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    &.show{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: $yellow;
      height: 100vh;
      z-index: 99999;
      transition: all .3;
      .closeIcon{
        padding: 5px;
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        right: 10px;
        top: 10px;
        span{
          display: block;
          width: 100%;
          height: 5px;
          background-color: darken($yellow, 20);
          position: absolute;
          top: 50%;
          left: 50%;
          &:first-child{
            transform: translate(-50%, -50%) rotate(45deg)
          }
          &:last-child{
            transform: translate(-50%, -50%) rotate(-45deg)
          }
        }
      }
      ul{
        margin: 0;
        margin-top: 70px;
        .nav-item{
          margin-right: 0;
          text-align: center;
          .item{
            font-size: 27px;
            font-weight: 600;
            line-height: 60px;
          }
        }
      }
    }
  }
  .iName{
    font-size: 27px;
    font-weight: 600;
    line-height: 60px;
    color: $black;
  }
}
</style>
