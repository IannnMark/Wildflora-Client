import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="overflow-hidden">
      <Image
        src={"/images/hero-bg.png"}
        alt="Homepage banner"
        width={1920}
        height={689}
        className="w-full h-[689px] object-cover"
        quality={100}
        priority
      />
    </div>
  );
}
