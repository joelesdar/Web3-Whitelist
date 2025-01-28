"use client";

import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel } from "@/app/components/ui/dropdown-menu";
import { useWallet } from "@/app/context/WalletContext";

const Header: React.FC = () => {
  const { walletAddress, balance, connectWallet, disconnectWallet } = useWallet();

  return (
    <header className="bg-background text-white border-b border-highlight">
      <nav className="mx-auto flex items-center justify-between p-8">
        <Image src="/kiichain.svg" alt="KiiChain logo" width={131} height={23} priority />
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-bgSecondary p-2 rounded-lg shadow-lg flex items-center gap-2">
              <Image src="/wallet.svg" alt="Wallet logo" width={16} height={16} />
              {walletAddress ? `0x${walletAddress.slice(2, 6)}...${walletAddress.slice(walletAddress.length - 4)}` : "Connect Wallet"}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-bgSecondary text-white">
              {walletAddress && <DropdownMenuLabel className="w-full px-4 py-2 text-left">{`Balance: ${balance?.slice(0, 6)} KII`}</DropdownMenuLabel>}
              <DropdownMenuItem
                onClick={walletAddress ? disconnectWallet : connectWallet}
                className="w-full px-4 py-2 text-left hover:bg-opacity-10 hover:bg-white"
              >
                {walletAddress ? "Disconnect Wallet" : "Metamask"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;