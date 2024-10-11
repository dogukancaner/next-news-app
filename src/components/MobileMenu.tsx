"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.png";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  TbMoonStars,
  TbSunHigh,
  TbMenu2,
  TbNews,
  TbBallBasketball,
  TbChartHistogram,
  TbShoppingBag,
} from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            <TbMenu2 size={42} className="text-gray-700" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px] text-gray-900"
        >
          <div className="flex justify-center mb-8 mt-4">
            <Image src={logo} alt="Logo" width={140} height={45} />
          </div>
          <nav className="flex flex-col items-center gap-2">
            <Link
              href="/haber"
              className="text-lg font-bold text-gray-500 flex items-center justify-center bg-slate-100 rounded-md w-full h-12"
            >
              <TbNews className="mr-2 text-blue-500" size={20} /> Haber
            </Link>
            <Link
              href="/spor"
              className="text-lg font-bold text-gray-500 flex items-center justify-center bg-slate-100 rounded-md w-full h-12"
            >
              <TbBallBasketball className="mr-2 text-blue-500" size={20} /> Spor
            </Link>
            <Link
              href="/finans"
              className="text-lg font-bold text-gray-500 flex items-center justify-center bg-slate-100 rounded-md w-full h-12"
            >
              <TbChartHistogram className="mr-2 text-blue-500" size={20} />{" "}
              Finans
            </Link>
            <Link
              href="/magazin"
              className="text-lg font-bold text-gray-500 flex items-center justify-center bg-slate-100 rounded-md w-full h-12"
            >
              <TbShoppingBag className="mr-2 text-blue-500" size={20} /> Magazin
            </Link>
            <Link
              href="/yemek"
              className="text-lg font-bold text-gray-500 flex items-center justify-center bg-slate-100 rounded-md w-full h-12"
            >
              <GiKnifeFork className="mr-2 text-blue-500" size={20} />
              Yemek
            </Link>
            <div className="flex flex-col items-center mt-2 gap-2">
              <div className="flex items-center gap-2">
                <TbSunHigh size={24} className="text-gray-500" />
                <Switch />
                <TbMoonStars size={24} className="text-gray-500" />
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
