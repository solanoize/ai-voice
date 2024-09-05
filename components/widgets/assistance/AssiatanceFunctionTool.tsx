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
import { MOCK_DATA_FUNCTION_TOOLS } from "@/lib/mock";

export default function AssiatanceFunctionTool() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tools</CardTitle>
        <CardDescription>
          Tools are a way you can enable your voicebots to perform certain actions and
          tasks during the call. Add your tools From the Tools Library page to your
          voicebots to connect with Make.com or GHL workflows. You can also have custom
          tools with your own backend.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="grid w-full gap-4">
            <Label htmlFor="firstMessage">Provider</Label>
            <CommonCombobox
              title="Tools"
              values={MOCK_DATA_FUNCTION_TOOLS}
              emit={(data: IValue) => {}}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
