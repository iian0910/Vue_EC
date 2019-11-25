<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-white flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout"><i class="fas fa-sign-out-alt fa-2x text-primary"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'dashboardNav',
  methods: {
    signout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      this.$http.post(api).then(response => {
        console.log(response.data)
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "../assets/helpers/variables.scss";

.navbar-brand{
  background-color: rgba(0, 0, 0, 1) !important;
}
</style>
