import { Switch } from "@/components/ui/switch";

import { ReactNode } from "react";

interface IProp {
  icon: ReactNode;
  title: string;
  description: string;
  withSwitch?: boolean;
  onClick?: () => void;
}

export default function CommonItemSwitch(props: IProp) {
  return (
    <div onClick={props.onClick} className="flex flex-col space-y-1.5 cursor-pointer">
      <div className=" flex items-center space-x-4 rounded-md border p-4">
        {props.icon}
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
        {props.withSwitch && <Switch />}
      </div>
    </div>
  );
}
