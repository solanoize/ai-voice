import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideKeyboard, PhoneCall } from "lucide-react";
import CommonAlertChoice from "../commons/CommonAlertChoice";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AssistanceFunctionPredefined() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Predefined Functions</CardTitle>
        <CardDescription>
          We've pre-built functions for common use cases. You can enable them and
          configure them below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <CommonAlertChoice
            icon={<PhoneCall className="w-5 h-5" />}
            title="Enable End Call Function"
            description="This will allow the assistant to end the call from its side. (Best for gpt-4 and bigger models.)"
            selected={true}
          />
          <CommonAlertChoice
            icon={<LucideKeyboard className="w-5 h-5" />}
            title="Dial Keypad"
            description="This sets whether the assistant can dial digits on the keypad."
            selected={false}
          />
          <div className="grid w-full items-center gap-4">
            <Label>End Call Phrases</Label>
            <Textarea className={cn("min-h-60")} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
