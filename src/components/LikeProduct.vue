<template>
  <div>
    <div class="likeInfo" v-if="likeProduct.length !== 0">
      <div
        class="likeIcon"
        data-toggle="collapse"
        data-target="#likeCollapse"
      >
        <i class="fa fa-heart"><div
          v-if="likeProduct.length !== 0"
          class="dot"
        /></i>
      </div>
      <div
        id="likeCollapse"
        class="collapse likeCollapse"
      >
        <div class="card card-body p-0">
          <div
            class="overflowCtr"
            :class="{'overflowY':likeProduct.length >= 3}"
          >
            <table class="table-sm">
              <thead>
                <th align="center">
                  <td class="text-pink">我的最愛</td>
                </th>
              </thead>
              <tbody>
                <tr class="border-0" v-for="item in likeProduct" :key="item.id">
                  <td @click="getProduct(item.id)"><img :src="`${item.imageUrl}`" class="img img-fluid likeImg" alt=""></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Likeproduct',
  props: ['likeProduct'],
  data () {
    return {}
  },
  methods: {
    getProduct (id) {
      // const vm = this
      // vm.$router.push(`/product/${id}`)
      this.$emit('emitgetLikeProduct', id)
    }
  },
  created () {
    this.$emit('emitLike')
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/all.scss";

$mobile: '568px';
$pad-m: '768px';
$pad-l: '960px';

@mixin screen($size){
  @media(max-width: $size){
    @content
  }
};

.likeInfo{
  // position: fixed;
  // right: 5%;
  // bottom: 10%;
  // z-index: 9999;
  cursor: pointer;
  margin-bottom: 10px;
  @include screen($mobile){
    right: 3%;
    bottom: 2%
  }
  .likeIcon{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid $primary;
    background-color: white;
    .fa-heart{
      font-size: 20px;
      line-height: 20px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $primary;
      .dot{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: $pink;
        position: absolute;
        top: -20%;
        right: -20%;
      }
    }
  }
  .likeCollapse{
    position: absolute;
    bottom: 130px;
    right: 0;
    width: 120px;
  }
  .likeImg{
    width: 100%;
    height: auto;
  }
  .overflowCtr{
    display: block;
    max-height: 270px;
    overflow: hidden;
  }
  .overflowY{
    overflow-y: scroll;
  }
}
</style>
