"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace("-", " ");
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <h1 className="text-2xl font-title text-primary font-bold capitalize">{title}</h1>
    </header>
  );
}
