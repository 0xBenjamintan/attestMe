import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from "next/link";


const TwoButtonsLayout = () => {
  return (
    <div className="flex justify-center items-center my-20">
      {/* First Card */}
      <Card className="mr-4">
        <div className="flex flex-col items-center p-6">
          {/* Avatar Image */}
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/client.png"
            alt="Client Avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          {/* Title */}
          <CardTitle className="mt-8">Client</CardTitle>
          {/* Details */}
          <CardDescription className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardDescription>
          {/* Button */}
          <CardFooter>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10">
              <Link href="/dashboard/client">Select</Link>
            </button>
          </CardFooter>
        </div>
      </Card>

      {/* Second Card */}
      <Card>
        <div className="flex flex-col items-center p-6">
          {/* Avatar Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/freelancer.png"
            alt="Freelancer Avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          {/* Title */}
          <CardTitle className="mt-8">Freelancer</CardTitle>
          {/* Details */}
          <CardDescription className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardDescription>
          {/* Button */}
          <CardFooter>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10">
              <Link href="/dashboard/freelancer">Select</Link>
            </button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default TwoButtonsLayout;
