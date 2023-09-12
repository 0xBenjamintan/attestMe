import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label"


export function ClientJob() {
    return (
        <div className="flex justify-center items-center">
        <Card className="w-[450px] h-auto p-6 space-y-4 m-10">
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
    );
}