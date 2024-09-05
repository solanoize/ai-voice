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
import { Bot } from "lucide-react";

import { useRouter } from "next/navigation";

import { MOCK_ASSISTANCE_LIST } from "@/lib/mock";
import CommonItemSwitch from "@/components/widgets/commons/CommonItemSwitch";

export default function AssistancePage() {
  const router = useRouter();
  const [assistances, setAssistances] = useState(MOCK_ASSISTANCE_LIST);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const haveAssistances = () => {
    return assistances.length > 0;
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <HeadingWidget
        title={"Assistances"}
        button={
          <Button onClick={() => router.push("/dashboard/assistance/new")}>
            New Assistance
          </Button>
        }
      />

      <div className="flex gap-6 ">
        <Card className="w-full">
          <CardContent className="grid gap-4 mt-6">
            {assistances.map((assistance, index) => (
              <CommonItemSwitch
                key={index}
                onClick={() => router.push(`/dashboard/assistance/${assistance.uuid}`)}
                description=""
                title={assistance.name}
                icon={<Bot className="w-4 h-4" />}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
