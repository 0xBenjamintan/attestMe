import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
                    src="/images/metamask-profile.jpg" // Avatar via rainbowkit
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
            </CardContent>
          </Card>
        </div>

        <div className="w-1/3 lg:w-2/3 lg:pl-4">
          <Card className="w-full h-auto p-4 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Projects:</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Projects(Sub cards) */}
              <Card className="w-full h-auto p-4 space-y-4">
                {/* Project 1's Info */}
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>Project Description</CardDescription>
                  <CardDescription>Duration</CardDescription>
                  <CardDescription>Price</CardDescription>                
                </CardHeader>
                <CardContent>
                  {/* Project 1's Details*/}
                </CardContent>
              </Card>

              <Card className="w-full h-auto p-4 space-y-4">
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>Project Description</CardDescription>
                  <CardDescription>Duration</CardDescription>
                  <CardDescription>Price</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )