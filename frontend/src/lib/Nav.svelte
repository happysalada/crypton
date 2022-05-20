<script lang="ts">
	import {
		web3,
		selectedAccount,
		walletType,
		chainData,
	} from "svelte-web3";

	export let path: string;
	let mobileMenuOpen = false;
	let dropdownMenuOpen = false;
	let chainDropdownMenuOpen = false;
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	function toggleDropdownMenu() {
		dropdownMenuOpen = !dropdownMenuOpen;
	}
	function toggleChainDropdownMenu() {
		chainDropdownMenuOpen = !chainDropdownMenuOpen;
	}
  
  async function switchNetwork(chainId: number) {
    if ($chainData.chainId !== chainId) {
      try {
        await $web3.eth.currentProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: $web3.utils.toHex(chainId) }]
        });
      } catch (err) {
        console.log(err)
        const chain = getChainId(chainId);
      
        // This error code indicates that the chain has not been added to MetaMask
        if (err.code === 4902) {
          await $web3.eth.currentProvider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: chain.name,
                chainId: $web3.utils.toHex(chainId),
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: chain.rpc
              }
            ]
          });
        }
      }
    }
		chainDropdownMenuOpen = false;
  }
  
  function getChainId(desiredChainId: number): any {
    return chains.filter(({chainId}) => desiredChainId == chainId)[0] || chains[0]
  }
  
	$: src =
		$walletType && $walletType.toLowerCase().includes("metamask")
			? "/metamask-fox.svg"
			: "";
	const chains = [ {
			name: "Ethereum Mainnet",
			chain: "ETH",
			icon: "ethereum",
			rpc: ["https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com"],
			faucets: [],
			nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
			infoURL: "https://ethereum.org",
			shortName: "eth",
			chainId: 1,
			networkId: 1,
			slip44: 60,
      assetSrc: "https://defillama.com/chain-icons/rsz_ethereum.jpg",
			ens: { registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
			explorers: [
				{
					name: "etherscan",
					url: "https://etherscan.io",
					standard: "EIP3091",
				},
			],
		},
		{
			name: "Optimism",
			chain: "ETH",
			rpc: ["https://mainnet.optimism.io/"],
			faucets: [],
			nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
			infoURL: "https://optimism.io",
			shortName: "oeth",
			chainId: 10,
			networkId: 10,
      assetSrc: "https://defillama.com/chain-icons/rsz_optimism.jpg",
			explorers: [
				{
					name: "etherscan",
					url: "https://optimistic.etherscan.io",
					standard: "none",
				},
			],
		},
		{
			name: "Optimism Kovan",
			title: "Optimism Testnet Kovan",
			chain: "ETH",
			rpc: ["https://kovan.optimism.io/"],
			faucets: ["http://fauceth.komputing.org?chain=69&address=${ADDRESS}"],
			nativeCurrency: { name: "Kovan Ether", symbol: "KOR", decimals: 18 },
      assetSrc: "https://defillama.com/chain-icons/rsz_optimism.jpg",
			explorers: [
				{
					name: "etherscan",
					url: "https://kovan-optimistic.etherscan.io",
					standard: "EIP3091",
				},
			],
			infoURL: "https://optimism.io",
			shortName: "okov",
			chainId: 69,
			networkId: 69,
		},

		{
			name: "Polygon Mainnet",
			chain: "Polygon",
			rpc: [
				"https://polygon-rpc.com/",
				"https://rpc-mainnet.matic.network",
				"https://matic-mainnet.chainstacklabs.com",
				"https://rpc-mainnet.maticvigil.com",
				"https://rpc-mainnet.matic.quiknode.pro",
				"https://matic-mainnet-full-rpc.bwarelabs.com",
			],
			faucets: [],
			nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
			infoURL: "https://polygon.technology/",
			shortName: "MATIC",
      assetSrc: "https://defillama.com/chain-icons/rsz_polygon.jpg",
			chainId: 137,
			networkId: 137,
			slip44: 966,
			explorers: [
				{
					name: "polygonscan",
					url: "https://polygonscan.com",
					standard: "EIP3091",
				},
			],
		},
		{
			name: "Mumbai",
			title: "Polygon Testnet Mumbai",
			chain: "Polygon",
			rpc: [
				"https://matic-mumbai.chainstacklabs.com",
				"https://rpc-mumbai.maticvigil.com",
				"https://matic-testnet-archive-rpc.bwarelabs.com",
			],
			faucets: ["https://faucet.polygon.technology/"],
			nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      assetSrc: "https://defillama.com/chain-icons/rsz_polygon.jpg",
			infoURL: "https://polygon.technology/",
			shortName: "maticmum",
			chainId: 80001,
			networkId: 80001,
			explorers: [
				{
					name: "polygonscan",
					url: "https://mumbai.polygonscan.com",
					standard: "EIP3091",
				},
			],
		},
		{
			name: "Arbitrum One",
			chainId: 42161,
			shortName: "arb1",
			chain: "ETH",
			networkId: 42161,
      assetSrc: "https://defillama.com/chain-icons/rsz_arbitrum.jpg",
			nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
			rpc: [
				"https://arb1.arbitrum.io/rpc",
				"wss://arb1.arbitrum.io/ws",
			],
			faucets: [],
			explorers: [
				{
					name: "Arbiscan",
					url: "https://arbiscan.io",
					standard: "EIP3091",
				},
				{
					name: "Arbitrum Explorer",
					url: "https://explorer.arbitrum.io",
					standard: "EIP3091",
				},
			],
			infoURL: "https://arbitrum.io",
			parent: {
				type: "L2",
				chain: "eip155-1",
				bridges: [{ url: "https://bridge.arbitrum.io" }],
			},
		},
		{
			name: "Arbitrum Rinkeby",
			title: "Arbitrum Testnet Rinkeby",
			chainId: 421611,
			shortName: "arb-rinkeby",
			chain: "ETH",
			networkId: 421611,
			nativeCurrency: {
				name: "Arbitrum Rinkeby Ether",
				symbol: "ARETH",
				decimals: 18,
			},
			rpc: ["https://rinkeby.arbitrum.io/rpc", "wss://rinkeby.arbitrum.io/ws"],
			faucets: ["http://fauceth.komputing.org?chain=421611&address=${ADDRESS}"],
			infoURL: "https://arbitrum.io",
      assetSrc: "https://defillama.com/chain-icons/rsz_arbitrum.jpg",
			explorers: [
				{
					name: "arbitrum-rinkeby",
					url: "https://rinkeby-explorer.arbitrum.io",
					standard: "EIP3091",
				},
			],
			parent: {
				type: "L2",
				chain: "eip155-4",
				bridges: [{ url: "https://bridge.arbitrum.io" }],
			},
		},
		{
			name: "zkSync alpha testnet",
			title: "zkSync testnet",
			chainId: 421611,
			shortName: "zksync-testnet",
			chain: "ETH",
			networkId: 280,
			nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
			rpc: ["https://zksync2-testnet.zksync.dev"],
			infoURL: "https://arbitrum.io",
      assetSrc: "https://defillama.com/chain-icons/rsz_zksync.jpg",
			explorers: [
				{
					name: "zksync2",
					url: " https://zksync2-testnet.zkscan.io/",
					standard: "EIP3091",
				},
			],
		},
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800 h-full">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
		<div class="relative flex items-center justify-between h-full">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={toggleMobileMenu}
				>
					<span class="sr-only">Open main menu</span>
					<!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
					<svg
						class="{mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
					<svg
						class="{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div
				class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
			>
				<div class="flex-shrink-0 flex items-center">
					<img class="block lg:hidden h-8 w-auto" src="untitled.svg" alt="Crypton" />
					<img class="hidden lg:block h-8 w-auto" src="untitled.svg" alt="Crypton" />
				</div>
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

						<a href="/" class="{path === '/' ? 'nav-active' : 'nav-inactive'} nav-default"
							>Dashboard</a
						>

						<a
							href="/"
							class="{path === '/settings' ? 'nav-active' : 'nav-inactive'} nav-default"
							>Settings</a
						>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<!-- Chain dropdown -->
				<div class="ml-3 relative">
					<div>
						<button
							type="button"
							class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							on:click={toggleChainDropdownMenu}
						>
							<span class="sr-only">Open user menu</span>
							<img
								class="h-8 w-8 rounded-full"
								src={getChainId($chainData?.chainId).assetSrc || ""}
								alt=""
							/>
						</button>
					</div>

					<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
					<div
						class="{chainDropdownMenuOpen
							? ''
							: 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
					>
						{#each chains as { assetSrc, name, chainId }}
							<button
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0"
                on:click={() => switchNetwork(chainId)}
							>
								<div class="flex">
									<img class="h-8 w-8 rounded-full" src={assetSrc || ""} alt="" />
									<p class="m-auto">{name}</p>
								</div>
							</button>
						{/each}
					</div>
				</div>

				<!-- Profile dropdown -->
				<div class="ml-3 relative">
					<div>
						<button
							type="button"
							class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							on:click={toggleDropdownMenu}
						>
							<span class="sr-only">Open user menu</span>
							<img class="h-8 w-8 rounded-full" {src} alt="" />
						</button>
					</div>

					<!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
					<div
						class="{dropdownMenuOpen
							? ''
							: 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
					>
						<!-- Active: "bg-gray-100", Not Active: "" -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-0">Your Profile</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-1">Settings</a
						>
						<a
							href="#"
							class="block px-4 py-2 text-sm text-gray-700"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-2">Sign out</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="{mobileMenuOpen ? '' : 'hidden'} sm:hidden" id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1">
			<a
				href="/"
				class="{path === '/' ? 'nav-active' : 'nav-inactive'} nav-default block"
				>Dashboard</a
			>

			<a
				href="/"
				class="{path === '/settings' ? 'nav-active' : 'nav-inactive'} nav-default block"
				>Settings</a
			>
		</div>
	</div>
</nav>

<style>
	.nav-default {
		@apply text-gray-300 px-3 py-2 rounded-md text-sm font-medium;
	}

	.nav-default:hover {
		@apply bg-gray-700 text-white;
	}

	.nav-active {
		@apply bg-gray-900 text-white;
	}

	.nav-inactive {
		@apply text-gray-300;
	}

	.nav-inactive:hover {
		@apply bg-gray-700 text-white;
	}
</style>
