import Image from "next/image";
import Backdrop from "./../assets/images/utesbanner.png";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import PlayerCard from "@/app/components/PlayerCard";

export default function Overwatch2() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div> */}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-9xl max-sm:text-8xl font-bold text-white drop-shadow-2xl">
            Staff
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

      {/* Varsity */}
      <MaxWidthWrapper className="py-20">
        <h1 className="font-bold text-6xl pb-6 text-primary">Esports Executives</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-20 gap-y-5 justify-stretch">
            <PlayerCard
              alias="kaprixal"
              name="Kirsten S."
              role="President"
            />
            <PlayerCard
              alias="JaidynPurple"
              name="Jaidyn Y."
              role="External Affairs"
            />
            <PlayerCard
              alias="ghoulies"
              name="Emily H."
              role="Marketing Operations"
            />
            <PlayerCard
              alias="zlion"
              name="Zilin C."
              role="Broadcast Operations"
            />
            <PlayerCard
              alias="fairyy"
              name="Ariana D."
              role="Treasurer"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
