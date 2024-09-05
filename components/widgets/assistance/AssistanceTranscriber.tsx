import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CommonCombobox from "../commons/CommonCombobox";
import {
  MOCK_DATA_TRANSCRIPTION_LANGUAGE,
  MOCK_DATA_TRANSCRIPTION_MODEL,
  MOCK_DATA_TRANSCRIPTION_PROVIDER,
} from "@/lib/mock";
import { IValue } from "@/lib/interfaces";
import { Label } from "@/components/ui/label";

export default function AssitanceTranscriber() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transcription</CardTitle>
        <CardDescription>
          This section allows you to configure the transcription settings for the
          assistant.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="grid w-full max-w-lg items-center gap-1.5 mb-4">
            <Label>Provider</Label>
            <CommonCombobox
              title="Provider"
              values={MOCK_DATA_TRANSCRIPTION_PROVIDER}
              emit={(data: IValue) => {
                console.log(data);
              }}
            />
          </div>
          <div className="grid w-full max-w-lg items-center gap-1.5 mb-4">
            <Label>Language</Label>
            <CommonCombobox
              title="Language"
              values={MOCK_DATA_TRANSCRIPTION_LANGUAGE}
              emit={(data: IValue) => {
                console.log(data);
              }}
            />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5 mb-4">
          <Label>Model</Label>
          <CommonCombobox
            title="Model"
            values={MOCK_DATA_TRANSCRIPTION_MODEL}
            emit={(data: IValue) => {
              console.log(data);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
