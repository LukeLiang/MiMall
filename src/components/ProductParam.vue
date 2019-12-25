<template>
  <div class="main" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="container-left">
        <span class="f12">小米9 超级买赠</span>
        <span>|</span>
        <span class="f13">小米9</span>
        <span>|</span>
        <span class="f13">小米9SE</span>
      </div>
      <div class="container-right">
        <span>概述</span>
        <span>|</span>
        <span>参数</span>
        <span>|</span>
        <span>用户评价</span>
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-param",
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
  methods: {
    initHeight() {
      // 浏览器获得屏幕高度的方法
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.main {
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-top: 1px solid $colorH;
    .container-left {
      span {
        margin-right: 8px;
        font-weight: bold;
      }
      .f12 {
        font-size: 18px;
        color: $colorB;
      }
      .f13 {
        font-size: 12px;
        color: $colorC;
      }
    }
    .container-right {
      font-size: 14px;
      color: $colorC;
      font-weight: bold;
      span {
        margin-right: 11px;
      }
    }
  }
}
</style>