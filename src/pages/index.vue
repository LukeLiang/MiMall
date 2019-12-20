<template>
  <div class="home">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <div class="menu-item">
            <a href="">手机 电话卡</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">电视 盒子</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">笔记本 平板</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">家电 插线板</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">出行 穿戴</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">耳机 音箱</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">电源 配件</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
          <div class="menu-item">
            <a href="">生活 箱包</a>
            <!-- <span class="icon-right"></span> -->
            <div class="children"></div>
          </div>
        </div> 
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a href="javascript:;"><img :src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
      </swiper>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
  import ServiceBar from '../components/serviceBar';
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default{
    name:'index',
    components:{
      ServiceBar,
      swiper,
      swiperSlide
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,
          loop:true,
          effect: 'fade',
          pagination:{
            el: '.swiper-pagination',
            clickable :true,
          },
          navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  .home{
    .container{
      .swiper-box{
        .nav-menu{
          width: 264px;
          height: 451px;
          box-sizing: border-box;
          background-color: #55585a7a;
          position: absolute;
          z-index: 9;
          padding: 26px 0; 
          .menu-item{
            display: flex;
            align-items: center;
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            height: 50px;
            padding-left: 30px;
            a{
              display: block;
              color: #ffffff;
              margin-right: 118px;
              &::after{
                content: ' ';
                position: absolute;
                right: 30px;
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              }
            }
            &:hover{
                background-color: $colorA;
                .children{
                  display: block;
                }
              }
            .children{
              position: absolute;
              display: none;
              top: 0;
              left: 264px;
              height: 451px;
              width: 962px;
              background-color: #ffffff;
              box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.11);
            }
          }
        }
        .swiper-container{
          height: 451px;
        }
        img{
          width: 100%;
          height: 100%;
        }
        .swiper-button-prev{
          left: 275px;
        }
      }
    }
  }
</style>