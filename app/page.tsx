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

export default function Home() {
  return (
    <>
      <MenuHomeWidget />
      <JumbotronHomeWidget />
    </>
  );
}
