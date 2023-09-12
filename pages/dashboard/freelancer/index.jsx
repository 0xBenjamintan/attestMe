import { useState } from 'react';
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import dynamic from 'next/dynamic'
import {FreelancerJob} from '@/components/freelancerJob';

function Home() {
  const [jobs, setJobs] = useState([
    {
      title: "Task 1", 
      description: "Project Description", 
      duration: "1 Hour", 
      price: "50 USD"
    },
    {
      title: "Task 2", 
      description: "Project Description", 
      duration: "3 Hours", 
      price: "75 USD"
    },
    {
      title: "Task 3", 
      description: "Project Description", 
      duration: "5 Days", 
      price: "200 USD"
    },
    {
      title: "Task 4", 
      description: "Project Description", 
      duration: "2 Hours", 
      price: "30 USD"
    },
  ]); 

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
              {jobs.map((job, index) => {
                return (
                  <FreelancerJob title={job.title} description={job.description} duration={job.duration} price={job.price} key={index}/>
                )
              })}
            </div>
          </Card>
        </div>
      </div>

    </main>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )