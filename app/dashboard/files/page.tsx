"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import HeadingWidget from "@/components/widgets/HeadingWidget";
import { useState } from "react";
import { Bot, File, Upload } from "lucide-react";

import { useRouter } from "next/navigation";

import { MOCK_ASSISTANCE_LIST, MOCK_FILE_LIST } from "@/lib/mock";
import CommonItemSwitch from "@/components/widgets/commons/CommonItemSwitch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FilePage() {
  const router = useRouter();
  const [files, setFiles] = useState(MOCK_FILE_LIST);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const haveAssistances = () => {
    return files.length > 0;
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <HeadingWidget
        title={"Files"}
        button={
          <div className="grid w-full max-w-sm items-center gap-1.5">
            {/* <Label htmlFor="picture">Upload File</Label> */}
            <Input type="file" />
          </div>
        }
      />

      <div className="flex gap-6 ">
        <Card className="w-full">
          <CardContent className="grid gap-4 mt-6">
            {files.map((file, index) => (
              <CommonItemSwitch
                key={index}
                onClick={() => router.push(`/dashboard/files/${file.uuid}`)}
                description={file.name}
                title={file.name}
                icon={<File className="w-8 h-8" />}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
