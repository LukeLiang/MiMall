<template>
  <div class="login">
    <div class="login-header">
      <div class="main">
        <div class="main-left">
          <a href="/#/index"></a>
        </div>
        <div class="main-right">
          <div class="top">小米商城</div>
          <div class="bottom">让每个人都能享受科技的乐趣</div>
        </div>
      </div>
    </div>
    <div class="login-body">
        <a href="javascript:;"></a>
        <div class="signin">
            <div class="signin-body">
                <div class="scan">
                    <span>账号登录</span>
                    <span class="sep">|</span>
                    <span class="last">扫码登录</span>
                </div>
                <div class="input-top">
                    <input type="text" placeholder="邮箱/手机号码">
                </div>
                <div class="input-bottom">
                    <input type="text" placeholder="密码">
                </div>
                <div class="button" @click="signin">登录</div>
                <div class="text">
                  <div class="text-left">
                    <span>手机短信登录/注册</span>
                  </div>
                  <div class="text-right">
                    <span class="register">立即注册</span>
                    <span class="s">|</span>
                    <span class="forget">忘记密码?</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div class="login-footer">
        <div class="footer-top"></div>
        <div class="footer-bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data(){
    return {
      username: ''
    }
  },
  mounted(){
    // this.register();
    // this.login();
  },
  methods:{
    signin(){
      this.login();
    },
    login(){
      this.axios.post('/user/login', {
        username: 'liang',
        password: 'liang'
      }).then( (res) => {
        this.username = res.username;
        this.$cookie.set('userId', res.id);
        // 将用户信息保存到 Vuex当中
        this.$store.dispatch('saveUserName', res.username)
        this.$router.push('/index');
      })
    },
    register(){
      this.axios.post('/user/register', {
        username: 'liangku',
        password: 'liang',
        email: '909599755@qq.com'
      }).then((res) => {
        if(res){
          window.console.log('注册成功')
        }
      })
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  .login-header {
    width: 1226px;
    .main {
      display: flex;
      align-items: center;
      padding-top: 19px;
      .main-left {
        margin-right: 18px;
        a {
          @include bgImg(53px, 52px, "/imgs/mi-logo.png");
          background-color: $colorA;
        }
      }
      .main-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 52px;
        .top {
          color: #333333;
          font-size: 33.16px;
          margin-top: -8px;
        }
        .bottom {
          color: #666666;
          font-size: 10px;
          margin-top: -5px;
        }
      }
    }
  }
  .login-body{
      position: relative;
      width: 100%;
      a{
          display: block;
          @include bgImg(100%, 400px, '/imgs/login-bg.jpg');
      }
      .signin{
          display: flex;
              flex-direction: column;
            //   justify-content: center;
              align-items: center;
          position: absolute;
          left: 1139px;
          top: 42px;
          width: 300px;
          height: 320px;
          background-color: #ffffff;
          .signin-body{
              .scan{
                  margin-top: 30px;
                  &:first-child{
                      font-size: 18px;
                      color:$colorA;
                  }
                  .sep{
                      color: #D7D7D7;
                      font-size: 18px;
                      margin-left: 30px;
                      margin-right: 30px;
                  }
                  .last{
                      font-size: 18px;
                      color:#666666;
                  }
              }
              .input-top{
                border: 1px solid #E5E5E5;
                height: 30px;
                text-align: center;
                line-height: 30px;
                margin-top: 20px;
                input{
                  border: none;
                  margin-left: -30px;
                }
              }
              .input-bottom{
                border: 1px solid #E5E5E5;
                height: 30px;
                text-align: center;
                line-height: 30px;
                margin-top: 20px;
                input{
                  margin-left: -30px;
                  border: none;
                }
              }
              .button{
                margin-top: 30px;
                width:208px;
                height: 30px;
                background-color: $colorA;
                color: #ffffff;
                font-size: 14px;
                text-align: center;
                line-height: 30px;
                &:hover{
                  cursor: pointer;
                }
              }
              .text{
                display: flex;
                font-size: 10px;
                margin-top: 14px;
                .text-left{
                  span{
                    color: $colorA;
                  }
                }
                .text-right{
                  color: #999999;
                  margin-left: 26px;
                  .s{
                    margin-left: 5px;
                    margin-right: 5px;
                  }
                }
              }
          }
      }
  }
}
</style>