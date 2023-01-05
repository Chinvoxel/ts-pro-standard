<template>
  <div>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login'
import { useRouter } from 'vue-router'

const $router = useRouter()
const Login = useLoginStore()

const logout = () => {
  Login.FedLogOut().then(() => {
    $router.push({ path: '/login' })
  })
}
</script>

<style scoped></style>
