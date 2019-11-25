<template>
  <div class="dashboard">
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../views/DashboardNav'
import Sidebar from '../views/DashboardSidebar'

export default {
  name: 'dashboard',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
