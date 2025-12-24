"use client";

import { Home, ListOrdered } from "lucide-react";
import { usePathname } from "next/navigation";

import SidebarItem from "./sidebar-item";

const routes = [
  {
    icon: Home,
    label: "Menu Items",
    href: "/dashboard/menu-items",
  },
  {
    icon: ListOrdered,
    label: "Orders",
    href: "/dashboard/orders",
  },
];

export default function SidebarRoutes() {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col gap-y-2 px-8">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
          isActive={pathname.includes(route.href)}
        />
      ))}
    </div>
  );
}
