<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>添加商品到购物车</span>
          <a href="javascript:;"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button class="confirBtn" v-on:click="$emit('confirm')">确定</button>
          <button class="cancelBtn" v-on:click="$emit('cancel')">取消</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Modal",
  props: {
    // 弹框类型: 小small、中middle、大large、表单form
    modalType: {
      type: String,
      default: "form"
    },
    // 弹框标题
    title: String,
    // 按钮类型
    btnType: String,
    confirmBtn: {
      type: String,
      default: "确定"
    },
    cancelBtn: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  },
  methods:{

  }
};
</script>
<style lang = "scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/modal.scss";
</style>