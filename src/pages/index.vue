<template>
  <div class="home">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <div class="menu-item">
            <a href>手机 电话卡</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>电视 盒子</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>笔记本 平板</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>家电 插线板</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>出行 穿戴</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>耳机 音箱</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>电源 配件</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href>生活 箱包</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a href="javascript:;">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
          <img v-bind:src="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="javascript:;" target="_blank">
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>
      <div class="product-box">
        <div class="wrapper">
          <div class="title">手机</div>
          <div class="phone">
            <div class="phone-left" @click="showAnimation">
              <a href="javascript:;">
                <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
              </a>
            </div>
            <div class="phone-right">
              <div class="item" v-for="(item, index) in phoneList" :key="index">
                <img v-lazy="item.mainImage" alt />
                <div class="name">{{item.name}}</div>
                <div class="subtitle">{{item.subtitle}}</div>
                <div class="price">{{item.price}}元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal v-if="showModal"
             v-on:confirm="gotoCart"
             v-on:cancel="showModal = false"
             :showModal = "showModal"
      >
        <template v-slot:body>
          <span>添加商品成功</span>
        </template>
      </modal>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from "../components/serviceBar";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import modal from '../components/Modal';
export default {
  name: "index",
  components: {
    ServiceBar,
    swiper,
    swiperSlide,
    modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        }
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [],
      showModal: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
    gotoCart(){
      this.showModal = false
    },
    showAnimation(){
      this.showModal = true
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.home {
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    .swiper-box {
      margin-left: 146.6px;
      .nav-menu {
        width: 264px;
        height: 451px;
        box-sizing: border-box;
        background-color: #55585a7a;
        position: absolute;
        z-index: 9;
        padding: 26px 0;
        .menu-item {
          display: flex;
          align-items: center;
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;
          height: 50px;
          padding-left: 30px;
          a {
            display: block;
            color: #ffffff;
            margin-right: 118px;
            &::after {
              content: " ";
              position: absolute;
              right: 30px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            position: absolute;
            display: none;
            top: 0;
            left: 264px;
            height: 451px;
            width: 962px;
            background-color: #ffffff;
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.11);
          }
        }
      }
      .swiper-container {
        height: 451px;
      }
      img {
        width: 1226px;
        height: 100%;
      }
      .swiper-button-prev {
        left: 275px;
      }
      .swiper-button-next{
        right:155px;
      }
    }
    .ads-box {
      margin-left: 146.6px;
      display: flex;
      justify-content: space-between;
      width: 1226px;
      margin-top: 14px;
      a {
        display: inline-block;
        img {
          width: 296px;
          height: 167px;
        }
      }
    }
    .banner {
      width: 1226px;
      margin-top: 31px;
      margin-left: 146.6px;
      a {
        img {
          width: 100%;
          height: 130px;
        }
      }
    }
    .product-box {
      background-color: #f5f5f5;
      width: 100%;
      margin-top: 50px;
      .wrapper {
        margin-left: 146.6px;
        width: 1226px;
        .title {
          margin-top: 31px;
          font-size: 22px;
          color: #333333;
        }
        .phone {
          display: flex;
          margin-top: 20px;
          padding-bottom: 50px;
          .phone-left {
            a {
              img {
                width: 224px;
                height: 619px;
              }
            }
          }
          .phone-right {
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;
            margin-left: 16px;
            .item {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              box-sizing: border-box;
              width: 236px;
              height: 302px;
              background-color: #ffffff;
              margin-left: 10px;
              img {
                width: 190px;
                height: 194px;
              }
              .name {
                  font-size: 14px;
                  color: #333333;
                  margin-top: 10px;
                }
                .subtitle {
                  font-size: 12px;
                  color: #999999;
                  margin-top: 6px;
                }
                .price {
                  font-size: 14px;
                  color: #f20a0a;
                  margin-top: 13px;
                }
            }
          }
        }
      }
    }
  }
}
</style>