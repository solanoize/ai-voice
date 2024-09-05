import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommonItemSwitch from "../commons/CommonItemSwitch";
import {
  Glasses,
  Hourglass,
  Mic,
  Mic2,
  ParkingMeter,
  ShieldAlert,
  Text,
  Timer,
  Type,
  Video,
  Wifi,
  WifiLow,
} from "lucide-react";
import CommonItemSliderInput from "../commons/CommonItemSliderInput";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CommonCombobox from "../commons/CommonCombobox";
import { MOCK_CLIENT_MESSAGE, MOCK_IDLE_MESSAGES, MOCK_SERVER_MESSAGE } from "@/lib/mock";
import { IValue } from "@/lib/interfaces";
import CommonAlertChoice from "../commons/CommonAlertChoice";

export default function AssistanceAdvancedMessaging() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messaging</CardTitle>
        <CardDescription>
          Message configuration for messages that are sent to and from the assistant.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid items-center gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="firstMessage">Server URL</Label>
              <small className="text-gray-400">
                This is the URL Vapi will use to communicate messages via HTTP POST
                Requests. This is used for retrieving context, function calling, and
                end-of-call reports.
              </small>
            </div>
            <Input type="text" placeholder="Endpoint URL to handle Server messages" />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="firstMessage">Client Messages</Label>
              <small className="text-gray-400">
                These are the messages that will be sent to the Client SDKs.
              </small>
            </div>
            <CommonCombobox
              title="Client Messages"
              values={MOCK_CLIENT_MESSAGE}
              emit={(data: IValue) => {}}
            />
          </div>
          <div className="grid items-center gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="firstMessage">Server Messages</Label>
              <small className="text-gray-400">
                These are the messages that will be sent to the Server URL configured.
              </small>
            </div>
            <CommonCombobox
              title="Server Messages"
              values={MOCK_SERVER_MESSAGE}
              emit={(data: IValue) => {}}
            />
          </div>

          <div className="grid items-center gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="firstMessage">End Call Message</Label>
              <small className="text-gray-400">
                This is the message that the assistant will say if it ends the call.
              </small>
            </div>
            <Input
              type="text"
              defaultValue="Thank you for contacting Mary's Dental. Have a great day!"
            />
          </div>

          <div className="grid items-center gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="firstMessage">Idle Messages</Label>
              <small className="text-gray-400">
                Messages that the assistant will speak when the user hasn't responded.
              </small>
            </div>
            <CommonCombobox
              title="Idle Messages"
              values={MOCK_IDLE_MESSAGES}
              emit={(data: IValue) => {}}
            />
          </div>

          <CommonAlertChoice
            icon={<Text className="w-5 h-5" />}
            title="Max Idle Messages"
            description="Maximum number of times idle messages can be spoken during the call."
            selected={true}
          />
          <CommonAlertChoice
            icon={<Glasses className="w-5 h-5" />}
            title="Idle Timeout"
            description="Timeout in seconds before an idle message is spoken."
            selected={true}
          />
        </div>
      </CardContent>
    </Card>
  );
}
