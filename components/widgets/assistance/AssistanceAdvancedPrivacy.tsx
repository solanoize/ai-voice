import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommonItemSwitch from "../commons/CommonItemSwitch";
import { Mic, Mic2, ShieldAlert, Video } from "lucide-react";

export default function AssistanceAdvancedPrivacy() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy</CardTitle>
        <CardDescription>
          This section allows you to configure the privacy settings for the assistant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <CommonItemSwitch
            title="HIPAA Compliance"
            description="When this is enabled, no logs, recordings, or transcriptions will be stored."
            icon={<ShieldAlert />}
          />
          <CommonItemSwitch
            title="Audio Recording"
            description="Record the conversation with the assistant."
            icon={<Mic />}
          />
          <CommonItemSwitch
            title="Video Recording"
            description="Enable or disable video recording during a web call. This will record the video of your user."
            icon={<Video />}
          />
        </div>
      </CardContent>
    </Card>
  );
}
