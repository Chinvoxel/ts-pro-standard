<template>
  <div class="wrapper">
    <div class="login-box"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.wrapper {
  @include flex(center);
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: #03a9f4;
  .login-box {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    background: #ffffff;
    background-image: url('@/assets/images/login.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
