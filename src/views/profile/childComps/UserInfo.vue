<template>
  <div class="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="icon-user left" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登陆/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg class="icon-phone" aria-hidden="true">
              <use xlink:href="#icon-phone"></use>
            </svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg class="icon-arrow" aria-hidden="true">
        <use xlink:href="#icon-xiangyou_fanhui"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }
  .user-info .icon-user {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }
  .user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
    width: 200px;
  }
  .clear-fix {
    position: relative;
  }
  .user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 10px;
    font-weight: 300;
  }

  .user-info .login-info .phone .icon-phone {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -13px;
    top: 0px;
  }
  .icon-arrow {
    position: absolute;
    width: 11px;
    height: 22px;
    right: 0;
    margin-top: 18px;
  }
</style>