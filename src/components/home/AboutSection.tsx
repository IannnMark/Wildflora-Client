import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="relative mt-10 flex items-center justify-center">
      <div className="pt-6 pb-6 pl-4 pr-4 md:p-6 lg:p-10">
        <Image
          src={"/images/AboutSection.png"}
          alt="About images"
          width={1328}
          height={715}
          className="lg:h-[715px] lg:w-[1328px] object-cover md:w-[688px] md:h-[779px] w-[295px] h-[639px] rounded-[10px]"
          quality={100}
          priority
        />
      </div>

      <div className="absolute bg-[#FEFCEB] lg:w-[552px] lg:h-[637px] md:w-[640px] md:h-[310px] w-[263px] h-[354px] rounded-xl lg:left-28 lg:bottom-20 bottom-12 flex flex-col justify-center">
        <h1 className="font-gabriela font-normal md:text-[48px] text-[32px] text-black text-start md:pl-10 pl-8 leading-[1.1]">
          From One Plant <br className="hidden md:block" /> Lover to Another
        </h1>
        <p className="font-satoshi font-normal text-[16px] text-black text-start md:pl-10 pl-8 leading-6 mt-2">
          Wildfora is a gentle space built for home{" "}
          <br className="hidden md:block" /> gardeners, botanists, and everyday
          nature lovers.
        </p>

        <div className="md:pl-10 pl-8">
          <button className="rounded-full text-[16px] font-gabriela bg-[#59663A] w-[210px] h-[47px] text-white mt-5">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
