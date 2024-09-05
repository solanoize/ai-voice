import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommonItemSwitch from "../commons/CommonItemSwitch";
import {
  Hourglass,
  Mic,
  Mic2,
  ParkingMeter,
  ShieldAlert,
  Timer,
  Type,
  Video,
  Wifi,
  WifiLow,
} from "lucide-react";
import CommonItemSliderInput from "../commons/CommonItemSliderInput";

export default function AssistanceAdvancedPipelineConfiguration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pipeline Configuration</CardTitle>
        <CardDescription>
          This section allows you to configure the pipeline settings for the assistant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <CommonItemSliderInput
            title="Silence Timeout"
            description="How long to wait before a call is automatically ended due to inactivity."
            icon={<Hourglass />}
          />
          <CommonItemSliderInput
            title="Response Delay"
            description="The minimum number of seconds the assistant waits after user speech before it starts speaking."
            icon={<Timer />}
          />
          <CommonItemSliderInput
            title="LLM Request Delay"
            description="The minimum number of seconds to wait after punctuation before sending a request to the LLM."
            icon={<Wifi />}
          />
          <CommonItemSliderInput
            title="Interruption Threshold"
            description="The number of words the user must say before the assistant considers being interrupted."
            icon={<Type />}
          />
          <CommonItemSliderInput
            title="Maximum Duration"
            description="The maximum number of seconds a call will last."
            icon={<ParkingMeter />}
          />
        </div>
      </CardContent>
    </Card>
  );
}
