"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  href,
  isActive,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-x-2 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-primary hover:text-white",
        isActive && "bg-primary text-white"
      )}
    >
      <div className="flex items-center gap-x-2">
        <Icon size={22} className="text-gray-500" />
        <span>{label}</span>
      </div>
    </Link>
  );
}
