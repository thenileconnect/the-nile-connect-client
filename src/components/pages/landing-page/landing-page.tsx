"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui-components/background-gradient";
//import { IconAppWindow } from "@tabler/icons-react";
import { WaitlistButton } from "./waitlist-button";
import Image from "next/image";
import Star from "@/../public/shape/Star.png";
import { NavBar } from "@/components/ui-components/nav-bar";

export function LandingPage() {


  return (
    <div className="relative max-w-7xl bg-[#0a0a0a]">
       
            <NavBar />
            <Image src={Star} alt="Star" className="absolute top-1/4 right-10 w-8 h-8" />
            <Image src={Star} alt="Star" className="absolute bottom-1/3 left-1/4 w-12 h-12" />
            <Image src={Star} alt="Star" className="absolute bottom-10 right-1/4 w-6 h-6" />
            <div className="flex flex-col items-center justify-center px-4 h-screen">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-center max-w-4xl text-white">
            Hire Africa's<br />Top Tech{" "}
            <span className="text-accent">Talents</span>
          </h1>
          <p className="mt-4 mb-8 text-sm sm:text-base max-w-xl text-center text-white">
          Unlock the potential of Africa's top tech talent. Our platform connects you with skilled professionals ready to elevate your projects. Don't miss out on this opportunity to transform your team – join our waitlist today!
          </p>
          <WaitlistButton />
        </div>
        <BackgroundGradient className="rounded-[22px]" containerClassName="absolute inset-0">
      </BackgroundGradient>
    </div>
  );
}
