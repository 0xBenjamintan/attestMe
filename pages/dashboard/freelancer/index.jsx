import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { avatar } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          AttestMe
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton />
        </div>
      </div>

      <div className="relative w-[420px] lg:w-1/3">
        <Card className="w-7/10 h-auto p-6 space-y-4"> {/* Change w-4/5 to w-7/10 */}
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
              <p>User's Address: [User's Address]</p>
              <p>Number of Attested Completions: [Data]</p>
              <p>Posted Projects: [Data]</p>
            </div>
          </CardContent>
        </Card>
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