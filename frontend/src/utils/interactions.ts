import { ethers  } from "ethers";
import PrivateInfoStorage from "../assets/PrivateInfoStorage.json";
import dotenv from "dotenv";

dotenv.config();

const CONTRACT_ADDRESS = "0xbaA432168A59E7D010BBAD0DC4D55eDD82832ff4";
const CONTRACT_ABI = PrivateInfoStorage.abi;
const privateKey = `0x${process.env.NEXT_PUBLIC_WALLET_API_KEY}`;

interface PrivateInfoStorageContractInterface {
  addWalletToWhitelist(walletAddress: string): Promise<void>;
  setKiiPrivateInfo: (privateInfo: string) => Promise<void>;
  getKiiPrivateInfo: () => Promise<string>;
  getOwner: () => Promise<string>;
  getWhitelist: () => Promise<string[]>;
}

export class PrivateInfoStorageContractClass implements PrivateInfoStorageContractInterface {

  private provider: ethers.JsonRpcProvider;
  private contract: ethers.Contract;
  private wallet: ethers.Wallet;
  private signer: ethers.Wallet;


  constructor() {
    this.provider = this.getProvider();
    if (!privateKey || privateKey.length !== 66 || !privateKey.startsWith("0x")) {
      console.log(privateKey);
      throw new Error("Clave privada no válida");
    }
    this.wallet = new ethers.Wallet(privateKey, this.provider);
    this.signer = this.wallet.connect(this.provider);
    this.contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, this.signer);
    // @ts-expect-error: `ethereum` no está definido en el tipo `Window`
    this.contract = this.contract.connect(this.signer);
    console.log(this.contract.getAddress());
  }

  getProvider = (): ethers.JsonRpcProvider => {
    const url = "https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/";
    const provider = new ethers.JsonRpcProvider(url, {
      chainId: 1336,
      name: "kiichain",
    });
    return provider;
  };

  async getOwner (): Promise<string> {
    const owner = await this.contract.getOwner();
    return owner;
  }

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

