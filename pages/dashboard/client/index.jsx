import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import NewForm from '@/components/ui/newForm';

function Home() {
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
            <CardDescription className="font-semibold">Details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="projectName" className="text-right font-semibold">
                  Project Name
                </Label>
                <p id="projectName">[Project Name]</p>
              </div>
              <div>
                <Label htmlFor="projectDetails" className="text-right font-semibold">
                  Project Details
                </Label>
                <p id="projectDetails">[Project Details]</p>
              </div>
              <div>
                <Label htmlFor="duration" className="text-right font-semibold">
                  Duration
                </Label>
                <p id="duration">[Duration]</p>
              </div>
              <div>
                <Label htmlFor="price" className="text-right font-semibold">
                  Price
                </Label>
                <p id="price">[Price]</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <NewForm />
      </div>
    </main>
  );
}




export default dynamic (() => Promise.resolve(Home), {ssr: false} )