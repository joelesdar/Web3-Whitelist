"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

const Header = () => {

  return (
    <header className="bg-background text-white border-b border-highlight">
      <nav className="mx-auto flex items-center justify-between p-8">
      <Image
          src="/kiichain.svg"
          alt="KiiChain logo"
          width={131}
          height={23}
          priority
        />
        <div className="flex items-center gap-4">
          
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-bgSecondary p-2 rounded-lg shadow-lg flex items-center gap-2">
            <Image
              src="/wallet.svg"
              alt="Wallet logo"
              width={16}
              height={16}
            />
            Connect Wallet
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-bgSecondary text-white">
            <DropdownMenuItem className="w-full px-4 py-2 text-left hover:bg-opacity-10 hover:bg-white">Metamask</DropdownMenuItem>
            <DropdownMenuItem className="w-full px-4 py-2 text-left hover:bg-opacity-10 hover:bg-white">Keplr</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
 
export default Header;