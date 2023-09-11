import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

const NewForm = () => {

  return (
    <Card>
        <div className=" ml spacing-2 w-auto text-center">
            <h1>Create Task</h1>

                <h2>Task Name: <input className="placeholder=“Task Name"></input> 
                    <input class="placeholder:text-blue-300 placeholder:italic 
                         placeholder: w-96 px-5 py-2 rounded-full outline-none"   
                         placeholder="Your Task Name" 
                    />
                </h2>    

                <h2>Details: <input className="placeholder:"></input> 
                    <input class="placeholder:text-blue-300 placeholder:italic 
                         placeholder: w-96 px-5 py-2 rounded-full outline-none"   
                         placeholder="Task Details"
                    />
                </h2>

                <h2>Price: <input className="placeholder:"></input> 
                    <input class="placeholder:text-blue-300 placeholder:italic 
                         placeholder: w-96 px-5 py-2 rounded-full outline-none"   
                         placeholder="Task Price" 
                    />
                </h2>

                <h2>Duration: <input className="placeholder:"></input>
                    <input class="placeholder:text-blue-300 placeholder:italic 
                         placeholder: w-96 px-5 py-2 rounded-full outline-none"   
                         placeholder="Task Duration" 
                    />
                </h2>
        </div>

        <div className="ml spacing-2 text-center">
            <Button type="submit" className="btn btn-primary">
                Create Task
            </Button>

            <Button className="btn btn-secondary ml-2">
                Create Post Icon
            </Button>
        </div>    
    </Card>
  );
};

export default NewForm;
