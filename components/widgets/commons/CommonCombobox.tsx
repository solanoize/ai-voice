"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IValue } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

interface IProps {
  values: IValue[];
  title: string;
  emit: (data: IValue) => void;
}

export default function CommonCombobox(props: IProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<IValue | undefined>();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? props.values.find((val: IValue) => val.value === value.value)?.label
            : `Select ${props.title}...`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={`Search ${props.title}...`} className="h-9" />
          <CommandList>
            <CommandEmpty>No {props.title} found.</CommandEmpty>
            <CommandGroup>
              {props.values.map((val: IValue) => (
                <CommandItem
                  key={val.value}
                  value={val.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value?.value ? undefined : val);
                    setOpen(false);

                    if (currentValue !== value?.value) {
                      props.emit(val);
                    }
                  }}
                >
                  {val.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value?.value === val.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
