<script>
  import { defaultEvmStores, web3, selectedAccount, walletType, connected, chainId, chainData } from 'svelte-web3'
  import { Balance } from 'svelte-web3/components'
  import { goto } from "$app/navigation"
  import Web3Modal from "web3modal";
  import { variables } from '$lib/variables';
  // import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
  const WalletConnectProvider = window.WalletConnectProvider.default
  // import WalletConnectProvider from "@walletconnect/web3-provider";
  const disable = () => defaultEvmStores.disconnect()
  let web3Modal
  const enable = async () => {
    if (web3Modal) web3Modal.clearCachedProvider()
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: { infuraId: variables.infuraId }
        },
        // coinbasewallet: {
        //   package: CoinbaseWalletSDK,
        //   options: {
        //     appName: "crypton",
        //     infuraId: "7b305244a8dc444f9cdd411c1a0b10cf"
        //   }
        // },
      },
      disableInjectedProvider: false,
    })
    const provider = await web3Modal.connect()
    defaultEvmStores.setProvider(provider)
  }
  const login = async () => {
    console.log('$web3.eth.getChainId', await $web3.eth.getChainId())
    goto("/dashboard")
  }
  $: if ($connected && $web3) login()
</script>

{#if $web3.version}
  {#if $connected}
    <button class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50" on:click="{disable}">Logout</button>
  {:else}
    <button class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50" on:click="{enable}">Login</button>
  {/if}
{/if}

