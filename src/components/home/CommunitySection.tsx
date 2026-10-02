"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Community } from "@/app/data/community";
import { User } from "@/app/data/user";

export default function CommunitySection() {
  const contentRef = useGsapReveal<HTMLDivElement>({
    selector: "[data-animate]",
    y: 40,
    stagger: 0.2,
    start: "top 80%",
  });

  return (
    <section className="w-full bg-[#3C4527]">
      <div
        ref={contentRef}
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-10 py-20 md:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
      >
        <div data-animate className="max-w-[520px]">
          <h2 className="font-gabriela text-[32px] font-normal leading-[1.15] text-white md:text-[48px]">
            A Community That Blooms Together
          </h2>

          <div className="mt-5 flex -space-x-3">
            {Community.map((member) => (
              <span
                key={member.id}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-[#3C4527]"
              >
                <Image
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
            ))}
          </div>

          <p className="mt-5 font-satoshi text-[16px] leading-6 text-cream/85">
            Ask questions. Share advice. Celebrate new leaves. The Wildflora
            Forum is a welcoming space where plant lovers of all levels gather
            to trade stories, tips, and discoveries.
          </p>

          <Link href="/community">
            <button className="mt-6 h-[47px] w-[203px] rounded-full bg-cream font-gabriela text-[16px] text-black transition-transform duration-300 hover:scale-105">
              Visit the Forum
            </button>
          </Link>
        </div>

        <div
          data-animate
          className="w-full rounded-2xl bg-cream p-6 shadow-xl md:p-8 lg:w-[640px]"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {User.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <Image
                    src={user.image}
                    height={48}
                    width={48}
                    alt={user.firstName}
                  />
                  <div className="flex flex-col">
                    <p className="font-satoshi text-base font-medium text-black">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="font-satoshi text-sm text-black/60">
                      {user.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <span className="shrink-0 inline-flex items-center justify-center rounded-full bg-olive w-[108px] h-[30px] text-[14px] text-white font-satoshi font-normal">
              Cactus Care
            </span>
          </div>

          <p className="mt-4 font-satoshi text-[16px] leading-6 text-black">
            Loving how my little cactus corner is coming together! 🌵 Each plant
            has its own personality, and I&apos;m amazed at how resilient they
            are in the sun. Do you also keep cacti at home, or do you prefer
            leafy plants?
          </p>

          <div className="relative mt-4 flex h-[260px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-br from-[#8FA06A] via-[#5E7A4A] to-[#3C4527] md:h-[340px]">
            <Image
              src={"/images/community/cactus.png"}
              alt="Cactus"
              width={576}
              height={408}
            />
          </div>

          <div className="mt-4 flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-satoshi text-[14px] text-black/70">
              <Heart className="h-4 w-4" />
              128 Likes
            </span>
            <span className="flex items-center gap-1.5 font-satoshi text-[14px] text-black/70">
              <MessageCircle className="h-4 w-4" />
              41 comments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
