<template>
  <div class="nav-footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="" target="_blank">河畔一角主页</a><span>|</span>
      <a href="" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="" target="_blank">React全家桶课程</a><span>|</span>
      <a href="" target="_blank">微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">
      Copyright ©2019
      <span class="domain">mi.futurefe.com</span> All Rights Reserved.
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.nav-footer {
  @include fc(center, center);
  height: 230px;
  width: 100%;
  background: rgba(51, 51, 51, 1);
  border-top: 4px solid $colorA;
  .footer-logo {
    @include fc(center, center);
    img {
      width: 53px;
      height: 36px;
    }
    p {
      width: 64px;
      height: 16px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-top: 13px;
    }
  }
  .footer-link{
    margin-top: 31px;
    a{
      font-size: 16px;
      font-weight:400;
      color:rgba(153,153,153,1);
      margin-right: 10px;
    }
    span{
      margin-right: 10px;
      color:rgba(153,153,153,1);
      font-size: 16px;
    }
  }
  .copyright{
    margin-top: 10px;
    font-size: 16px;
    font-weight:400;
    color:rgba(153,153,153,1);
    .domain{
      color:$colorA;
    }
  }
}
</style>