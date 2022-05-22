export const chains = [ {
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
			chainId: 280,
			shortName: "zksync-testnet",
			chain: "ETH",
			networkId: 280,
			nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
			rpc: ["https://zksync2-testnet.zksync.dev"],
			infoURL: "https://v2-docs.zksync.io/dev/testnet/important-links.html",
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
