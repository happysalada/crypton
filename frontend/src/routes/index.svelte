<script lang="ts">
	async function submitForm(event: Event) {
		event.preventDefault();
		console.log("trying to log in");
	}
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50 overflow-hidden h-screen">
	<div
		class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
		aria-hidden="true"
	>
		<div class="relative h-full max-w-7xl mx-auto">
			<svg
				class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
				width="404"
				height="784"
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="f210dbf6-a58d-4871-961e-36d5016a0f49"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width="404"
					height="784"
					fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
				/>
			</svg>
			<svg
				class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
				width="404"
				height="784"
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					width="404"
					height="784"
					fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
				/>
			</svg>
		</div>
	</div>

	<div class="relative pt-6 pb-16 sm:pb-24 h-full">
		<div>
			<div class="max-w-7xl mx-auto px-4 sm:px-6">
				<nav
					class="relative flex items-center justify-between sm:h-10 md:justify-center"
					aria-label="Global"
				>
					<div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
						<div class="flex items-center justify-between w-full md:w-auto">
							<a href="/">
								<span class="sr-only">Workflow</span>
								<img
									class="h-8 w-auto sm:h-10"
									src="untitled.svg"
									alt=""
								/>
							</a>
							<div class="-mr-2 flex items-center md:hidden">
								<button
									type="button"
									class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									aria-expanded="false"
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

						<a href="#contactus" class="font-medium text-gray-500 hover:text-gray-900">Contact us</a>
					</div>
					<div
						class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
					>
						<span class="inline-flex rounded-md shadow">
							<a
								href="#"
								class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
							>
								Log in
							</a>
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
				class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			>
				<div
					class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
				>
					<div class="px-5 pt-4 flex items-center justify-between">
						<div>
							<img
								class="h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								alt=""
							/>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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

		<main class="max-w-7xl px-4 flex flex-col justify-center h-full text-center">
			<h1
				class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
			>
				<span class="block xl:inline">Cryptocurrency</span>
				<span class="block text-indigo-600 xl:inline">payment processor</span>
			</h1>
			<p
				class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
			>
				Easily accept cryptocurrency payments on your website!
			</p>
			<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
				<div class="rounded-md shadow">
					<a
						href="/signup"
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
					>
						Sign up
					</a>
				</div>
				<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
					<a
						href="https://github.com/happysalada/crypton"
						class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
					>
						Self hosted
					</a>
				</div>
			</div>
		</main>
	</div>
</div>

<!-- feature section -->
<div id="features" class="py-12 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
				Payments
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
			>
				A better way to receive payments
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
				cupiditate veritatis in accusamus quisquam.
			</p>
		</div>

		<div class="mt-10">
			<dl
				class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
			>
				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
						>
							<!-- Heroicon name: outline/globe-alt -->
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
									d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							10X cheaper than credit card!
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						we only charge 0.1% of your transaction amount (on top of network fees).
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
						>
							<!-- Heroicon name: outline/scale -->
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
									d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">
							Convert to stable coins as needed
						</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						You can convert to stable coins automatically (we don't charge fees on top of
						the decentralized exchange you choose).
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
						>
							<!-- Heroicon name: outline/lightning-bolt -->
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
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Fast payments</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Transactions confirmed in seconds with L2 solutions like Polygon, zkSync, and
						arbitrum.
					</dd>
				</div>

				<div class="relative">
					<dt>
						<div
							class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
						>
							<!-- Heroicon name: outline/annotation -->
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
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								/>
							</svg>
						</div>
						<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Open source</p>
					</dt>
					<dd class="mt-2 ml-16 text-base text-gray-500">
						Support for any new currency can be added easily.
					</dd>
				</div>
			</dl>
		</div>
	</div>
</div>

<!-- contact us -->

<div id="#contactus" class="bg-white">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
    <div class="divide-y-2 divide-gray-200">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
        <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Support</h3>
            <dl class="mt-2 text-base text-gray-500">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>support@crypton.dev</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Press</h3>
            <dl class="mt-2 text-base text-gray-500">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>press@crypton.dev</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Join our team</h3>
            <dl class="mt-2 text-base text-gray-500">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>join@crypton.dev</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Say hello</h3>
            <dl class="mt-2 text-base text-gray-500">
              <div>
                <dt class="sr-only">Email</dt>
                <dd>hi@crypton.dev</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>