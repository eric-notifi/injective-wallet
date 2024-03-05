"use client";
import Image from "next/image";
import { useEffect } from "react";

// import { Web3Exception } from "@injectivelabs/exceptions";
// import { TxRaw } from "@injectivelabs/sdk-ts";
import { ChainId, EthereumChainId } from "@injectivelabs/ts-types";
import { Wallet, WalletStrategy } from "@injectivelabs/wallet-ts";

export default function Home() {
  useEffect(() => {
    const walletStrategy = new WalletStrategy({
      chainId: ChainId.Mainnet,
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Injective wallet integration
    </main>
  );
}
