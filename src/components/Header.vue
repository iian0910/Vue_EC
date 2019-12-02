<template>
  <div>
    <nav class="navbar bg-transparent">
      <router-link to="/WMall" class="navbar-brand">WMall</router-link>
      <div class="ml-auto">
        <router-link class="btn btn-outline-primary" to="/login" target="_blank">後台管理</router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar-brand {
  background-color: transparent !important;
}
</style>
