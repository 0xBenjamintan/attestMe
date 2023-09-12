import { readPaymentAttest, createPaymentAttest } from "../../components/web3/paymentAttest";
import { readJobAttest, createJobAttest } from "../../components/web3/jobAttest";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { Button } from "react-day-picker";

const samplePaymentAttestUID = "0x10f400eb5174572f21bdb7f9a7e4163423de441820ce7357d4c1831054aa28c9"
const sampleJobAttestUID = "0x73c98a1520e77da30b98f38447971290c3606c6087b0a31c6548ddd4fde48e46"

const readSamplePayment = async () => {
    const attestation = await readPaymentAttest(samplePaymentAttestUID);
    console.log("Payment = ", attestation)
}

const readSampleJob = async () => {
    const attestation = await readPaymentAttest(sampleJobAttestUID);
    console.log("Job = ", attestation)
}

export default function PaymentMade() {
    var postId = "0x1"
    var postOwnerAddress = "0xe45d2776D7ff718Ee62DE28d23c16CcC0aE889a7"

    useEffect( () => {
        readSamplePayment()
        readSampleJob()
    }, [])

    return (
        <div className="flex flex-col h-[100vh] justify-center align-center gap-5">
            <button onClick={() => createPaymentAttest(postId, postOwnerAddress)}>Create Payment Attestation</button>
            <button onClick={() => createJobAttest(postId, postOwnerAddress)}>Create Job Attestation</button>
        </div>
    )
}