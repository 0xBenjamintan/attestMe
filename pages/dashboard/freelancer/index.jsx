import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import dynamic from 'next/dynamic'

function Home() {
  return (
    <main>
      <div className="relative flex flex-col items-center lg:flex-row justify-center w-full mt-20 mb-20 gap-20">
        <div className="w-1/2 lg:w-1/3">
          <Card className="w-full h-auto p-6 space-y-4">
          <CardContent>
            <CardTitle className="text-4l grid place-items-center font-semibold text-gray-800 mb-3">Freelancer Profile</CardTitle>
            <div className="grid place-items-center space-y-4">
              <div className="relative rounded-full overflow-hidden w-36 h-36">
                <Image
                  src="/freelancer.png" // Avatar via rainbowkit
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
        </div>
        <div className="w-1/2 lg:w-1/3">
          <div className="w-full h-auto">
            <Image
              src="/dashboard.png" // Replace with the path to your image
              alt="Additional Image"
              width={840 * 1.0}
              height={840 * 1.0}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
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
                  <div className="mt-2">
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
      </div>

    </main>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )