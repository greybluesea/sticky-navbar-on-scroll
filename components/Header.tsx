"use client";

import React, { useEffect, useState } from "react";
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
  const [yValue, setYValue] = useState(0);
  const [toHide, setToHide] = useState(false);

  /*  const yValue: number = useMemo(() => window.scrollY, []);
  console.log(yValue); */

  /*  if (typeof document === "undefined") return;
  const header = document.getElementById("header111");
  console.log(header);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header?.classList.add("active");
      } else {
        header?.classList.remove("active");
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header?.classList.add(" active");
        } else {
          header?.classList.remove(" active");
        }
      });
    };
  }, []); */

  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      // const previousY = yValue;
      //console.log(window.scrollY);
      /* setYValue(window.scrollY); */
      //   console.log(window.scrollY);
      if (yValue >= window.scrollY) {
        setToHide(false);
      } else {
        setToHide(true);
      }
      setYValue(window.scrollY);
      //  console.log(yValue);
    };

    window.addEventListener("scroll", showHeaderOnScrollUp);

    return () => {
      window.removeEventListener("scroll", showHeaderOnScrollUp);
    };
  }, [yValue]);

  return (
    <div
      className={
        "fixed top-0 left-0 right-0 flex py-3 px-4 border-b z-[1] bg-background/50 backdrop-filter-blur " +
        (toHide && " py-0 h-0 hidden ")
      }
    >
      <Container>
        <div className="px-6 lg:px-8 flex h-12 sm:h-14 md:h-16 items-center justify-between w-full">
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
