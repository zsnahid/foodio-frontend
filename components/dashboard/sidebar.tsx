import { LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import SidebarRoutes from "./sidebar-routes";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col justify-between border-r border-gray-200 bg-sidebar py-5 font-body">
      <div>
        <div className="px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/foodio.svg" alt="Foodio Logo" width={26} height={26} />
            <h1 className="text-2xl font-title font-bold">Foodio.</h1>
          </Link>
        </div>
        <div className="my-8" />
        <SidebarRoutes />
      </div>
      <div className="px-8">
        <Button
          variant="ghost"
          className="w-full justify-start px-2 text-red-600"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
