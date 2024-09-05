"use client";

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  AudioWaveform,
  BellRing,
  Bot,
  Brain,
  ChartBar,
  ChartLine,
  Check,
  ChevronsUpDown,
  Cog,
  FunctionSquare,
  SquareFunction,
  Terminal,
  Text,
  Volume,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Selectbox from "@/components/widgets/Selectbox";
import AssitanceTranscriber from "@/components/widgets/assistance/AssistanceTranscriber";
import AssistanceVoiceConfiguration from "@/components/widgets/assistance/AssistanceVoiceConfiguration";
import AssistanceVoiceAdditionalConfiguration from "@/components/widgets/assistance/AssistanceVoiceAdditionalConfiguration";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";

import HeadingWidget from "@/components/widgets/HeadingWidget";
import { Button } from "@/components/ui/button";
import AssistanceModel from "@/components/widgets/assistance/AssistanceModel";
import CommonIndicator from "@/components/widgets/commons/CommonIndicator";
import { ColorIndicator } from "@/lib/enums";
import CommonCartUse from "@/components/widgets/commons/CommonCartUse";
import {
  MOCK_ASSISTANCE_CART_COST,
  MOCK_ASSISTANCE_CART_COST_CONFIG,
  MOCK_ASSISTANCE_CART_LATENCY,
  MOCK_ASSISTANCE_CART_LATENCY_CONFIG,
} from "@/lib/mock";
import AssiatanceFunctionTool from "@/components/widgets/assistance/AssiatanceFunctionTool";
import AssistanceFunctionPredefined from "@/components/widgets/assistance/AssistanceFunctionPredefined";
import AssistanceAdvancedPrivacy from "@/components/widgets/assistance/AssistanceAdvancedPrivacy";
import AssistanceAdvancedPipelineConfiguration from "@/components/widgets/assistance/AssistanceAdvancedPipelineConfiguration";
import AssistanceAdvancedMessaging from "@/components/widgets/assistance/AssistanceAdvancedMessaging";

export default function AssistanceDetailPage() {
  return (
    <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <HeadingWidget
        title={"Assistance Detail"}
        button={
          <Button variant={"outline"} className="bg-green-900" onClick={() => {}}>
            Publish
          </Button>
        }
      />
      <div className="grid w-full gap-8">
        <div className="flex gap-8">
          <CommonIndicator color={ColorIndicator.TEAL} label="Voice API Fixed Cost" />
          <CommonIndicator color={ColorIndicator.RED} label="talkscriber" />
          <CommonIndicator color={ColorIndicator.BLUE} label="gpt 40" />
          <CommonIndicator color={ColorIndicator.YELLOW} label="openai" />
          <CommonIndicator color={ColorIndicator.PURPLE} label="web" />
        </div>
        <div className="md:flex gap-8">
          <CommonCartUse
            chartConfig={MOCK_ASSISTANCE_CART_COST_CONFIG}
            chartData={MOCK_ASSISTANCE_CART_COST}
            dataKeyX="cost"
            dataKeyY="val"
            title="Cost"
            label="~$0.1 /min"
            info="These calculation are estimates. They may not reflect the actual cost of the assistant."
          />
          <CommonCartUse
            chartConfig={MOCK_ASSISTANCE_CART_LATENCY_CONFIG}
            chartData={MOCK_ASSISTANCE_CART_LATENCY}
            dataKeyX="latency"
            dataKeyY="val"
            title="Latency"
            label="~1850 ms"
            info="These calculation are estimates. They may not reflect the actual cost of the assistant."
          />
        </div>
      </div>
      <div className="grid w-full  gap-8">
        <Tabs defaultValue="model" className="w-full">
          <TabsList className="sticky">
            <TabsTrigger value="model">
              <Brain className="w-4 h-4 mr-2" /> Model
            </TabsTrigger>
            <TabsTrigger value="transcriber">
              <Text className="w-4 h-4 mr-2" /> Transcriber
            </TabsTrigger>
            <TabsTrigger value="voice">
              <AudioWaveform className="w-4 h-4 mr-2" />
              Voice
            </TabsTrigger>
            <TabsTrigger value="functions">
              <SquareFunction className="w-4 h-4 mr-2" />
              Functions
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <Cog className="w-4 h-4 mr-2" />
              Advanced
            </TabsTrigger>
            <TabsTrigger value="analysis">
              <ChartLine className="w-4 h-4 mr-2" />
              Analysis
            </TabsTrigger>
          </TabsList>
          <TabsContent value="model">
            <AssistanceModel />
          </TabsContent>
          <TabsContent value="transcriber">
            <AssitanceTranscriber />
          </TabsContent>
          <TabsContent value="voice">
            <div className={cn("flex flex-col gap-4")}>
              <AssistanceVoiceConfiguration />
              <AssistanceVoiceAdditionalConfiguration />
            </div>
          </TabsContent>
          <TabsContent value="functions">
            <div className={cn("flex flex-col gap-4")}>
              <AssiatanceFunctionTool />
              <AssistanceFunctionPredefined />
            </div>
          </TabsContent>
          <TabsContent value="advanced">
            <div className={cn("flex flex-col gap-4")}>
              <AssistanceAdvancedPrivacy />
              <AssistanceAdvancedPipelineConfiguration />
              <AssistanceAdvancedMessaging />
            </div>
          </TabsContent>
          <TabsContent value="analysis">Not Implemented</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
