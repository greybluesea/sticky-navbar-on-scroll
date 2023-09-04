"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { Moon, ShoppingCart, Sun } from "lucide-react";
import { Button } from "./ui/button";
import ProfileButton from "./ProfileButton";
import { useTheme } from "next-themes";
import MenuButton from "./MenuButton";

type Props = {};

export const routes = [
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/",
    label: "Categories",
  },
  {
    href: "/",
    label: "On Sale",
  },
];

const Header = (props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex py-3 px-4 border-b">
      <Container>
        <div className="px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex space-x-2">
            <MenuButton />
            <Link href="/">
              <h1 className="text-xl font-bold">E-STORE</h1>
            </Link>
          </div>
          <nav className=" flex items-center  space-x-4  md:space-x-8 lg:space-x-10 text-lg">
            {routes.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className="hidden sm:block"
              >
                {route.label}
              </Link>
            ))}
            <Link href={"/"}>
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className=" rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 hidden dark:block   transition-all  " />
              <Moon className="h-6 w-6 block dark:hidden transition-all " />
            </Button>
            <ProfileButton />
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
