<template>
  <div class="container" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, toRefs } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  options: {
    required: true,
    type: Object,
    default: () => ({})
  }
})

const { options } = toRefs(props)
const container = ref<HTMLDivElement | null>(null)
const chart = ref<echarts.ECharts | null>(null)

onMounted(() => {
  chart.value = echarts.init(container.value as unknown as HTMLElement, 'dark')
  chart.value.setOption(options.value)
})

watch(
  options,
  newOption => {
    if (chart.value) {
      chart.value.setOption(newOption)
    }
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
