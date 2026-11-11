import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative overflow-hidden w-full h-[250px] md:h-[689px]">
      <Image
        src={"/images/library/Banner.jpeg"}
        alt="Plant Library Banner"
        layout="fill"
        sizes="100vw"
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white font-gabriela leading-[120%] text-[32px] md:text-[64px]">
          Plant Library
        </h1>
      </div>
    </div>
  );
}
