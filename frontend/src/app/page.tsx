"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { PrivateInfoStorageContractClass } from "@/utils/interactions";
import { useWallet } from "@/app/context/WalletContext";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"


export default function Home() {
  const { walletAddress } = useWallet();
  const [whitelist, setWhitelist] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [owner, setOwner] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [kiiPrivateInfo, setKiiPrivateInfo] = useState<string>("");

  const contract = new PrivateInfoStorageContractClass();

  useEffect(() => {
    const fetchData = async () => {
      if (walletAddress) {
        setLoading(true);
        setError(null);
        try {
          const contractOwner = await contract.getOwner();
          setOwner(contractOwner);
          setIsOwner(contractOwner.toLowerCase() === walletAddress.toLowerCase());

          const whitelistData = await contract.getWhitelist();
          setWhitelist(whitelistData);
          setIsWhitelisted(whitelistData.some((addr) => addr.toLowerCase() === walletAddress.toLowerCase()));

          if (contractOwner.toLowerCase() === walletAddress.toLowerCase() || 
              whitelistData.some((addr) => addr.toLowerCase() === walletAddress.toLowerCase())) {
            const privateInfo = await contract.getKiiPrivateInfo();
            setKiiPrivateInfo(privateInfo);
          }
        } catch (err) {
          console.error("Error fetching data from contract:", err);
          setError("Error al obtener datos del contrato.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [walletAddress]);

  const updateKiiPrivateInfo = async (newInfo: string) => {
    try {
      setLoading(true);
      await contract.setKiiPrivateInfo(newInfo);
      setKiiPrivateInfo(newInfo);
      alert("Information updated successfully.");
    } catch (err) {
      console.error("Error updating KiiPrivateInfo:", err);
      setError("Error al actualizar el dato privado del contrato.");
    } finally {
      setLoading(false);
    }
  };

  const addToWhitelist = async (newAddress: string) => {
    try {
      setLoading(true);
      await contract.addWalletToWhitelist(newAddress);
      setWhitelist([...whitelist, newAddress]);
    } catch (err) {
      console.error("Error adding to whitelist:", err);
      setError("Error al agregar la dirección a la whitelist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white w-4/5 mx-auto rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-bgSecondary p-4 rounded-xl">
            {walletAddress ? (
              <Fragment>
                <div className="mt-4">
                  {isOwner ? (
                    <div>
                      <h3>Welcome, you are the Contract Owner!👑.</h3>
                      <div className="mt-4">
                        <h4 className="font-semibold text-lg mb-4">Add to the Whitelist</h4>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const target = e.target as HTMLFormElement;
                            const newAddress = (target.elements.namedItem("address") as HTMLInputElement).value;
                            addToWhitelist(newAddress);
                          }}
                        >
                          <Input
                            type="text"
                            name="address"
                            placeholder="Wallet Address"
                            className="p-2 border rounded bg-bgSecondary text-white w-1/2 inline-block border-white placeholder:text-white"
                          />
                          <Button type="submit" className="ml-2 p-2 bg-primary text-white font-semibold rounded">
                            Add Address
                          </Button>
                        </form>
                        <div className="bg-bgPrimary p-4 rounded-xl mt-4">
                          <h4 className="font-semibold text-lg mb-4">Whitelist</h4>
                          <ul>
                            {whitelist.map((addr, index) => (
                              <li className="pb-2" key={index}>{addr}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : isWhitelisted ? (
                    <div>
                      <h3 className="text-lg">You are in the whitelist!🚀</h3>
                      <div className="mt-4 p-4 bg-bgPrimary rounded-xl text-white">
                        <h4 className="font-semibold text-lg mb-4">Private Information:</h4>
                        <p>{kiiPrivateInfo || "Loading Private Information..."}</p>
                    </div>
                    </div>
                  ) : (
                    <p>You can&apos;t access this content.</p>
                  )}
                </div>
                {loading && <Alert className="text-white py-2 mt-4 bg-bgPrimary">
                  <AlertDescription>
                    Loading...
                  </AlertDescription>
                </Alert>}
                {error && <Alert className="text-white py-2 mt-4 bg-bgPrimary">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    {error}
                  </AlertDescription>
                </Alert>}
              </Fragment>
            ) : (
              <Fragment>
                <h2 className="text-3xl font-semibold mx-auto text-center">KiiChain Whitelist</h2>
                <p className="pt-4 text-center">🔗 For checking the Whitelist please log in with your wallet 🔗</p>
                <Image  className="mx-auto" src="/LogoWhite_KiiChain.png" alt="Wallet logo" width={200} height={100} />
              </Fragment>
            )}
          </div>
        <div className="bg-bgSecondary p-4 rounded-xl h-auto">
          {walletAddress ? (
            <Fragment>
              <div className="mt-4">
                {isOwner ? (
                  <Fragment>
                    <h4 className="font-semibold text-lg mb-4">Update Private Information</h4>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const newInfo = (form.elements.namedItem("privateInfo") as HTMLInputElement).value;
                        updateKiiPrivateInfo(newInfo);
                      }}
                    >
                      <Input
                        type="text"
                        name="privateInfo"
                        placeholder="New Private Info"
                        className="p-2 border rounded bg-bgSecondary text-white w-1/2 inline-block placeholder:text-white border-white"
                      />
                      <Button type="submit" className="ml-2 p-2 bg-primary text-white font-semibold rounded">
                        Update Info
                      </Button>
                    </form>
                    <div className="mt-4 p-4 bg-bgPrimary rounded-xl text-white">
                      <h4 className="font-semibold text-lg mb-4">Private Information:</h4>
                      <p>{kiiPrivateInfo || "Loading Private Information..."}</p>
                    </div>
                  </Fragment>
                ) : isWhitelisted ? (
                  <Fragment>
                    <img className="mx-auto w-full rounded-lg" src="/Web3-banner.webp" alt="Wallet logo"/>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="mt-4 p-4 bg-bgPrimary rounded-xl text-white">
                      <h4 className="font-semibold text-lg mb-4">Private Information:</h4>
                      <p>{kiiPrivateInfo || "Loading Private Information..."}</p>
                    </div>
                  </Fragment>
                )}
              </div>
            </Fragment>
              ) : (
            <Fragment>
              <img className="mx-auto w-full rounded-lg" src="/KiiChain-banner.webp" alt="Wallet logo"/>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
