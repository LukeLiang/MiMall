<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a href="javascript:;" class="my-cart" @click="gotoMyCart">
            <span class="icon-cart"></span>购物车<span v-if="cartCount">({{cartCount}})</span>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <div v-for="(item, index) in phoneList" :key="index">
                <div class="product">
                  <div class="pro-img">
                    <img :src="item.mainImage" :alt="item.subtitle" />
                  </div>
                  <div class="pro-name">{{item.name}}</div>
                  <div class="pro-price">{{item.price | currency}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
  data() {
    return {
      phoneList: []
    };
  },
  computed:{
    // 在computed中定义的函数名 不能再 data()出同时出现
    username(){
        return this.$store.state.username;
      },
      cartCount(){
        return this.$store.state.cartCount;
      }
  },
  mounted() {
    this.getProductList();
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    }
  },
  methods: {
    login(){
      this.$router.push('/login');
    },
    gotoMyCart(){
      this.$router.push('/cart');
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6);
          }
          this.phoneList = res.list;
        });
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      width: 1226px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:last-child{
          margin-right: 0;
        }
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: #ff6600;
            .children {
              opacity: 1;
              height: 220px;
              transition: all 1s;
            }
          }
          .children {
            display: flex;
            justify-content: space-between;
            width: 1226px;
            position: absolute;
            height: 0;
            background-color: #FFFFFF;
            top: 112px;
            left: 0;
            border-top: 1px solid #e5e5e5;
            opacity: 0;
            overflow: hidden;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 1s;
            .product {
              display: flex;
              flex-direction: column;
              align-items: center;
              // width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              .pro-img {
                height: 137px;
                margin-top: 16px;
                img {
                  width: auto;
                  height: 111px;
                }
              }
              .pro-name {
                // width: 32px;
                // height: 12px;
                font-size: 12px;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                // margin-top: 19px;
              }
              .pro-price {
                // width: 43px;
                // height: 12px;
                font-size: 12px;
                font-weight: bold;
                color: rgba(255, 102, 0, 1);
                margin-top: 8px;
              }
            }
            .decor {
              width: 1px;
              height: 99px;
              border: 1px solid rgba(215, 215, 215, 1);
              background-color: #d7d7d7;
              margin-top: 28px;
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>