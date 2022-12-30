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
  background-image: linear-gradient(120deg, #2a3c46 0%, #386a6f 100%);
  overflow-y: auto;
  .login-box {
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    background: linear-gradient(145deg, #b0b7ba, #d2d9dd);
  }
}
</style>
