import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User } from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/community" },
    { name: "Community", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-[#FEFCEB] h-[57px] sm:h-[104px] w-full">
      <div className="flex items-center justify-between px-8 md:px-16 h-full cursor-pointer">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="Wildflora"
            width={150}
            height={150}
            className="h-[25px] w-[101px] sm:h-[40px] sm:w-[162px] hover:scale-105 hover:brightness-0 hover:invert-[30%] hover:sepia-[100%] hover:saturate-[500%] hover:hue-rotate-[350deg] transition-all duration-300"
          />
        </Link>
        <nav className="hidden lg:block w-[656px] h-[24px]">
          <ul className="flex justify-between gap-10 font-medium text-base font-satoshi text-[#1E1E1E]">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group hover:text-[#722F37]"
              >
                <Link href={link.href} className="pb-1">
                  {link.name}{" "}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-5">
          <Search className="h-[20px] w-[20px] hidden md:block hover:scale-105 transition-all duration-300 hover:text-[#722F37]" />
          <User className="h-[20px] w-[20px] hidden md:block hover:scale-105 transition-all duration-300 hover:text-[#722F37]" />
          <Menu className="h-[20px] w-[20px] lg:hidden hover:text-[#722F37]" />
        </div>
      </div>
    </div>
  );
}
