import { ColorIndicator } from "@/lib/enums";

interface IProp {
  label: string;
  color: ColorIndicator;
}
export default function CommonIndicator(props: IProp) {
  let background = "";

  if (props.color === ColorIndicator.BLUE) {
    background = "bg-blue-600";
  } else if (props.color === ColorIndicator.GRAY) {
    background = "bg-gray-900";
  } else if (props.color === ColorIndicator.LIGHT) {
    background = "bg-gray-200";
  } else if (props.color === ColorIndicator.GREEN) {
    background = "bg-green-500";
  } else if (props.color === ColorIndicator.RED) {
    background = "bg-red-500";
  } else if (props.color === ColorIndicator.PURPLE) {
    background = "bg-purple-500";
  } else if (props.color === ColorIndicator.INDIGO) {
    background = "bg-indigo-500";
  } else if (props.color === ColorIndicator.YELLOW) {
    background = "bg-yellow-300";
  } else {
    background = "bg-teal-500";
  }

  return (
    <div className="flex gap-1 items-center">
      <span className={`flex w-3 h-3 me-3 ${background} rounded-full`}></span>
      <small>{props.label}</small>
    </div>
  );
}
