<script setup>
import { ref } from 'vue';
import persisty from 'persisty';
import { showToast } from '@/utils/toast'
import NavBar from '@/components/NavBar.vue'
import AddTransactionForm from '@/components/AddTransactionForm.vue'
import TransactionOverview from '@/components/TransactionOverviewComponent.vue'
import TransactionHistory from './components/TransactionHistory.vue';


const income = ref(0);
const expenses = ref(0);
const history = ref(persisty.history ?? []);

income.value = persisty.income ?? 0
expenses.value = persisty.expenses ?? 0;

function calculateExpenses(history) {
  return history.reduce((acc, curr) => curr.category === 'expenses' ? acc + curr.amount : acc, 0);
}
function calculateIncome(history) {
  return history.reduce((acc, curr) => curr.category === 'income' ? acc + curr.amount : acc, 0);
}

async function handleNewTransaction(data) {
  history.value.push(data)
  income.value = calculateIncome(history.value);
  expenses.value = calculateExpenses(history.value);

  persisty.income = income.value;
  persisty.expenses = expenses.value;
  persisty.history = history.value;
  showToast("", "Transaction Added", true)
}

function clearLocalStorage() {
  persisty.clear()
  history.value = [];
  income.value = 0;
  expenses.value = 0;
}
</script>
<template>
  <NavBar />
  <main class="flex-1 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AddTransactionForm @new-transaction="handleNewTransaction" />
      <TransactionOverview :income="income" :expenses="expenses" :history="history" />
    </div>
    <TransactionHistory :history="history" @clear-data="clearLocalStorage()" />
  </main>
</template>
