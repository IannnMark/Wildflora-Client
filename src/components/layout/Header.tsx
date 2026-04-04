import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[#FEFCEB] h-[57px] w-full">
      <div className="flex items-center justify-between px-8 h-full">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="Wildflora"
            width={150}
            height={150}
            className="h-[25px] w-[101px]"
          />
        </Link>
        <Menu className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
}
