// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "forge-std/Script.sol";
import {Post} from "../src/Post.sol";

contract Deploy is Script {
    function run() external {
        // set up deployer
        // uint256 privKey = vm.envUint("PRIVATE_KEY");
        uint256 privKey = vm.envUint(
            "e9cd33b499740d6f2b0d6241a26cad47e69d70e53a9ad4adb37fc418d120b3c6"
        );

        address deployer = vm.rememberKey(privKey);
        // log deployer data
        console2.log("Deployer: ", deployer);
        console2.log("Deployer Nonce: ", vm.getNonce(deployer));

        vm.startBroadcast(deployer);

        // deploy AttestRecipient contract
        Post post = new Post();

        vm.stopBroadcast();

        // log deployment data
        console2.log("Post Contract Address: ", address(post));
    }
}
