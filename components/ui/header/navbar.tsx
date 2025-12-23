"use client";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Food Menu", href: "/food-menu" },
    { name: "My Orders", href: "/my-orders" },
  ];

  return (
    <div className="flex items-center justify-between py-4">
      <div id="logo-text-container" className="flex items-center gap-2">
        <Image src="/foodio.svg" alt="Foodio logo" width={26} height={26} />
        <span className="font-title text-primary text-[26px] font-semibold tracking-tighter">
          Foodio.
        </span>
      </div>
      <NavigationMenu className="font-body text-muted-foreground">
        <NavigationMenuList>
          {links.map((link) => {
            return (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink
                  href={link.href}
                  className={clsx("font-medium", {
                    "border border-primary rounded-full py-1.5 px-3 text-primary bg-secondary":
                      pathname === link.href,
                  })}
                >
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div id="signin-button-container">
        <Button>
          Sign in{" "}
          <span>
            {" "}
            <ArrowRight />{" "}
          </span>
        </Button>
      </div>
    </div>
  );
}
