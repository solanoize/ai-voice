import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

import { ReactNode } from "react";

interface IProp {
  icon: ReactNode;
  title: string;
  description: string;
  selected?: boolean;
}

export default function CommonItemSliderInput(props: IProp) {
  return (
    <div className="w-full flex flex-col space-y-1.5">
      <div className="w-full flex items-center space-x-4 rounded-md border p-4">
        {props.icon}
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
        <div className="flex gap-1.5">
          <Slider className="" />
          <Input placeholder="10" type="number" />
        </div>
      </div>
    </div>
  );
}
