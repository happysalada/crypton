<script lang="ts">
	import { selectedAccount, connected } from "svelte-web3";
	import Web3Modal from "$lib/Web3Modal.svelte";
	import { chains } from "../../../data/chains"
	
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="relative bg-gray-50 overflow-hidden">
	<div class="relative py-4">
		<div>
			<div class="max-w-7xl mx-auto px-4 sm:px-6">
				<nav
					class="relative flex items-center justify-between sm:h-10 md:justify-center"
					aria-label="Global"
				>
					<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
						<div class="flex items-center justify-between w-full md:w-auto">
							<a href="/">
								<span class="sr-only">Crypton</span>
								<img class="h-8 w-auto sm:h-10" src="untitled.svg" alt="" />
							</a>
							<div class="-mr-2 flex items-center md:hidden">
								<button
									type="button"
									class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									aria-expanded="false"
									on:click={toggleMobileMenu}
								>
									<span class="sr-only">Open main menu</span>
									<!-- Heroicon name: outline/menu -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="hidden md:flex md:space-x-10">
						<a href="#features" class="font-medium text-gray-500 hover:text-gray-900"
							>Features</a
						>

						<a href="#contactus" class="font-medium text-gray-500 hover:text-gray-900"
							>Contact us</a
						>
					</div>
					<div
						class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
					>
						<span class="inline-flex rounded-md shadow">
							<Web3Modal />
						</span>
					</div>
				</nav>
			</div>

			<!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
			<div
				class="{mobileMenuOpen
					? ''
					: 'hidden'} absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			>
				<div
					class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
				>
					<div class="px-5 pt-4 flex items-center justify-between">
						<div>
							<img class="h-8 w-auto" src="untitled.svg" alt="" />
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								on:click={toggleMobileMenu}
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="px-2 pt-2 pb-3">
						<a
							href="#features"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>Features</a
						>

						<a
							href="#contactus"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							>Contact us</a
						>
					</div>
					<a
						href="#"
						class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
					>
						Log in
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="bg-gray-800">
	<div
		class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"
	>
		<div class="max-w-xl">
			<h2
				class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				Amazing Stationary
			</h2>
			<p class="mt-5 text-xl text-gray-400">
				Handcrafted with care, and now payable in Cryptocurrencies!
				Connect your wallet to see prices.
			</p>
		</div>
		<div class="mt-10 w-full max-w-xs">
			<label for="currency" class="block text-base font-medium text-gray-300"
				>Currency</label
			>
			<div class="mt-1.5 relative">
				<select
					id="currency"
					name="currency"
					class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
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
						class="h-4 w-4 text-white"
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

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="sr-only">Products</h2>

		<div
			class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$48</p>
			</a>

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
						alt="Olive drab green insulated bottle with flared screw lid and flat top."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
			</a>

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
						alt="Person using a pen to cross a task off a productivity paper card."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$89</p>
			</a>

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
			</a>

			<!-- More products... -->

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$48</p>
			</a>

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
						alt="Olive drab green insulated bottle with flared screw lid and flat top."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
			</a>

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
						alt="Person using a pen to cross a task off a productivity paper card."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$89</p>
			</a>

			<a href="#" class="group">
				<div
					class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
				>
					<img
						src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="w-full h-full object-center object-cover group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
				<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
			</a>
		</div>
	</div>
</div>

<!-- contact us -->

<div id="#contactus" class="bg-white">
	<!-- Header -->
	<div class="relative pb-32 bg-gray-800">
		<div class="absolute inset-0">
			<img
				class="w-full h-full object-cover"
				src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
				alt=""
			/>
			<div
				class="absolute inset-0 bg-gray-800 mix-blend-multiply"
				aria-hidden="true"
			/>
		</div>
		<div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
			<h1
				class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
			>
				Support
			</h1>
			<p class="mt-6 max-w-3xl text-xl text-gray-300">
				Our team is there if you need anything!
			</p>
		</div>
	</div>

	<!-- Overlapping cards -->
	<section
		class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
		aria-labelledby="contact-heading"
	>
		<h2 class="sr-only" id="contact-heading">Contact us</h2>
		<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
			<div class="flex flex-col bg-white rounded-2xl shadow-xl">
				<div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
					<div
						class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2"
					>
						<!-- Heroicon name: outline/phone -->
						<svg
							class="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-medium text-gray-900">Sales</h3>
					<p class="mt-4 text-base text-gray-500">
						For enterprise related features and anything custom, feel free to reach out!
					</p>
				</div>
				<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
					<a
						href="mailto: sales@crypton.dev"
						class="text-base font-medium text-indigo-700 hover:text-indigo-600"
						>Contact us<span aria-hidden="true"> &rarr;</span></a
					>
				</div>
			</div>

			<div class="flex flex-col bg-white rounded-2xl shadow-xl">
				<div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
					<div
						class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2"
					>
						<!-- Heroicon name: outline/support -->
						<svg
							class="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-medium text-gray-900">Technical Support</h3>
					<p class="mt-4 text-base text-gray-500">
						If you have any problem or suggestion, we are looking forward to helping you!
					</p>
				</div>
				<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
					<a
						href="mailto: support@crypton.dev"
						class="text-base font-medium text-indigo-700 hover:text-indigo-600"
						>Contact us<span aria-hidden="true"> &rarr;</span></a
					>
				</div>
			</div>

			<div class="flex flex-col bg-white rounded-2xl shadow-xl">
				<div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
					<div
						class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2"
					>
						<!-- Heroicon name: outline/newspaper -->
						<svg
							class="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-medium text-gray-900">Media Inquiries</h3>
					<p class="mt-4 text-base text-gray-500">
						For any marketing or press related needs. We are open to partnerships. You are
						welcome to reach out!
					</p>
				</div>
				<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
					<a
						href="mailto: press@crypton.dev"
						class="text-base font-medium text-indigo-700 hover:text-indigo-600"
						>Contact us<span aria-hidden="true"> &rarr;</span></a
					>
				</div>
			</div>
		</div>
	</section>
</div>
