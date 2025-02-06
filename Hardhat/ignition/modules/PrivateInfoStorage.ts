import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PrivateInfoStorageModule = buildModule("PrivateInfoStorageModule", (m) => {

  const privateInfoStorage = m.contract("PrivateInfoStorage", ["0x5Ec605060d810669fd7134494C4AF17ab438CC92"]);

  return { privateInfoStorage };
});

export default PrivateInfoStorageModule;