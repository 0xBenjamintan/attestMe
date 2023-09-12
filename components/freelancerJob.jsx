import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function FreelancerJob({title, description, duration, price}) {
    const [stage, setStage] = useState(0); // 0 = apply, 1 = job done, 2 = payout done

    const applyOnClick = () => {
        setStage(1);
    }
    const jobDoneOnClick = () => {
        setStage(2);
    }
    const payoutDoneOnClick = () => {
        setStage(3);
    }

    return (
        <>
            {stage != 3 && (
                <Card className="w-full h-auto p-4">
                    <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <div className="mt-2">
                        <CardDescription>{description}</CardDescription>
                        <CardDescription>{duration}</CardDescription>
                        <CardDescription>{price}</CardDescription>
                    </div>
                    </CardHeader>
                    <CardContent>
                    <div className="flex justify-end">
                        {stage == 0 && (
                            <button 
                            onClick={() => applyOnClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Bid for Task
                            </button>
                        )}
                        {stage == 1 && (
                            <button
                            onClick={() => jobDoneOnClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Attest Job Completion
                            </button>
                        )}
                        {stage == 2 && (
                            <button
                            onClick={() => payoutDoneOnClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Attest Payout
                            </button>
                        )}
                    </div>
                    </CardContent>
                </Card>

            )}
        </>
    )
}