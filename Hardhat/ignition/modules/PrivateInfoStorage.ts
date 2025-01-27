import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PrivateInfoStorageModule = buildModule("PrivateInfoStorageModule", (m) => {

  const privateInfoStorage = m.contract("PrivateInfoStorage");

  return { privateInfoStorage };
});

export default PrivateInfoStorageModule;