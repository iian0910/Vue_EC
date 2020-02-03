<template>
  <div>
    <loading :active.sync="isLoading">
      <Circle4></Circle4>
    </loading>

    <nav class="navbar navbar-dark fixed-top bg-white flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">WMall 後台管理</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout"><i class="fas fa-sign-out-alt fa-2x text-primary"></i></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { Circle4 } from 'vue-loading-spinner'

export default {
  name: 'dashboardNav',
  components: {
    Circle4
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    signout () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      vm.isLoading = true
      vm.$http.post(api).then(response => {
        console.log(response.data)
        vm.isLoading = false
        if (response.data.success) {
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>
