import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1392px] px-5 py-14 md:px-10 md:py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <h2 className="font-gabriela text-[32px] font-normal leading-[130%] text-[#1E1E1E] md:text-[48px]">
            How It All Started
          </h2>
          <p className="font-satoshi text-[16px] font-normal leading-6 text-[#1E1E1E] lg:max-w-[720px]">
            Wildflora began as a personal passion grew into the idea of building
            a welcoming space where people could share their knowledge,
            celebrate new leaves, and connect over the joy of growing things.
          </p>
        </div>

        <div className="relative mt-8 h-[400px] w-full overflow-hidden rounded-xl md:mt-10 md:h-[500px] lg:aspect-1312/759 lg:h-auto">
          <Image
            src="/images/about/aboutStory.jpeg"
            alt="About Story"
            fill
            sizes="(min-width: 1392px) 1312px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
