import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeadingWidget from "@/components/widgets/HeadingWidget";
import { Copy, Download, File, Trash } from "lucide-react";

export default function FileDetailPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <HeadingWidget title={"Files"} />
      <div className="flex gap-6 w-full">
        <Card className="w-full">
          <CardContent className="mt-6">
            <div className="w-full flex flex-col gap-4 justify-center items-center">
              <File className="w-32 h-32" />
              <p className="font-normal">Promise.pdf</p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-4 justify-between align-bottom">
            <div className="grid gap-1.5">
              <CardTitle>Promise.pdf</CardTitle>
              <CardDescription>application/pdf - 98.41 KB</CardDescription>
              <CardDescription>ID 1e222b68-892c-42ee-ba37-6799e32bcc5a</CardDescription>
              <CardDescription>Created At 8/28/2024, 1:05:44 PM </CardDescription>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <Button variant={"outline"} className="flex gap-1.5">
                <Download /> <span>Download</span>
              </Button>
              <Button variant={"outline"} className="flex gap-1.5">
                <Copy /> <span>Copy URL</span>
              </Button>
              <Button variant={"default"} className="flex gap-1.5 bg-red-500 text-white">
                <Trash /> <span>Delete</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
