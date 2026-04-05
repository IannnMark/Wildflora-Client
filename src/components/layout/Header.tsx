import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#FEFCEB] h-[57px] sm:h-[104px] w-full">
      <div className="flex items-center justify-between px-8 md:px-16 h-full cursor-pointer">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="Wildflora"
            width={150}
            height={150}
            className="h-[25px] w-[101px] sm:h-[40px] sm:w-[162px] hover:scale-105 transition-all duration-300"
          />
        </Link>
        <nav className="hidden lg:block w-[656px] h-[24px]">
          <ul className="flex justify-between gap-10 font-medium text-base font-satoshi text-[#1E1E1E]">
            <li className="hover:scale-105 transition-all duration-300">
              Home
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              About
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              Journal
            </li>
            <li className="transition-all duration-300">Plan Library</li>
            <li className="hover:scale-105 transition-all duration-300">
              Community
            </li>
            <li className="hover:scale-105 transition-all duration-300">
              Contact
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-5">
          <Search className="h-[20px] w-[20px] hidden md:block hover:scale-105 transition-all duration-300" />
          <User className="h-[20px] w-[20px] hidden md:block hover:scale-105 transition-all duration-300" />
          <Menu className="h-[20px] w-[20px] lg:hidden" />
        </div>
      </div>
    </div>
  );
}
