import Image from "next/image";
import Backdrop from "../assets/images/about_backdrop.gif";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import BoxWrapper from "../components/BoxWrapper";

export default function About() {
  return (
    <main>
      <div className="w-full h-[75vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl max-sm:text-8xl font-bold text-white drop-shadow-2xl">
            ABOUT
          </h1>
        </div>

        {/* Image */}
        <Image
          src={Backdrop}
          alt="hero banner"
          className="w-full h-full object-cover"
          quality={100}
          loading="lazy"
        />
      </div>

      <MaxWidthWrapper>
        {/* Hero section */}
        <BoxWrapper className="-translate-y-10">
          <h1 className="max-sm:text-4xl max-sm:text-center text-7xl font-bold">
            Lorem ipsum
          </h1>
          <p className="text-xl py-5">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <button className="bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600">
            CTA
          </button>
        </BoxWrapper>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-20">
        <h1 className="font-bold text-2xl">Lorem ipsum</h1>
        <p className="text-xl py-5">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </MaxWidthWrapper>
    </main>
  );
}
