"use client";

import Image from "next/image";
import Link from "next/link";
import { Library } from "@/app/data/library";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function LibrarySection() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    selector: "[data-animate]",
    stagger: 0.15,
  });
  const cardsRef = useGsapReveal<HTMLDivElement>({
    selector: "[data-animate]",
    y: 40,
    stagger: 0.2,
    start: "top 85%",
  });

  return (
    <div className="w-full max-w-[1440px] px-10 mt-20 pb-20">
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row justify-between"
      >
        <div data-animate>
          <h1 className="font-gabriela font-normal md:text-[48px] text-[32px]">
            Explore Different Type of Plants
          </h1>
          <p className="font-satoshi font-normal text-[16px]">
            Your go-to guide for houseplants, from easy beginners to rare gems.
          </p>
        </div>
        <div data-animate className="pt-[18px]">
          <Link href={"/library"}>
            <button className="bg-olive font-gabriela font-normal text-white rounded-full h-[47px] w-[240px] text-[16px]">
              Explore the Plant Library
            </button>
          </Link>
        </div>
      </div>

      <div ref={cardsRef} className="mt-10 flex flex-col gap-14 md:gap-20">
        {Library.map((plant) => (
          <div
            key={plant.id}
            data-animate
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16"
          >
            <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[10px] md:h-[412px] lg:h-[430px] w-[295px] md:w-[688px] lg:w-[636px]">
              <Image
                src={plant.image}
                alt={plant.title}
                fill
                sizes="(min-width: 1024px) 592px, 100vw"
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-wrap gap-2 text-center justify-center">
                <span className="rounded-full bg-cream px-3 py-1 font-satoshi text-[12px] text-black">
                  {plant.light}
                </span>
                <span className="rounded-full bg-[#EAD9B8] px-3 py-1 font-satoshi text-[12px] text-black">
                  {plant.water}
                </span>
                <span className="rounded-full bg-olive px-3 py-1 font-satoshi text-[12px] text-white">
                  {plant.difficulty}
                </span>
              </div>

              <h2 className="font-gabriela text-[24px] font-normal text-black md:text-[32px]">
                {plant.title}
              </h2>
              <p className="font-satoshi text-[16px] font-normal text-black">
                {plant.description}
              </p>

              <Link href={"/library"} className="mt-2">
                <button className="h-[47px] rounded-full bg-olive px-6 font-gabriela text-[16px] text-white transition-transform duration-300 hover:scale-105">
                  View Full Guide
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
