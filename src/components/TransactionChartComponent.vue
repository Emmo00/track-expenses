<script setup>
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'vue-chartjs';
import { computed, ref } from 'vue';

const props = defineProps(['history']);
Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function calculateDataPoints() {
    const incomePoints = ref([])
    const expensesPoints = ref([])
    for (const { date, amount, category } of props.history) {
        const today = new Date();
        const transactionDate = new Date(date);
        const transactionMonth = transactionDate.getUTCMonth()
        const transactionYear = transactionDate.getFullYear();

        if (transactionYear === today.getFullYear()) {
            if (category === 'income') {
                incomePoints.value[transactionMonth] = incomePoints.value[transactionMonth] ?? 0;
                incomePoints.value[transactionMonth] += amount
            } else {
                expensesPoints.value[transactionMonth] = expensesPoints.value[transactionMonth] ?? 0;
                expensesPoints.value[transactionMonth] += amount
            }
        }
    }
    return {
        income: incomePoints.value,
        expenses: expensesPoints.value
    }
}

const data = computed(() => {
    const { income, expenses } = calculateDataPoints();
    return {
        labels: months,
        datasets: [
            {
                label: 'Income',
                backgroundColor: '#22c55e',
                data: income
            },
            {
                label: 'Expenses',
                backgroundColor: '#ef4444',
                data: expenses
            }
        ]
    }
}
);


const options = {
    responsive: true,
    maintainAspectRatio: false
}
</script>
<template>
    <div style="width: 100%; height: 100%;">
        <Line :data="data" :options="options" class="" height="100%" />
    </div>
</template>