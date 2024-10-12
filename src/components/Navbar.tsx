import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="py-4 bg-white text-slate-900 border shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer w-40 h-12 md:w-56 md:h-16">
          <Link href="/">
            <Image src={logo} alt="Logo" width={180} height={60} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/haber"
                className="text-slate-900 transition-all duration-300 ease-in hover:text-blue-500 font-bold text-lg hover:underline underline-offset-8"
              >
                Haber
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/spor"
                className="text-slate-900 transition-all duration-300 ease-in hover:text-blue-500 font-bold text-lg hover:underline underline-offset-8"
              >
                Spor
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/finans"
                className="text-slate-900 transition-all duration-300 ease-in hover:text-blue-500 font-bold text-lg hover:underline underline-offset-8"
              >
                Finans
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/magazin"
                className="text-slate-900 transition-all duration-300 ease-in hover:text-blue-500 font-bold text-lg  hover:underline underline-offset-8"
              >
                Magazin
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/yemek"
                className="text-slate-900 transition-all duration-300 ease-in hover:text-blue-500 font-bold text-lg  hover:underline underline-offset-8"
              >
                Yemek
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Menu for Mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
