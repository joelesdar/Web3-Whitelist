# Web3-Whitelist
<p>Web3 Whitelist is a dapp deployed on KiiChain testnet that allows the users to register in a very exclusive whitelist of 10 addresses, besides having a panel for the owner of the smart contract</p>
<br/>
<br/>
<h2>🤖Stack</h2>
<ul>
  <li>Next.js 15</li>
  <li>React.js 19</li>
  <li>Solidity</li>
  <li>Hardhat</li>
  <li>Ethers.js</li>
  <li>KiiChain Testnet</li>
  <li>TailwindCSS</li>
  <li>shadcn/ui</li>
  <li>Metamask</li>
</ul>
<br/>
<h2>Requirements</h2>
<ul>
  <li>Node.js 20</li>
  <li>NPM 9</li>
  <li>Metamask</li>
  <li><a href="https://docs.kiiglobal.io/docs/learn/getting-started/connect-wallet-to-explorer-app" target="_blank">Add KiiChain Tesnet Network to Metamask</a></li>
  <li><a href="https://app.kiichain.io/faucet" target="_blank">Claim some KII Tokens for the transactions</a></li>
  <li>Code Editor</li>
  <li>Node.js 20</li>
</ul>
<br/>
<h2>🧩Installation</h2>
<ol>
  <li>Clone this repository into your computer</li>
  <li>Open the hardhat folder and run `npm install` to install all the dependencies</li>
  <li>Copy the private key from your Metamask and, base on the structure of the .env.example file, create a .env file and copy the private key</li>
  <li>Run `npx hardhat compile`to compile the smart contract</li>
  <li>Run `npx hardhat ignition deploy ignition/modules/PrivateInfoStorage.ts --network kiichain` to deploy the contract</li>
  <li>Go to the frontend folder and, base on the .env.example file there, create a .env file and paste the contract address just generated by Hardhat, and also paste the private key</li>
  <li>Open the file: Hardhat/ignition/deployments/artifacts/PrivateInfoStorageModule#PrivateInfoStorage.json and copy all the data</li>
  <li>Open the file: frontend/src/assets/PrivateInfoStorage.json and paste and replace all the data</li>
  <li>In the frontend root, run `npm install` to install all the pending frontend dependencies</li>
  <li>Run `npm run dev`</li>
  <li>Open localhost:3000 on your browser</li>
</ol>
<br/>
<p>😁 Interact with the dapp and create your exclusive Whitelist.</p>
<p>⚠️ To add a new address in the Whitelist, it is necessary this one to be already connected with the KiiChain Testnet Network. Only addresses compatible with KiiChain are allowed</p>
<br/>
<h3>Demo</h3>
<a href="https://web3-whitelist-fz73.vercel.app/" target="_blank">🚗 Demo</a>
<br/>
<h3>Contract</h3>
<ul>
  <li>📃 0xaCd7FBcE6C537a9C31a91F094F691Dc8d2fF8202</li>
  <li>🔗 <a href="https://app.kiichain.io/account/0xaCd7FBcE6C537a9C31a91F094F691Dc8d2fF8202" target="_blank">BlockExplorer</a></li>
</ul>
<br/>
<h3>💙From LATAM to the World🌎</h3>
