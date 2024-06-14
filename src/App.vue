<script setup>
import NavBar from '@/components/NavBar.vue'
import AddTransactionForm from '@/components/AddTransactionForm.vue'
import Chart from '@/components/Chart.vue'
import TransactionHistory from './components/TransactionHistory.vue';
</script>
<template>
  <NavBar />
  <main class="flex-1 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AddTransactionForm />
      <Chart />
    </div>
    <TransactionHistory />
  </main>
</template>
