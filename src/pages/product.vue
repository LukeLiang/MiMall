<template>
  <div class="product">
    <product-param>
      <template v-slot:btn>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="t">123</div>
    <div class="t">123</div>
    <div class="t">123</div>
    <div class="t">123</div>
  </div>
</template>
<script>
import ProductParam from "../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam
  }
};
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  .product{
    .btn{
      border: none;
      width: 110px;
      height: 30px;
      background-color: $colorA;
      color: $colorG;
      font-size: 12px;
    }
    .t{
      height: 300px;
    }
  }
</style>