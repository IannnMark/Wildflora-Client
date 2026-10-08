import Image from "next/image";
import Link from "next/link";
import { PlantOfTheWeekData } from "@/app/data/plantOfTheWeek";

export default function PlantOfTheWeek() {
  const plant = PlantOfTheWeekData[0];

  return (
    <section className="w-full bg-cream px-10 py-12 lg:py-20">
      <div className="relative mx-auto flex w-full lg:flex-col items-center justify-center">
        <div className="relative h-[493px] w-full overflow-hidden rounded-[8px] md:h-[715px] lg:aspect-1328/715">
          <Image
            src={plant.image}
            alt={plant.title}
            fill
            sizes="(min-width: 1024px) 1328px, 100vw"
            className="scale-x-[-1] object-cover"
          />
        </div>

        <div className="absolute bottom-5 left-4 right-4 flex h-[310px] flex-col items-start gap-4 rounded-lg bg-cream px-6 py-10 md:bottom-7 md:left-6 md:right-6 md:h-[233px] md:px-10 lg:top-1/2 lg:right-10 lg:bottom-auto lg:left-auto lg:h-[637px] lg:w-[474px] lg:-translate-y-1/2 lg:justify-center lg:px-10 lg:py-0">
          <h2 className="font-gabriela text-[32px] font-normal text-olive md:text-[48px]">
            {plant.title}
          </h2>
          <p className="font-satoshi text-[16px] leading-6 text-olive/80">
            {plant.description}
          </p>
          <Link href="/library">
            <button className="w-fit rounded-full bg-olive px-6 py-3 font-gabriela text-[16px] text-cream transition-transform duration-300 hover:scale-105">
              Browse Plant Library
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
