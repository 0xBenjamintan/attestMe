import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="relative w-[420px] lg:w-1/3">
          <Card className="w-4/5 h-auto p-6 space-y-4">
            <CardContent>
              <CardTitle className="text-4l grid place-items-center font-semibold text-gray-800 mb-3">Freelancer Profile</CardTitle>
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
                <p>Wallet Address: [WalletAddress]</p>
                <p>Number of Attested Completions: [Data]</p>
                <p>Posted Projects: [Data]</p>
              </div>
              <p>Wallet Address: [Wallet Address]</p>
              <p>Number of Created Tasks: [Data]</p>
              <p>Number of Attestation Completions: [Data]</p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[340px] h-[400px] p-6 space-y-4">
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
      </div>

      {/* Dialog Button */}
      <DialogDemo />

      <Image
        src="/dashboard1.jpg"
        alt="Additional Image"
        width={840 * 0.7}
        height={840 * 0.7} 
        objectFit="cover"
      />
    </main>
  );
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            Edit your task post here. Tap on Save when ready.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Project Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Project Description
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Duration
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Price
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Save changes</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )