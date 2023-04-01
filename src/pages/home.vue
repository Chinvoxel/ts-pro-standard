<template>
  <div class="wrapper">
    <el-button type="primary" @click="logout">退出登录</el-button>
    <BarChart class="chart" />
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login'
import { useRouter } from 'vue-router'
import BarChart from '@/components/chart/BarChart.vue'

const $router = useRouter()
const Login = useLoginStore()

const logout = () => {
  Login.FedLogOut().then(() => {
    $router.push({ path: '/login' })
  })
}
</script>

<style lang="scss" scoped>
body {
  background: hs1(210deg, 20%， 10%);
}
.wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.wrapper .chart {
  width: 50%;
  height: 70%;
}
</style>
