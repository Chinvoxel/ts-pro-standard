<template>
  <Chart :options="barChartOptionsCreator()"></Chart>
</template>

<script setup lang="ts">
import barChartOptionsCreator from '@/charts/barChartOptions'
import Chart from './Chart.vue'
</script>

<style lang="scss" scoped></style>
