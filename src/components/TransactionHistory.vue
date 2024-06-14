<template>
     <div class="mt-6 bg-white rounded-lg shadow p-6">
            <h2 class="text-lg font-bold mb-4">Transaction History</h2>
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
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-06-01</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Paycheck</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-green-500">+$5000.00</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Income</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-06-03</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Rent</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-red-500">-$1500.00</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Expenses</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-06-05</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Groceries</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-red-500">-$250.00</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Expenses</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-06-10</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Freelance Work</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-green-500">+$1000.00</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Income</td>
                        </tr>
                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-06-15</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Utilities</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-red-500">-$200.00</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Expenses</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>