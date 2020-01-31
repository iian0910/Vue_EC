<template>
  <div>
    <!-- Start Header -->
    <Header/>
    <!-- End Header -->
    <div class="container">
      News
    </div>
    <!-- Start Footer -->
    <Footer/>
    <!-- End Footer -->
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'product',
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>

</style>
