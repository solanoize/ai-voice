import React from "react";

interface IProps {
  title: String;
  button?: React.ReactNode;
}

export default function HeadingWidget(props: IProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-semibold md:text-2xl">{props.title}</h1>
      {props.button && props.button}
    </div>
  );
}
