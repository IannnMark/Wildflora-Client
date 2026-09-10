"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Journals } from "@/app/data/journal";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function JournalSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const headerRef = useGsapReveal<HTMLDivElement>({
    selector: "[data-animate]",
    stagger: 0.15,
  });
  const carouselRef = useGsapReveal<HTMLDivElement>({
    selector: "[data-animate]",
    y: 32,
    stagger: 0.1,
    start: "top 88%",
  });

  return (
    <div className="w-full max-w-[1392px] px-10">
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row justify-between"
      >
        <div data-animate>
          <h1 className="font-gabriela font-normal md:text-[48px] text-[32px]">
            Grow Your Plant Knowledge
          </h1>
          <p className="font-satoshi font-normal text-[16px]">
            Our plant journal helps you care for every leaf with confidence.
          </p>
        </div>
        <div data-animate className="pt-[18px]">
          <Link href={"/journal"}>
            <button className="bg-olive font-gabriela font-normal text-white rounded-full h-[47px] w-[198px] text-[16px]">
              Explore the Journal
            </button>
          </Link>
        </div>
      </div>

      <div ref={carouselRef} className="mt-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {Journals.map((src, index) => {
              const isMain = index === selectedIndex;
              return (
                <div
                  key={src.id}
                  data-animate
                  className="mr-3 min-w-0 shrink-0 grow-0 basis-full md:basis-auto"
                >
                  <div
                    className={`relative h-[448px] shrink-0 grow-0 basis-auto overflow-hidden rounded-[10px] transition-[width] duration-500 ease-in-out ${
                      isMain ? "w-full md:w-[640px]" : "w-full md:w-[320px]"
                    }`}
                  >
                    <Image
                      src={src.image}
                      alt={src.title}
                      fill
                      sizes="(min-width: 768px) 640px, 100vw"
                      className="object-cover"
                      quality={90}
                    />
                  </div>

                  <div
                    className={`
              ${isMain ? "w-full md:w-[640px]" : "w-full md:w-[320px]"}
            `}
                  >
                    <p className="text-black font-gabriela text-[24px] mt-2 truncate">
                      {src.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div data-animate className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-black" : "bg-black/25"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous image"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7E7E1] text-black transition hover:bg-[#dcdcd4]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next image"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-olive text-white transition hover:opacity-90"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
