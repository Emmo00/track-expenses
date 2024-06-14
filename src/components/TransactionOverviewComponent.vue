<script setup>
import TransactionChart from '@/components/TransactionChartComponent.vue'

defineProps(['income', 'expenses', 'history'])
</script>
<template>
    <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-bold mb-4">Overview</h2>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 rounded-lg p-4">
                <h3 class="text-lg font-bold mb-2">Total Income</h3>
                <div class="text-4xl font-bold text-green-500">${{ income }}.00</div>
            </div>
            <div class="bg-gray-100 rounded-lg p-4">
                <h3 class="text-lg font-bold mb-2">Total Expenses</h3>
                <div class="text-4xl font-bold text-red-500">${{ expenses }}.00</div>
            </div>
        </div>
        <div class="mt-6">
            <div class="w-full aspect-[16/9]">
                <TransactionChart :history="history" />
            </div>
        </div>
    </div>
</template>