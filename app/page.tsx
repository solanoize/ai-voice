"use client";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  HomeIcon,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  AudioWaveform,
  PhoneCall,
  FileArchive,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BrandingDashboardWidget from "@/components/widgets/branding";
import {
  MenuHomeWidget,
  MenuUpgradeWidget,
  SidebarMenuDashboardWidget,
} from "@/components/widgets/menu";
import { ModeToggle } from "@/components/widgets/mode-toogle";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { JumbotronHomeWidget } from "@/components/widgets/jumbotron";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import HomeTrusted from "@/components/widgets/home/HomeTrusted";
import HomeSolution from "@/components/widgets/home/HomeSolution";
import HomeCTA from "@/components/widgets/home/HomeCTA";
import HomeFeature from "@/components/widgets/home/HomeFeature";
import HomePricing from "@/components/widgets/home/HomePricing";
import HomeNewsletter from "@/components/widgets/home/HomeNewsletter";

export default function Home() {
  const supabase = createClientComponentClient();

  const [notes, setNotes] = useState<any>([]);

  const getNotes = async () => {
    const { data, error } = await supabase.from("notes").select("*");
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  // redirect("/dashboard");
  return (
    <>
      <MenuHomeWidget />
      {/* <JumbotronHomeWidget /> */}
      <HomeCTA />
      {/* <HomeTrusted /> */}
      <HomeFeature />
      <HomeSolution />
      <HomePricing />
      <HomeNewsletter />
    </>
  );
}
