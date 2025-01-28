import { ethers  } from "ethers";
import PrivateInfoStorage from "../assets/PrivateInfoStorage.json";
import dotenv from "dotenv";

dotenv.config();

const CONTRACT_ADDRESS = "0xaCd7FBcE6C537a9C31a91F094F691Dc8d2fF8202" as string;
const CONTRACT_ABI = PrivateInfoStorage.abi as any;
const privateKey = process.env.WALLET_API_KEY as string;

interface PrivateInfoStorageContractInterface {
  addWalletToWhitelist(walletAddress: string): Promise<void>;
  setKiiPrivateInfo: (privateInfo: string) => Promise<void>;
  getKiiPrivateInfo: () => Promise<string>;
  getWhitelist: () => Promise<string[]>;
}

export class PrivateInfoStorageContractClass implements PrivateInfoStorageContractInterface {

  private provider: ethers.JsonRpcProvider;
  private contract: ethers.Contract;
  private wallet: ethers.Wallet;
  private signer: ethers.Wallet;


  constructor() {
    this.provider = this.getProvider();
    this.wallet = new ethers.Wallet(privateKey, this.provider);
    this.signer = this.wallet.connect(this.provider);
    this.contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, this.signer);
    this.contract = this.contract.connect(this.signer);
  }

  getProvider = (): ethers.JsonRpcProvider => {
    const url = "https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/";
    const provider = new ethers.JsonRpcProvider(url, {
      chainId: 1336,
      name: "kiichain",
    });
    return provider;
  };

  async getKiiPrivateInfo (): Promise<string> {
    const privateInfo = await this.contract.getKiiPrivateInfo();
    return privateInfo;
  }

  async setKiiPrivateInfo (privateInfo: string): Promise<void> {
    const tx = await this.contract.setKiiPrivateInfo(privateInfo);
    await tx.wait();
  }

  async addWalletToWhitelist (walletAddress: string): Promise<void> {
    const tx = await this.contract.addWalletToWhitelist(walletAddress);
    await tx.wait();
  }

  async getWhitelist (): Promise<string[]> {
    const whitelist = await this.contract.getWhitelist();
    return whitelist;
  }

}

