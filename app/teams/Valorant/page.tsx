import Image from "next/image";
import Backdrop from "../../assets/images/backdrop_valorant.gif";

export default function Valorant() {
  return (
    <main>
      <div className="w-full h-[75vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl max-sm:text-8xl font-bold text-white drop-shadow-2xl">
            VALORANT
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
    </main>
  );
}
