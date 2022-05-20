<script lang="ts">
	import { selectedAccount, connected, chainData } from "svelte-web3";
	import { goto } from "$app/navigation";

	if (!$connected || !$selectedAccount) {
		goto("/");
	}
  
  let filter: string
</script>

<div class="bg-white">
	<div
		class="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8"
	>
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-xl font-semibold text-gray-900">Payments</h1>
				<p class="mt-2 text-sm text-gray-700">All payments for your customers</p>
			</div>
			<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
					>Export</button
				>
			</div>
		</div>
		<div class="lg:flex lg:justify-between">
			<div class="mt-10 w-full max-w-3xl">
				<label for="currency" class="block text-base font-medium text-gray-500"
					>Filter</label
				>
				<div class="mt-1.5 relative">
					<input
						id="currency"
						name="currency"
						class="appearance-none block w-full bg-none bg-white border border-gray-500 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            bind:value={filter}
            placeholder="Type any text to filter your payments"
					/>
				</div>
			</div>
			<div class="mt-10 w-full max-w-xs">
				<label for="currency" class="block text-base font-medium text-gray-500"
					>Currency</label
				>
				<div class="mt-1.5 relative">
					<select
						id="currency"
						name="currency"
						class="appearance-none block w-full bg-none bg-white border border-gray-500 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					>
						<option>Argentina (ARS)</option>
						<option>Australia (AUD)</option>
						<option selected>United States (USD)</option>
						<option>Canada (CAD)</option>
						<option>France (EUR)</option>
						<option>Japan (JPY)</option>
						<option>Nigeria (NGN)</option>
						<option>Switzerland (CHF)</option>
						<option>United Kingdom (GBP)</option>
					</select>
					<div
						class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"
					>
						<!-- Heroicon name: solid/chevron-down -->
						<svg
							class="h-4 w-4 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="px-4 sm:px-6 lg:px-8">
	<div class="mt-8 flex flex-col">
		<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div
					class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
				>
					<table class="min-w-full divide-y divide-gray-300">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>Transaction ID</th
								>
								<th
									scope="col"
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
									>Date</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Wallet</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Token</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Quantity</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>SKU</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Quantity</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Fiat amount</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Status</th
								>
								<th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6"
									>AAPS0L</td
								>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6"
									>2022/05/22</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900"
									>Chase &amp; Co.</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900"
									>{$chainData.nativeCurrency.symbol}</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">4.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">Couch</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">1.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$4,397.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">Confirmed</td>
								<td
									class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
								>
									<a href="#" class="text-indigo-600 hover:text-indigo-900"
										>Edit<span class="sr-only">, AAPS0L</span></a
									>
								</td>
							</tr>

							<!-- More transactions... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
