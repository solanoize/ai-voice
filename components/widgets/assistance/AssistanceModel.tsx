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
import {
  MOCK_DATA_MODEL,
  MOCK_DATA_MODEL_KNOWLEDGE,
  MOCK_DATA_MODEL_PROVIDER,
  MOCK_DATA_SYSTEM_PROMPT,
} from "@/lib/mock";
import { cn } from "@/lib/utils";
import CommonCombobox from "../commons/CommonCombobox";
import { IValue } from "@/lib/interfaces";

export default function AssistanceModel() {
  return (
    <Card className="scroll-auto">
      <CardHeader>
        <CardTitle>Model</CardTitle>
        <CardDescription>
          This section allows you to configure the model for the assistant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full  gap-8">
          <div className="grid items-center gap-4">
            <Label htmlFor="firstMessage">First Message</Label>
            <Input
              id="firstMessage"
              type="text"
              placeholder="Hello, this is Mary from Mary's Dental. How can I assist you today?"
            />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="firstMessage">First Message</Label>
            <Textarea
              className={cn("min-h-60")}
              cols={10}
              placeholder={MOCK_DATA_SYSTEM_PROMPT}
            />
          </div>

          <div className="grid w-full items-center gap-4">
            <Label htmlFor="firstMessage">Provider</Label>
            <CommonCombobox
              title="Provider"
              values={MOCK_DATA_MODEL_PROVIDER}
              emit={(data: IValue) => {}}
            />
          </div>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="firstMessage">Model</Label>
            <CommonCombobox
              title="Model"
              values={MOCK_DATA_MODEL}
              emit={(data: IValue) => {}}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="firstMessage">Knowledge Base</Label>
            <CommonCombobox
              title="Knowledge Base"
              values={MOCK_DATA_MODEL_KNOWLEDGE}
              emit={(data: IValue) => {}}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="firstMessage">Temperature</Label>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="firstMessage">Max Tokens</Label>
            <Input type="number" defaultValue={"255"} />
          </div>
          <div className="flex items-center gap-4">
            <Switch />
            <Label htmlFor="firstMessage">Detect Emptoion</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
