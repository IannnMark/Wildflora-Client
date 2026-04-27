"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
    requestAnimationFrame(() => {
      drawerRef.current?.style.setProperty("transform", "translateX(0");
      backdropRef.current?.style.setProperty("opacity", "1");
    });
  };

  const closeMenu = () => {
    drawerRef.current?.style.setProperty("transform", "translateX(100%)");
    backdropRef.current?.style.setProperty("opacity", "0");
    setTimeout(() => setIsMenuOpen(false), 300);
  };

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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li
                  key={link.name}
                  className="relative group hover:text-[#722F37]"
                >
                  <Link
                    href={link.href}
                    className={`pb-1 ${isActive ? "text-[#722f37] underline" : "text-black"}`}
                  >
                    {link.name}{" "}
                    <span
                      className={`absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-5">
          <Search className="h-[20px] w-[20px] hidden md:block hover:scale-105 transition-all duration-300 hover:text-[#722F37]" />
          <User className="h-[20px] w-[20px] hidden md:block hover:scale-105 transition-all duration-300 hover:text-[#722F37]" />
          <Menu
            onClick={openMenu}
            className="h-[20px] w-[20px] lg:hidden hover:text-[#722F37]"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="font-satoshi fixed inset-0 z-50 lg:hidden">
          <div
            ref={backdropRef}
            className="absolute inset-0 bg-black/50"
            style={{ opacity: 0, transition: "opacity 0.3s ease" }}
            onClick={closeMenu}
          />

          <div
            ref={drawerRef}
            className="absolute top-0 right-0 flex h-full w-80 flex-col bg-[#FEFCEB]"
            style={{
              transform: "translateX(100%)",
              transition: "transform 0.3s ease",
            }}
          >
            <div className="flex justify-start p-4">
              <button onClick={closeMenu}>
                <X className="text-black" />
              </button>
            </div>
            <nav className="flex grow flex-col space-y-6 px-4 py-6 text-lg font-semibold text-black items-end">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeMenu}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
