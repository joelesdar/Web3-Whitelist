import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    kiichain: {
      url: "https://json-rpc.dos.sentry.testnet.v3.kiivalidator.com/",
      chainId: 1336,
      accounts: [`0x${process.env.WALLET_API_KEY}`],
    },
  },
};

export default config;
