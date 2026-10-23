import Image from "next/image";
import { values } from "@/app/data/values";

export default function AboutValues() {
  return (
    <section className="flex w-full items-center bg-white sm:h-[1004px] md:h-[602px] lg:h-[425px]">
      <div className="grid w-full grid-cols-1 gap-10 px-5 py-14 md:grid-cols-2 md:px-16 md:py-0 lg:grid-cols-4 lg:gap-16">
        {values.map((value) => (
          <div key={value.title}>
            <Image
              src={value.icon}
              alt=""
              width={value.width}
              height={40}
              className="h-10 w-auto"
            />
            <h3 className="mt-4 font-gabriela text-[24px] font-normal text-[#3C4527] leading-[130%]">
              {value.title}
            </h3>
            <p className="mt-3 font-satoshi text-[16px] font-normal text-[#59663A] leading-6">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
