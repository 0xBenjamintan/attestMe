import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';

const Network = process.env.NEXT_PUBLIC_NETWORK
const EASContractAddress = process.env.NEXT_PUBLIC_EAS_CONTRACT_ADDRESS
const schemaUID = process.env.NEXT_PUBLIC_PAYMENT_ATTEST_SCHEMA_UID

export const readPaymentAttest = async (paymentAttestUid) => {
    if (paymentAttestUid == null) {
        return false;
    }

    if (typeof(paymentAttestUid) != "string") {
        return false;
    }

    if (paymentAttestUid.length != 66) {
        return false;
    }
    
    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress);
    
    // Gets a default provider (in production use something else like infura/alchemy)
    // const provider = new ethers.JsonRpcProvider(PROVIDER, BigInt(420))
    const provider = new ethers.AlchemyProvider(Network, process.env.NEXT_PUBLIC_ALCHEMY_API_KEY)

    // Connects an ethers style provider/signingProvider to perform read/write functions.
    // MUST be a signer to do write operations!
    eas.connect(provider);
    
    const attestation = await eas.getAttestation(paymentAttestUid);
    console.log(attestation);

    return attestation;
}

export const createPaymentAttest = async (postId, postOwnerAddress) => {
    if (postId == null || postOwnerAddress == null) {
        return false;
    }

    if (typeof(postId) != "string" || typeof(postOwnerAddress) != "string") {
        return false;
    }

    if (postOwnerAddress.length != 42) {
        return false;
    }

    const provider = new ethers.AlchemyProvider("optimism-goerli", process.env.NEXT_PUBLIC_ALCHEMY_API_KEY)
    const signer = new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        provider
    )

    const eas = new EAS(EASContractAddress);
    eas.connect(signer);

    // Initialize SchemaEncoder with the schema string
    const schemaEncoder = new SchemaEncoder("string postId,bool paymentMade");
    const encodedData = schemaEncoder.encodeData([
    { name: "postId", value: postId, type: "string" },
    { name: "paymentMade", value: true, type: "bool" },
    ]);

    const tx = await eas.attest({
    schema: schemaUID,
    data: {
        recipient: postOwnerAddress,
        expirationTime: 0,
        revocable: false, // Be aware that if your schema is not revocable, this MUST be false
        data: encodedData,
    },
    });

    const newAttestationUID = await tx.wait();

    console.log(newAttestationUID)
    return newAttestationUID;
}