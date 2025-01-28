"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PrivateInfoStorageContractClass } from "@/utils/interactions";
import { useWallet } from "@/app/context/WalletContext";

export default function Home() {

  const { walletAddress } = useWallet();

  // const [whitelist, setWhitelist] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchWhitelist = async () => {
  //     const newWhitelist = await getWhitelistHandler();
  //     setWhitelist(newWhitelist);
  //   };
  //   fetchWhitelist();
  // }, []);

  
  // const getWhitelistHandler = async () => {
  //   const contractMethods = new PrivateInfoStorageContractClass();
  //   const whitelist = await contractMethods.getWhitelist();
  //   console.log(whitelist);
  //   return whitelist;
  // }
  
  
  // console.log(whitelist);
  // const [privateInfo, setPrivateInfo] = useState<string>("");
  // const contractMethods = new PrivateInfoStorageContractClass();

  // const fetchPrivateInfo = async () => {
  //   const fetchedPrivateInfo = await contractMethods.getKiiPrivateInfo();
  //   setPrivateInfo(fetchedPrivateInfo);
  // }
  // useEffect(() => {
  //   fetchPrivateInfo();
  // }, []);



  return (
    <div className="text-white w-4/5 mx-auto rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {walletAddress ?
        (<h2>Conectado </h2>)
        :(<div className="bg-bgSecondary p-4 rounded-xl">
          <h1 className="text-3xl font-semibold">Whitelist</h1>
          <p>Welcome to the Kiichain Whitelist</p>
          <p>For checking the Whitelist please log in with your wallet</p>
        </div>)}
        <div className="bg-bgSecondary p-4 rounded-xl">
          <h2 className="text-3xl font-semiWhitelistbold">Whitelist</h2>
          <Image src="/LogoWhite_KiiChain.png" alt="Wallet logo" width={160} height={100} />
        </div>
      </div>
    </div>
  );
}
