"use client";

import { ChainId, EthereumChainId } from "@injectivelabs/ts-types";
import { Wallet, WalletStrategy } from "@injectivelabs/wallet-ts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Injective wallet integration
      <div
        onClick={() => {
          const metamaskWallet = new WalletStrategy({
            chainId: ChainId.Mainnet,
            ethereumOptions: {
              ethereumChainId: EthereumChainId.Mainnet,
              // rpcUrl: alchemyRpcEndpoint
            },
          });
          metamaskWallet.setWallet(Wallet.Metamask);
          metamaskWallet.getAddresses().then((addresses) => {
            console.log(addresses);
            metamaskWallet
              .signArbitrary(addresses[0], "hello world")
              .then((d) => {
                console.log(d);
              });
          });
          metamaskWallet.onAccountChange((addrs) => console.log(addrs));
        }}
      >
        {Wallet.Metamask}
      </div>
      <div
        onClick={() => {
          const keplrWallet = new WalletStrategy({
            chainId: ChainId.Mainnet,
          });
          keplrWallet.setWallet(Wallet.Keplr);
          console.log(keplrWallet.strategies);
          keplrWallet.getAddresses().then((addresses) => {
            console.log(addresses);
            keplrWallet.signArbitrary(addresses[0], "hello world").then((d) => {
              console.log(d);
            });
          });
          keplrWallet.onAccountChange((addrs) => console.log(addrs));
        }}
      >
        Keplr
      </div>
    </main>
  );
}
