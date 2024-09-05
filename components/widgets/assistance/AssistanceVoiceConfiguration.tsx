import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import CommonCombobox from "../commons/CommonCombobox";
import {
  MOCK_DATA_PROVIDER_CONFIGURATION,
  MOCK_DATA_VOICE_CONFIGURATION,
} from "@/lib/mock";
import { IValue } from "@/lib/interfaces";

export default function AssistanceVoiceConfiguration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Configuration</CardTitle>
        <CardDescription>
          Choose from the list of voices, or sync your voice library if you aren't able to
          find your voice in the dropdown. If you are still facing any error, you can
          enable custom voice and add a voice ID manually.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="grid w-full max-w-lg items-center gap-1.5 mb-4">
          <Label>Provider</Label>
          <CommonCombobox
            emit={(data: IValue) => {
              console.log(data);
            }}
            title="Provider"
            values={MOCK_DATA_PROVIDER_CONFIGURATION}
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5 mb-4">
          <Label>Voice</Label>
          <CommonCombobox
            emit={(data: IValue) => {
              console.log(data);
            }}
            title="Voice"
            values={MOCK_DATA_VOICE_CONFIGURATION}
          />
        </div>
      </CardContent>
    </Card>
  );
}
