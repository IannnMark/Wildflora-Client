import Image from "next/image";

export default function NewsLetter() {
  return (
    <div className="relative">
      <Image
        src={"/images/newsletter.jpeg"}
        alt="News Letter"
        width={1440}
        height={500}
        sizes="100vw"
        className="h-[500px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center md:px-0 px-10">
        <h1 className="font-gabriela font-normal text-[48px] leading-[1.3] text-cream">
          Get Weekly Plant Care Tips
        </h1>
        <p className="text-cream font-satoshi font-normal text-base leading-[24px]">
          Get monthly tips, care reminders, and forum highlights
        </p>
        <form className="mt-5 flex w-full flex-col items-start gap-2 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="h-[44px] md:h-[47px] w-full md:w-[407px] rounded-full bg-[#EDEDED] px-5 text-sm"
          />
          <button
            type="submit"
            className="h-[47px] w-full md:w-[123px] rounded-full bg-[#59663A] text-cream"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
