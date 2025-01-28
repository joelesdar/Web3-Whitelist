"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ethers } from "ethers";

interface WalletContextProps {
  walletAddress: string | null;
  balance: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const switchToKiichainNetwork = async () => {
    // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
    if (typeof window.ethereum !== "undefined") {
      try {
        const kiichainNetwork = {
          chainId: "0x538", // 1336 hexadecimal
          chainName: "Kiichain Testnet",
          nativeCurrency: {
            name: "KII",
            symbol: "KII",
            decimals: 18,
          },
          rpcUrls: ["https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/"],
          blockExplorerUrls: ["https://app.kiichain.io/"],
        };

        // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [kiichainNetwork],
        });

        console.log("Red Kiichain agregada/cambiada correctamente.");
      } catch (error) {
        console.error("Error trying to chain/add the kii network:", error);
        alert("Error trying to chain/add the kii network. Please check that Metamask is already installed.");
      }
    } else {
      alert("MetaMask is not installed");
    }
  };

  const isKiichainNetwork = async (): Promise<boolean> => {
    // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
    if (typeof window.ethereum !== "undefined") {
      // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      return chainId === "0x538"; // 1336 en hexadecimal
    }
    return false;
  };

  const connectWallet = async () => {
    // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
    if (typeof window.ethereum !== "undefined") {
      try {
        if (!(await isKiichainNetwork())) {
          await switchToKiichainNetwork();
        }
        
        // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        setWalletAddress(account);

        const balance = await provider.getBalance(account);
        const formattedBalance = ethers.formatEther(balance);
        setBalance(formattedBalance);

        console.log("Billetera conectada:", account);
      } catch (error) {
        console.error("Error trying to connect the wallet:", error);
        alert("Error trying to connect the wallet");
      }
    } else {
      alert("MetaMask is not installed");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setBalance(null);
    console.log("Wallet disconnected");
  };

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        balance,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet debe usarse dentro de un WalletProvider");
  }
  return context;
};