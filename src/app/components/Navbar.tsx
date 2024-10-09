import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { TbMoonStars, TbSunHigh } from "react-icons/tb";

const Navbar = () => {
  return (
    <header className="py-4 bg-white text-gray-900 border shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="cursor-pointer w-40 h-12 md:w-56 md:h-16">
          <Link href="/">
            <Image src={logo} alt="Logo" width={180} height={60} />
          </Link>
        </div>
        {/* Menu */}

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className="hover: text-gray-600 font-bold"
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white font-bold">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web-developent"
                        className="hover: text-gray-600 font-bold"
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/app"
                        className="hover: text-gray-600 font-bold"
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className="hover: text-gray-600 font-bold"
                      >
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="hover: text-gray-600 font-bold "
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="hover: text-gray-600 font-bold "
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Color switcher and login button */}

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <span>
              <TbSunHigh size={24} />
            </span>
            <Switch />
            <span>
              <TbMoonStars size={24} />
            </span>
          </div>
          <Button variant="default" className="bg-blue-500 font-bold">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
