// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract PrivateInfoStorage {
    string private kiiPrivateInfo;

    function setKiiPrivateInfo(string memory _kiiPrivateInfo) public {
        kiiPrivateInfo = _kiiPrivateInfo;
    }

    function getKiiPrivateInfo() public view returns (string memory) {
        return kiiPrivateInfo;
    }
}