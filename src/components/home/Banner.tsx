import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={"/images/hero-bg.png"}
        alt="Homepage banner"
        width={1920}
        height={689}
        className="w-full h-[689px] object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 items-center text-center justify-center py-56">
        <h1 className="text-white text-[32px] md:text-[64px] font-gabriela font-normal">
          A Home for <br className="block md:hidden" /> Plant Lovers
        </h1>
        <p className="text-white text-base md:text-[20px] font-satoshi font-normal">
          Learn, share, and connect with a <br className="block sm:hidden" />{" "}
          community that <br className="hidden md:block lg:hidden" /> cares
          about plants as <br className="block sm:hidden" /> much as you do.
        </p>
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center font-gabriela font-normal mt-5">
          <button className="rounded-full w-[203px] md:w-[186px] h-[47px] border-[#FEFCEB] text-white border-2 hover:text-black hover:bg-white hover:scale-105 transition-all duration-300 text-base">
            View Plant Guides
          </button>
          <button className="rounded-full w-[203px] h-[47px] bg-[#59663A] text-white hover:text-black hover:bg-[#FEFCEB] hover:scale-105 transition-all duration-300 text-base">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
}
