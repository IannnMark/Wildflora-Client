import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative mt-10 flex items-center justify-center"
    >
      <div className="px-4 py-6 md:p-6 lg:p-10">
        <Image
          src="/images/AboutSection.png"
          alt=""
          width={1328}
          height={715}
          sizes="(min-width: 1024px) 1328px, (min-width: 768px) 688px, 295px"
          className="h-[639px] w-[295px] rounded-[10px] object-cover md:h-[779px] md:w-[688px] lg:h-[715px] lg:w-[1328px] xl:h-[750px] xl:w-[1440px] 2xl:h-[900px] 2xl:w-[1800px]"
          quality={90}
        />
      </div>

      <div className="absolute bottom-12 flex h-[354px] w-[263px] flex-col justify-center rounded-xl bg-cream pl-8 md:h-[310px] md:w-[640px] md:pl-10 lg:bottom-20 lg:left-28 lg:h-[637px] lg:w-[552px]">
        <h2
          id="about-heading"
          className="font-gabriela text-[32px] font-normal leading-[1.1] text-black md:text-[48px]"
        >
          From One Plant <br className="hidden md:block" /> Lover to Another
        </h2>
        <p className="mt-2 font-satoshi text-[16px] font-normal leading-6 text-black">
          Wildflora is a gentle space built for home{" "}
          <br className="hidden md:block" /> gardeners, botanists, and everyday
          nature lovers.
        </p>

        <Link
          href="/about"
          className="mt-5 inline-flex h-[47px] w-[210px] items-center justify-center rounded-full bg-olive font-gabriela text-[16px] text-white transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
}
