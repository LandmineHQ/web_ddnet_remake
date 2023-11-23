<template>
    <div class="ddnet-date-duration-line-chart" ref="$el"></div>
</template>

<script setup lang="ts">
import useUserInfoStore from '@/stores/user'
import * as echarts from 'echarts'
import 'echarts/lib/component/tooltip'
import { onUnmounted } from 'vue'
import { onMounted } from 'vue'
import { ref, watch } from 'vue'

const $el = ref<HTMLCanvasElement>()
let lineChart: echarts.ECharts
let option: echarts.EChartsOption
defineExpose({ $el })

watch(() => useUserInfoStore().playerInfo, () => {
    updateLineChart()
}, { deep: true })

onMounted(() => {
    lineChart = echarts.init($el.value, "dark")
    updateLineChart()
})

onUnmounted(() => {
    lineChart.dispose()
})

// =================================================================

function updateLineChart() {
    const data = updateData()
    option = {
        tooltip: {
            trigger: "axis",
            show: true,
            showContent: true,
            formatter: (params) => {
                const item = params as unknown as [{ value: typeof data[0] }]
                const date = item[0].value[0]
                const hours_played = item[0].value[1]
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${hours_played}h`
            }
        },
        xAxis: {
            type: 'time',
            axisLabel: {
                align: 'center',
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 24,
        },
        series: [
            {
                data: data,
                type: 'line',
                smooth: true,
                showSymbol: false
            }
        ]
    }

    lineChart.setOption(option)
}

function updateData() {
    const data = [] as Array<[Date, number]>
    const PlayerInfo = useUserInfoStore().playerInfo as PlayerInfo
    if (!PlayerInfo) return data
    PlayerInfo.activity.forEach((item) => {
        data.push([new Date(item.date), item.hours_played])
    })

    return data
}
</script>

<style scoped lang="scss">
.ddnet-date-duration-line-chart {
    width: 540px;
    height: 350px;
    flex-shrink: 0;
    display: flex;

    border-radius: 15px;
    background: var(--BG-color-3, #BEE3CF);
    overflow: hidden;
}
</style>