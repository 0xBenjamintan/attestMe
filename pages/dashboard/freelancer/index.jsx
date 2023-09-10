import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import dynamic from 'next/dynamic'

function Home() {
  return (
    <main>
      <div className="relative w-[420px] lg:w-1/3 mt-20">
        <Card className="w-17/20 h-auto p-6 space-y-4">
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
              <p>Wallet Address: [Wallet Address]</p>
              <p>Number of Attested Completions: [Data]</p>
              <p>Posted Projects: [Data]</p>
            </div>
          </CardContent>
        </Card>
        <div className="w-7/10 h-auto">
          {/* Add your image here with the same dimensions as the card */}
          <Image
            src="/dashboard.jpg" // Replace with the path to your image
            alt="Additional Image"
            width={840 * 0.7}
            height={840 * 0.7} 
            objectFit="cover"
          />
        </div>
      </div>


        <div className="w-1/3 lg:w-2/3 lg:pl-4">
          <Card className="w-full h-auto p-4 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Projects:</h2>
            <div className="space-y-4">
              {/* Project 1 */}
              <Card className="w-full h-auto p-4">
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <div className="mt-2"> {/* Add margin-top for spacing */}
                    <CardDescription>Project Description</CardDescription>
                    <CardDescription>Duration</CardDescription>
                    <CardDescription>Price</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Project 1's Details*/}
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="w-full h-auto p-4">
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <div className="mt-2"> {/* Add margin-top for spacing */}
                    <CardDescription>Project Description</CardDescription>
                    <CardDescription>Duration</CardDescription>
                    <CardDescription>Price</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Project 2's Details*/}
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>

    </main>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )