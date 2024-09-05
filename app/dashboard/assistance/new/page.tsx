"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import HeadingWidget from "@/components/widgets/HeadingWidget";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import {
  BellRing,
  Gamepad,
  ListTodo,
  MessageCircleQuestion,
  UsersRound,
} from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function NewAssistancePage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <HeadingWidget title={"New Assistances"} />
      <Card>
        <CardHeader>
          <CardTitle>Create assistance</CardTitle>
          <CardDescription>
            Here{"'"}s a few templates to get you started, or you can create your own
            template and use it to create a new assistant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>
                  Assistant Name{" "}
                  <small>(This can be adjusted at any time after creation.)</small>
                </Label>
                <Input id="name" placeholder="Name of your assistance" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Blank Template</p>
                    <p className="text-sm text-muted-foreground">
                      This blank slate template with minimal configurations. It{"'"}s a
                      starting point for creating your custom assistant.
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label>Quickstart</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className=" flex flex-col space-y-4 rounded-md border p-4">
                    <ListTodo size={40} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Appointment Setter
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Designed for dental practices to demonstrate setting appointments.
                        It streamlines scheduling, answers common questions, and provides
                        service information.
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col space-y-4 rounded-md border p-4">
                    <UsersRound size={40} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Customer Support</p>
                      <p className="text-sm text-muted-foreground">
                        A versatile template designed with a perfect mix of emotional
                        intelligence and technical knowledge. Ideal for empathetic,
                        efficient customer support.
                      </p>
                    </div>
                  </div>

                  <div className=" flex flex-col space-y-4 rounded-md border p-4">
                    <MessageCircleQuestion size={40} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Inbound Q/A</p>
                      <p className="text-sm text-muted-foreground">
                        An inbound call agent example designed to provide comprehensive
                        support for SmartHome Innovations. With a deep understanding of
                        product details and troubleshooting.
                      </p>
                    </div>
                  </div>

                  <div className=" flex flex-col space-y-4 rounded-md border p-4">
                    <Gamepad size={40} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Game NPC</p>
                      <p className="text-sm text-muted-foreground">
                        An assistant for demonstrating an in-game NPC, Elenya is designed
                        to offer guidance, lore, and insights into the mysteries of the
                        natural world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button>Create Assistance</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
