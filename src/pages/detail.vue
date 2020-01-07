<template>
  <div class="container">
    <product-param :title="product.name"></product-param>
    <div class="main">
      <div class="main-left">
        <img src="/imgs/detail/phone-1.jpg" alt="">
      </div>
      <div class="main-right">
        <div class="title">{{product.name}}</div>
        <div class="subtitle">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红 外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</div>
        <div class="ziying">小米自营</div>
        <div class="price">
          <div class="mainPrice">{{product.price}}</div>
          <div class="discountPrice">2000元</div>
        </div>
        <div class="line"></div>
        <div class="address">
          <div class="address-top">
            <i class="icon-loc"></i>
            <p>北京 北京市 朝阳区 安定门街道</p>
            <p class="text">修改</p>
          </div>
          <div class="address-bottom">
            <p class="text">有现货</p>
          </div>
        </div>
        <div class="version">
          <p class="text">选择版本</p>
          <div class="sku">
            <div class="skuVersion" :class="{'checked': version == 1}" @click="version = 1">6GB+64GB 全网通</div>
            <div class="skuVersion" :class="{'checked': version == 2}" @click="version = 2">4GB+64GB 移动4G</div>
          </div>
        </div>
        <div class="color">
          <p>选择颜色</p>
          <div class="selectColor">
            <div class="block"></div>
            <div class="text">深空灰</div>
          </div>
        </div>
        <div class="finalSku">
          <div class="sku-top">
            <div class="left">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
            <div class="right">
              <div class="price-left">1099元</div>
              <div class="price-right">1049元</div>
            </div>
          </div>
          <div class="sku-bottom">总计：1099元</div>
        </div>
        <div class="cart">
          <div class="addToCart" @click="gotoCart">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductParam from '../components/ProductParam';
  export default{
    name:'detail',
    data() {
      return {
        id: this.$route.params.id,
        version: 1, // 版本信息
        product: {}
      }
    },
    components:{
      ProductParam
    },
    mounted(){
      this.getProductInfo();
    },
    methods:{
      getProductInfo(){
        this.axios.get(`/products/${this.id}`).then((res) => {
          window.console.log(res);
          this.product = res
        })
      },
      gotoCart(){
        this.axios.post('/carts', {
          productId: this.id,
          selected: true
        }).then((res) => {
          this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
        })
        this.$router.push(`/cart`);
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .container{
    width: 100%;
    .main{
      display: flex;
      // justify-content: center;
      // align-items: center;
      .main-left{
        margin-left: 146.6px;
        margin-top: 90px;
        margin-right: 173px;
        img{
          width: 384px;
          height: 486px;
        }
      }
      .main-right{
        display: flex;
        flex-direction: column;
        width: 665px;
        .title{
          font-size:28px;
          font-family:FZLanTingHeiS-R-GB;
          font-weight:bold;
          color:rgba(51,51,51,1);
        }
        .subtitle{
          margin-top: 16px;
          font-size:14px;
          font-family:PingFang SC;
          font-weight:bold;
          color: #999999;
        }
        .ziying{
          margin-top: 26px;
          font-size:16px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(255,103,0,1);
        }
        .price{
          display: flex;
          align-items: center;
          margin-top: 14px;
          .mainPrice{
            margin-right: 10px;
            font-size:20px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(255,103,0,1);
          }
          .discountPrice{
            font-size:14px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(153,153,153,1);
            text-decoration:line-through;
          }
        }
        .line{
          margin-top: 25px;
          width:583px;
          height:1px;
          border:1px solid rgba(229,229,229,1);
          background-color: #E5E5E5;
        }
        .address{
          display: flex;
          flex-direction: column;
          justify-content: center;
          // align-items: center;
          margin-top: 28px;
          width:584px;
          height:108px;
          background:rgba(250,250,250,1);
          border:1px solid rgba(229,229,229,1);
          .address-top{
            margin-left: 34px;
            display: flex;
            .icon-loc{
            @include bgImg(20px,20px,'/imgs/detail/icon-loc.png');
            }
            p{
              margin-left: 10px;
              font-size: 14px;
            }
            .text{
              font-size:14px;
              font-family:FZLanTingHeiS-R-GB;
              font-weight:bold;
              color:rgba(255,103,0,1);
            }
          }
          .address-bottom{
            margin-top: 15px;
            margin-left: 64px;
            .text{
              font-size:14px;
              font-family:FZLanTingHeiS-R-GB;
              font-weight:bold;
              color:rgba(255,103,0,1);
            }
          }
        }
        .version{
          .text{
            margin-top: 30px;
            font-size:18px;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
          .sku{
            display: flex;
            margin-top: 20px;
            font-size: 16px;
            text-align: center;
            color: #333333;
            line-height: 50px;
            .skuVersion{
              width:287px;
              height:50px;
              margin-right: 10px;
              border:1px solid rgba(229,229,229,1);
              cursor: pointer;
              &.checked{
                width:287px;
                height:50px;
                margin-right: 10px;
                border:1px solid rgba(255,102,0,1);
                cursor: pointer;
              }
            }
          }
        }
        .color{
          p{
            margin-top: 30px;
            font-size:18px;
            font-family:FZLanTingHeiS-R-GB;
            font-weight:bold;
            color:rgba(51,51,51,1);
          }
          .selectColor{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            width:287px;
            height:50px;
            border:1px solid rgba(255,102,0,1);
            .block{
              width:14px;
              height:16px;
              background:rgba(102,102,102,1);
            }
            .text{
              font-size:16px;
              font-family:FZLanTingHeiS-R-GB;
              font-weight:bold;
              color:rgba(255,103,0,1);
              margin-left: 9px;
            }
          }
        }
        .finalSku{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width:584px;
          height:108px;
          background:rgba(250,250,250,1);
          margin-top: 50px;
          .sku-top{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight:bold;
            color:rgba(51,51,51,1);
            margin-left: 30px;
            .right{
              display: flex;
              .price-right{
                color: #666666;
                margin-left: 9px;
              }
            }
          }
          .sku-bottom{
            margin-top: 18px;
            font-size:24px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(255,102,0,1);
            margin-left: 30px;
          }
        }
        .cart{
          display: flex;
          margin-top: 30px;
          margin-bottom: 50px;
          .addToCart{
            width:300px;
            height:54px;
            background:rgba(255,102,0,1);
            margin-right: 30px;
            font-size:16px;
            font-family:PingFang SC;
            font-weight:bold;
            color:rgba(255,255,255,1);
            text-align: center;
            line-height:60px;
            cursor: pointer;
          }
          // .like{
          //   display: flex;
          //   width:142px;
          //   height:54px;
          //   background:rgba(187,187,187,1);
          // }
        }
      }
    }
  }
</style>