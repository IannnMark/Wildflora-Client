import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative overflow-hidden w-full h-[689px]">
      <Image
        src={"/images/about/about.jpeg"}
        alt="About Us"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-[64px] font-normal leading-[120%] font-gabriela">
          A Little About Wildflora
        </h1>
      </div>
    </div>
  );
}
