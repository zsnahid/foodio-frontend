"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 fixed top-0 z-[-1]">
      <div id="banner-west-contents" className="self-center">
        <div className="bg-secondary py-1 px-2.5 rounded-full flex items-center gap-1 w-fit mb-3">
          <Image src="/food-menu.svg" alt="Menu logo" width={16} height={16} />
          <span className="text-[14px] text-secondary-foreground font-body font-semibold">
            Food Ordering Service
          </span>
        </div>
        <h1 className="font-title text-[74px] font-semibold text-primary tracking-tighter leading-none mb-7">
          Where Great Food <br /> Meets Great Taste.
        </h1>
        <p className="font-medium font-body text-secondary-foreground text-[20px] mb-10">
          Experience a symphony of flavors crafted with passion. Premium
          ingredients, exquisite recipes, delivered to your door.
        </p>
        <div id="cta-buttons" className="flex items-center gap-4">
          <Button
            size="lg"
            className="rounded-tr-none shadow-2xl shadow-primary"
          >
            Order Now <ArrowRight />{" "}
          </Button>
          <Button size="lg" variant="outline" className="rounded-tl-none">
            View Menu
          </Button>
        </div>
      </div>
      <div id="banner-east-contents" className="justify-self-end">
        <div className="relative">
          <Image
            src="/banner-bg.png"
            alt="Banner background frame"
            width={608}
            height={565}
          />
          <Image
            src="/banner-hero.png"
            alt="Banner image"
            width={474}
            height={474}
            className="absolute bottom-0 z-10"
          />
          <div className="size-110 bg-black blur-xl rounded-full opacity-15 absolute bottom-0 left-12"></div>
        </div>
      </div>
    </div>
  );
}
