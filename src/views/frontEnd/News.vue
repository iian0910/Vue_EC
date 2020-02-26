<template>
  <div class="w-100 news">
    <div class="container">
      <div class="pageFullBanner mb-2"></div>
      <section class="section">
        <!-- Start Breadcrumb -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-3 p-0 bg-transparent">
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
              {{filterData[0].title}}
            </li>
          </ol>
        </nav>
        <!-- End Breadcrumb -->
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <img :src="`${filterData[0].image}`" class="img img-fluid" alt="">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import jsonData from '../../assets/news.json'

export default {
  name: 'Index',
  data () {
    return {
      jsonData,
      queryID: '',
      filterData: []
    }
  },
  mounted () {
    const JD = this.jsonData.filter((item) => (
      item.id === this.queryID
    ))
    this.filterData = JD
  },
  created () {
    this.queryID = this.$route.query.queryId
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/all.scss";

.pageFullBanner{
  background-image: url('../../assets/images/page_newsBanner.jpg');
  @include screen($mobile){
    background-image: url('../../assets/images/page_newsBanner_mo.jpg');
  }
}
</style>
