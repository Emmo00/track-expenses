<template>
    <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-bold mb-4">Add Transaction</h2>
        <form class="space-y-4">
            <div>
                <label for="date" class="block font-medium mb-1">
                    Date
                </label>
                <input id="date"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    type="date" value="" name="date" />
            </div>
            <div>
                <label for="description" class="block font-medium mb-1">
                    Description
                </label>
                <input id="description"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    type="text" value="" name="description" />
            </div>
            <div>
                <label for="amount" class="block font-medium mb-1">
                    Amount
                </label>
                <input id="amount"
                    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    type="number" value="0" name="amount" />
            </div>
            <div>
                <label for="category" class="block font-medium mb-1">
                    Category
                </label>
                <button type="button" role="combobox" aria-controls="radix-:rn:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed"
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <span style="pointer-events: none;">Income</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </button>
                <select aria-hidden="true" tabindex="-1" name="category"
                    style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
                    <option value="Income" selected>
                        Income
                    </option>
                    <option value="Expenses">Expenses</option>
                </select>
            </div>
            <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Add Transaction
            </button>
        </form>
    </div>
</template>