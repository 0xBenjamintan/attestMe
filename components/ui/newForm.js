import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'

const NewForm = () => {

  return (
    <Card className="w-[500px]">
        <div className=" ml spacing-2 w-full">
            <h1 className='font-bold text-lg mb-6 mt-6 text-center'>Create Task</h1>

                <h2 className='mb-4'>Task Name: <input className="placeholder:text-blue-300 placeholder:italic w-96 px-5 py-2 rounded-full outline-none border" placeholder='Task Name'></input> 
                    
                </h2>    

                <h2 className='mb-4'>Details: <input className="placeholder:text-blue-300 placeholder:italic w-96 px-5 py-2 rounded-full outline-none border" placeholder='Task Details'></input> 
          
                </h2>

                <h2 className='mb-4'>Price: <input className="placeholder:text-blue-300 placeholder:italic w-96 px-5 py-2 rounded-full outline-none border" placeholder='Price'></input> 
                  
                </h2>

                <h2 className='mb-4'>Duration: <input className="placeholder:text-blue-300 placeholder:italic w-96 px-5 py-2 rounded-full outline-none border" placeholder='Duration'></input> 
            
                </h2>
        </div>

        <div className="ml spacing-2 text-center">
            <Button type="submit" variant="outline" className="btn btn-primary mb-4 mt-4">
                Create Task
            </Button>
        </div>    
    </Card>
  );
};

export default dynamic (() => Promise.resolve(NewForm), {ssr: false} )
