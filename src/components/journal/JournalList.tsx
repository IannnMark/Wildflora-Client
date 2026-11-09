"use client";

import { useState } from "react";
import Image from "next/image";
import { PlantJournals } from "@/app/data/journal";

const categories = [
  ...new Set(PlantJournals.map((journal) => journal.category)),
];

const filters = ["All", ...categories];

export default function JournalList() {
  const [active, setActive] = useState("All");

  const visibleCategories = (active === "All" ? categories : [active]).filter(
    (category) =>
      PlantJournals.some((journal) => journal.category === category),
  );

  return (
    <section className="flex w-full justify-center bg-white py-14 md:py-20">
      <div className="w-full max-w-[1392px] px-5 md:px-10">
        <div className="flex justify-start overflow-x-auto md:justify-center">
          <div className="flex shrink-0 gap-2 md:gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`h-[47px] whitespace-nowrap rounded-full px-5 font-gabriela text-[16px] font-normal transition-colors ${
                  active === filter
                    ? "bg-olive text-white"
                    : "text-[#3C4527] hover:bg-cream"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {visibleCategories.length === 0 && (
          <p className="mt-16 text-center font-satoshi text-[16px] text-[#59663A]">
            No stories in {active} yet. Check back soon.
          </p>
        )}

        {visibleCategories.map((category) => (
          <div key={category} className="mt-16">
            <h2 className="font-gabriela text-[32px] font-normal text-[#3C4527] md:text-[48px]">
              {category}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PlantJournals.filter(
                (journal) => journal.category === category,
              ).map((journal) => (
                <article key={journal.id}>
                  <div className="relative h-[300px] w-[295px] md:w-[328px] lg:w-[300px] xl:w-[416px] overflow-hidden rounded-xl">
                    <Image
                      src={journal.image}
                      alt={journal.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <span className="mt-6 inline-block rounded-full bg-cream px-4 py-1 font-satoshi text-[12px] text-[#3C4527]">
                    {journal.category}
                  </span>
                  <h3 className="mt-2 font-gabriela text-[24px] font-normal text-black">
                    {journal.title}
                  </h3>
                  <p className="mt-2 font-satoshi text-[14px] font-normal text-black">
                    {journal.description}
                  </p>
                  <button
                    type="button"
                    className="mt-4 h-[43px] rounded-full bg-olive px-6 font-gabriela text-[16px] font-normal text-white transition hover:opacity-90"
                  >
                    Read More
                  </button>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
