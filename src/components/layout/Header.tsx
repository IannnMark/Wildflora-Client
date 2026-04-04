import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#FEFCEB] h-[57px] w-full">
      <div className="flex items-center justify-between sm:px-8 md:px-16 h-full">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="Wildflora"
            width={150}
            height={150}
            className="h-[25px] w-[101px] sm:h-[30px] sm:w-[105px]"
          />
        </Link>
        <div className="flex items-center justify-between gap-5">
          <Search className="h-[20px] w-[20px] hidden md:block" />
          <User className="h-[20px] w-[20px] hidden md:block" />
          <Menu className="h-[20px] w-[20px] lg:hidden" />
        </div>
      </div>
    </div>
  );
}
