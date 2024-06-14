<script setup>
import { ref } from 'vue';
import { showToast } from '@/utils/toast'

const date = ref();
const description = ref("");
const amount = ref(0);
const category = ref();
const emit = defineEmits(['newTransaction'])

function handleSubmit() {
    if (!(date.value && description.value && amount.value && category.value)) {
        showToast("Error", "All fields are required", false);
        return;
    }
    emit('newTransaction', {
        date: date.value,
        description: description.value,
        amount: amount.value,
        category: category.value
    })
    date.value = null
    description.value = null
    amount.value = null
    category.value = null
}
</script>
<template>
    <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-bold mb-4">Add Transaction</h2>
        <form class="space-y-4">
            <div>
                <label for="date" class="block font-medium mb-1">Date</label>
                <input type="date" id="date"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    name="date" v-model="date" />
            </div>
            <div>
                <label for="description" class="block font-medium mb-1">Description</label>
                <input type="text" id="description"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    name="description" v-model="description" />
            </div>
            <div>
                <label for="amount" class="block font-medium mb-1">Amount</label>
                <input type="number" id="amount"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    name="amount" v-model="amount" />
            </div>
            <div>
                <label for="category" class="block font-medium mb-1">
                    Category
                </label>
                <select id="category" v-model="category"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option disabled>Choose Category</option>
                    <option value="income">Income</option>
                    <option value="expenses">Expenses</option>
                </select>
            </div>
            <button @click.prevent="handleSubmit"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white h-10 px-4 py-2">
                Add Transaction
            </button>
        </form>
    </div>
</template>
