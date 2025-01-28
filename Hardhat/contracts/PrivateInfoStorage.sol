// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract PrivateInfoStorage {
    string private kiiPrivateInfo;
    address private owner;
    mapping(address => bool) private walletExists;
    address[] private whitelist;

    event WalletAdded(address indexed wallet);
    event PrivateInfoUpdated(string newInfo);

    constructor() {
        owner = msg.sender;
        addWalletToWhitelist(0x5Ec605060d810669fd7134494C4AF17ab438CC92);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can execute this function");
        _;
    }

    modifier onlyWhitelist() {
        require(msg.sender == owner || walletExists[msg.sender], "Only whitelisted addresses can execute this function");
        _;
    }

    function addWalletToWhitelist(address _newWallet) public onlyOwner {
        require(!walletExists[_newWallet], "Wallet address already added");
        require(whitelist.length < 10, "Whitelist limit reached");
        whitelist.push(_newWallet);
        walletExists[_newWallet] = true;
        emit WalletAdded(_newWallet);
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getWhitelist() public onlyOwner view returns (address[] memory) {
        return whitelist;
    }

    function setKiiPrivateInfo(string memory _kiiPrivateInfo) public onlyOwner {
        kiiPrivateInfo = _kiiPrivateInfo;
        emit PrivateInfoUpdated(_kiiPrivateInfo);
    }

    function getKiiPrivateInfo() public onlyWhitelist view returns (string memory) {
        return kiiPrivateInfo;
    }
}