import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="w-full bg-cream">
      <div className="mx-auto flex w-full flex-col gap-10 px-5 py-14 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-28">
        <div className="w-full lg:max-w-[600px]">
          <h2 className="font-gabriela text-[32px] font-normal leading-[110%] text-[#1E1E1E] md:text-[48px]">
            Our Purpose &amp; Dream
          </h2>

          <h3 className="mt-10 font-gabriela text-[24px] font-normal text-olive md:mt-16 md:text-[32px]">
            Mission
          </h3>
          <p className="mt-3 font-satoshi text-[16px] font-normal leading-6 text-[#1E1E1E]">
            We’re here to create a calming digital home for plant lovers, a
            place to share knowledge, celebrate growth, and connect through
            curiosity and care.
          </p>

          <h3 className="mt-10 font-gabriela text-[24px] font-normal text-olive md:mt-16 md:text-[32px]">
            Vision
          </h3>
          <p className="mt-3 font-satoshi text-[16px] font-normal leading-6 text-[#1E1E1E]">
            We dream of nurturing a global community rooted in sustainability,
            wellness, and the joy of living with plants.
          </p>
        </div>

        <div className="relative aspect-616/605 w-full shrink-0 overflow-hidden rounded-xl lg:w-[616px]">
          <Image
            src="/images/about/mission.jpeg"
            alt="A plant lover tending to a bonsai at home"
            fill
            sizes="(min-width: 1024px) 616px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
