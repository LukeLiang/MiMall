<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>7天无理由退货
        </li>
        <li>
          <span class="icon-15day"></span>15天免费换货
        </li>
        <li>
          <span class="icon-discount"></span>满150元包邮
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "service-bar"
};
</script>
<style lang="scss" scoped>
@import './../assets/scss/mixin.scss';
.service-bar {
  .container {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      display: inline-block;
      font-size: 16px;
      text-align: center;
      span{
          margin-right: 8px;
          margin-left: 89px;
      }
      .icon-setting {
        @include bgImg(16px, 16px, "/imgs/icon-setting.png");
      }
      .icon-7day {
        @include bgImg(16px, 16px, "/imgs/icon-7day.png");
      }
      .icon-15day {
        @include bgImg(16px, 16px, "/imgs/icon-15day.png");
      }
      .icon-discount {
        @include bgImg(16px, 16px, "/imgs/icon-post.png");
      }
    }
  }
}
</style>