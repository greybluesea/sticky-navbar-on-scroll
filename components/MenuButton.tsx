import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { routes } from "./Header";
import Link from "next/link";
type Props = {};

const MenuButton = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" w-6 h-6 sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <nav className="flex flex-col gap-4">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="block px-2 py-1 text-lg"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
