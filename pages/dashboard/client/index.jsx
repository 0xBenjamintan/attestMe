import Image from 'next/image'
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import NewForm from '@/components/ui/newForm';

function Home() {
  const [stage, setStage] = useState(0); // 0 = apply, 1 = job done, 2 = payout done
  const [selectedInterest, setSelectInterest] = useState(0);
  const [job, setJob] = useState({
      title: "Task 1", 
      description: "Project Description", 
      duration: "1 Hour", 
      price: "50 USD",
      listOfInterest: [
        "0x123456789012345678901234567890123456789a",
        "0x123456789012345678901234567890123456789b",
        "0x123456789012345678901234567890123456789c",
      ]
    }); 

  const assignOnClick = () => {
    setStage(1);
  }
  const jobDoneOnClick = () => {
    setStage(2);
  }


  return (
    <main>
      <div className="relative flex flex-col items-center lg:flex-row justify-center w-full mt-20 mb-20 gap-20">
        <div className="relative w-1/2 lg:w-1/3">
          <Card className="w-full h-auto p-6 space-y-4">
            <CardContent>
              <CardTitle className="text-4l grid place-items-center font-semibold text-gray-800 mb-3">Client Profile</CardTitle>
              <div className="grid place-items-center space-y-4">
                <div className="relative rounded-full overflow-hidden w-36 h-36">
                  <Image
                    src="/client.png" // Avatar via rainbowkit
                    alt="Metamask Profile"
                    width={144}
                    height={144}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className='mb-2'>Wallet Address: [WalletAddress]</p>
                  <p className='mb-2'>Number of Attested Payouts: [Data]</p>
                  <p className='mb-2'>Posted Projects: [Data]</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-1/2 lg:w-1/3">
          <div className="w-full h-auto">
            <Image
              src="/dashboard2.png" // Replace with the path to your image
              alt="Additional Image"
              width={840 * 1.0}
              height={840 * 1.0}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Card className="w-[450px] h-auto p-6 space-y-4 m-10">
          <CardHeader>
            <CardTitle className="text-4xl font-semibold text-gray-800 mb-3">
              Your Created Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
          <Card className="w-full h-auto p-4">
                    <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <div className="mt-2">
                        <CardDescription>{job.description}</CardDescription>
                        <CardDescription>{job.duration}</CardDescription>
                        <CardDescription>{job.price}</CardDescription>
                        {selectedInterest != 0 && (
                          <CardDescription>Assigned Interest: {selectedInterest}</CardDescription>
                        )}
                    </div>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-end">
                        {stage == 0 && (
                          // select interest
                          <div className="flex flex-col">
                            <Label>Choose Interest</Label>
                            <select
                              onChange={(e) => setSelectInterest(e.target.value)}
                              className="border border-gray-300 rounded-md w-full p-2"
                            >
                              {job.listOfInterest.map((interest, index) => {
                                return (
                                  <option key={index} value={interest}>
                                    {interest}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        )}
                        {stage == 0 && (
                          <button 
                          onClick={() => assignOnClick()}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Assign {selectedInterest} to Task
                          </button>
                        )}

                        {stage == 1 && (
                            <button
                            onClick={() => jobDoneOnClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Attest Job Completion
                            </button>
                        )}

                        {/* stage 2 done */}
                        {stage == 2 && (
                          <div className="flex flex-col">
                            DONE
                          </div>
                        )}
                    </div>
                    </CardContent>
                </Card>
          </CardContent>
        </Card>
        <NewForm />
      </div>
    </main>
  );
}




export default dynamic (() => Promise.resolve(Home), {ssr: false} )