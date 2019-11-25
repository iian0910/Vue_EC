<template>
  <div class="login">
    <form class="form-signin" @submit.prevent="signin">
      <img class="mb-3 logo" src="../assets/logo.svg" alt="logo" width="100" height="100" />
      <h1 class="h3 mb-3 font-weight-normal text-center">登入</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="user.username"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "../assets/helpers/variables.scss";
.login {
  width: 100%;
  height: 100vh;
  background-color: $primary;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: #fff;
  transition: all 0.3s;
  z-index: 9999;
  .logo {
    display: block;
    margin: 0 auto;
  }
  h1 {
    color: $primary;
  }
  .checkbox {
    font-weight: 400;
  }
  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-control:focus {
    z-index: 2;
  }
  input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &::before {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-image: url("../assets/loginWinnie.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    opacity: 0;
    transition: all 0s;
  }
  &:hover {
    box-shadow: 0px 15px 10px -10px darken($primary, 20);
    transition: all 0.3s;
    &:before {
      top: -100px;
      opacity: 1;
      transition: all 0.3s;

    }
  }
}
</style>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/admin/products')
        }
      })
    }
  }
}
</script>
