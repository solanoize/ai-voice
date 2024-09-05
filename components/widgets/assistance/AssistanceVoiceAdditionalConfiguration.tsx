import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import CommonCombobox from "../commons/CommonCombobox";
import { IValue } from "@/lib/interfaces";
import { MOCK_DATA_BACKGROUND_SOUND } from "@/lib/mock";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ParkingMeter, Rabbit, ShieldAlert, Terminal, Volume } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import CommonAlertChoice from "../commons/CommonAlertChoice";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Slider } from "@/components/ui/slider";
import CommonItemSliderInput from "../commons/CommonItemSliderInput";

export default function AssistanceVoiceAdditionalConfiguration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Additional Configuration</CardTitle>
        <CardDescription>
          Configure additional settings for the voice of your assistant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label>Background Sound</Label>
            <CommonCombobox
              emit={(data: IValue) => {
                console.log(data);
              }}
              title="Background Sound"
              values={MOCK_DATA_BACKGROUND_SOUND}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label>Input Min Characters</Label>
            <Input type="number" placeholder="10" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <CommonAlertChoice
            icon={<ShieldAlert className="w-5 h-5" />}
            title="Filler Injection Enabled"
            description="This determines whether fillers are injected into the Model output before
              inputting it into the Voice provider."
            selected={true}
          />
          <CommonAlertChoice
            icon={<ChatBubbleIcon className="w-5 h-5" />}
            title="Backchanneling Enabled"
            description="Make the bot say words like 'mhmm', 'ya' etc. while listening to make the conversation sounds natural. Default disabled"
            selected={false}
          />
          <CommonAlertChoice
            icon={<Volume />}
            title="Background Denoising Enabled"
            description="Filter background noise while the user is talking."
          />

          <CommonItemSliderInput
            title="Speed"
            description="The speed of the voice output."
            icon={<Rabbit />}
          />
        </div>
      </CardContent>
    </Card>
  );
}
