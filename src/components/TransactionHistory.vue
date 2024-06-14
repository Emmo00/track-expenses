<script setup>
defineProps(['history'])
const emit = defineEmits(['clearData'])

function clearLocalStorage() {
    emit('clearData')
}
</script>
<template>
    <div class="mt-6 bg-white rounded-lg shadow p-6">
        <div class="flex justify-between">
            <h2 class="text-lg font-bold mb-4">Transaction History</h2>
            <button class="bg-black text-white rounded-sm h-fit py-1 px-4" @click="clearLocalStorage()">Clear History</button>
        </div>
        <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Date
                        </th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Description
                        </th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Amount
                        </th>
                        <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                    <tr v-for="transaction in history.sort((a, b) => new Date(b.date) - new Date(a.date))"
                        :key="transaction.id"
                        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ transaction.date }}</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ transaction.description }}
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                            :class="transaction.category === 'income' ? 'text-green-500' : 'text-red-500'">+${{
                transaction.amount }}.00</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{
                transaction.category.toUpperCase() }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>