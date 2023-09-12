export const postABI = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "freelancer",
                    "type": "address"
                }
            ],
            "name": "InterestExpressed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "postCreator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "postDate",
                    "type": "uint256"
                }
            ],
            "name": "PostCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "winner",
                    "type": "address"
                }
            ],
            "name": "TaskWinnerAssigned",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_postTitle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_postContent",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_postPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_postDuration",
                    "type": "string"
                }
            ],
            "name": "createPost",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                }
            ],
            "name": "expressInterest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllPosts",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "postId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "postCreator",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "postTitle",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "postContent",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "postPrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "postDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "postDuration",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "postStatus",
                            "type": "bool"
                        },
                        {
                            "internalType": "address[]",
                            "name": "interestedFreelancers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address",
                            "name": "taskWinner",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "jobComplete",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "payoutComplete",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Post.PostStruct[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                }
            ],
            "name": "getInterestedFreelancers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                }
            ],
            "name": "getPost",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "postId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "postCreator",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "postTitle",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "postContent",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "postPrice",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "postDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "postDuration",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "postStatus",
                            "type": "bool"
                        },
                        {
                            "internalType": "address[]",
                            "name": "interestedFreelancers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address",
                            "name": "taskWinner",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "jobComplete",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "payoutComplete",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct Post.PostStruct",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                }
            ],
            "name": "getPostStatus",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getTotalPostsByUser",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_resolverAddressJobDone",
                    "type": "address"
                }
            ],
            "name": "setResolverAddressJobDone",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_resolverAddressPayoutDone",
                    "type": "address"
                }
            ],
            "name": "setResolverAddressPayoutDone",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "winner",
                    "type": "address"
                }
            ],
            "name": "setTaskWinner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                }
            ],
            "name": "updateJobComplete",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "postId",
                    "type": "uint256"
                }
            ],
            "name": "updatePayoutComplete",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
}

export const contractAddresses = {
    167005: "0x3a4F982b855589C9cc9c8d31dc69cc785412f285", //taiko
    5001: "0x74F574c522C3d4061Bda6b0a45064BDc52eD02C2", //mantle
    59140: "0x50d2E3ea37C9075edE8901d1c48bf687843eab4B",//Linea
    420: "0xc5D2c1fD7Ce5D37EC6222737cfdfD79cC1987Aa9" //optimism
}
