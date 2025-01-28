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

  // Cambiar/agregar la red Kiichain
  const switchToKiichainNetwork = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const kiichainNetwork = {
          chainId: "0x538", // 1336 en hexadecimal
          chainName: "Kiichain Testnet",
          nativeCurrency: {
            name: "KII",
            symbol: "KII",
            decimals: 18,
          },
          rpcUrls: ["https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/"],
          blockExplorerUrls: ["https://app.kiichain.io/"],
        };

        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [kiichainNetwork],
        });

        console.log("Red Kiichain agregada/cambiada correctamente.");
      } catch (error) {
        console.error("Error al cambiar/agregar la red Kiichain:", error);
        alert("Error al cambiar/agregar la red Kiichain. Por favor, verifica que MetaMask esté instalado.");
      }
    } else {
      alert("MetaMask no está instalado");
    }
  };

  // Verificar si ya está conectado a Kiichain
  const isKiichainNetwork = async (): Promise<boolean> => {
    if (typeof window.ethereum !== "undefined") {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      return chainId === "0x538"; // 1336 en hexadecimal
    }
    return false;
  };

  // Conectar la billetera
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        if (!(await isKiichainNetwork())) {
          await switchToKiichainNetwork();
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        setWalletAddress(account);

        const balance = await provider.getBalance(account);
        const formattedBalance = ethers.formatEther(balance);
        setBalance(formattedBalance);

        console.log("Billetera conectada:", account);
      } catch (error) {
        console.error("Error al conectar la wallet:", error);
        alert("Error al conectar la billetera");
      }
    } else {
      alert("MetaMask no está instalado");
    }
  };

  // Desconectar la billetera
  const disconnectWallet = () => {
    setWalletAddress(null);
    setBalance(null);
    console.log("Billetera desconectada");
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

// Hook para usar el contexto
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet debe usarse dentro de un WalletProvider");
  }
  return context;
};
