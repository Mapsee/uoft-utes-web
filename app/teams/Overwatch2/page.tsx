import Image from "next/image";
import Backdrop from "../../assets/images/owbackdrop.gif";
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
            OVERWATCH 2
          </h1>
        </div>

        {/* Image */}
        <Image
          src={Backdrop}
          alt="hero banner"
          className="w-full h-full object-cover"
          quality={100}
          loading="lazy"
          unoptimized={true}
        />
      </div>

      {/* Varsity */}
      <MaxWidthWrapper className="py-20">
        <h1 className="font-bold text-6xl pb-6 text-primary">VARSITY</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-20 gap-y-5 justify-stretch">
            <PlayerCard
              alias="Phant0mz"
              name="Lucas C."
              role="Tank"
              instagram="lucas.cheuk"
              twitter="Phant0mzOW"
            />
            <PlayerCard
              alias="Hypothesis"
              name="Max G."
              role="Flex (Tank, Support)"
              twitch="hypothesis_ow"
              instagram="maxgarciagomez"
              twitter="HypothesisOW"

            />
            <PlayerCard
              alias="Solace"
              name="Mao M."
              role="Damage"
              twitch="sorryimsolace"
              twitter="sorryimsolace"
            />
            <PlayerCard
              alias="Eye"
              name="Yangxiao J."
              role="Damage"
            />
            <PlayerCard
              alias="Defferatel"
              name="David V."
              role="Support"
              twitch="defferatel"
              instagram="realdefferatel"
              twitter="defferatel2"
            />
            <PlayerCard
              alias="JumboPlayer"
              name="Marcus L."
              role="Support"
            />
            <PlayerCard
              alias="GoofyJoober"
              name="Hani S."
              role="Damage (Sub)"
              twitch="goofyjoober"
            /> 
            <PlayerCard
              alias="Soomshigi"
              name="Hangyeol Y."
              role="Tank (Sub)"
            />
            <PlayerCard
              alias="Aspect"
              name="Hunter S."
              role="Tank (Sub)"
              twitter="ow_aspect"
              twitch="aspect_ow1"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-20">
        <h1 className="font-bold text-6xl pb-6 text-primary">ACADEMY</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-20 gap-y-5 justify-stretch">
            <PlayerCard
              alias="Chiori"
              name="Ryan L."
              role="Tank"
            />
            <PlayerCard
              alias="computerow "
              name="Chris N."
              role="Support"
              twitch="computerow"
              instagram="chris.r.nash"
              twitter="computerow"
            />
            <PlayerCard
              alias="altair"
              name="Vincent P."
              role="Damage"
              instagram="naei.vp"
              twitch="altairvyz"
              twitter="altair_vyz"
            />
            <PlayerCard
              alias="atom"
              name="Adam C."
              role="Damage"
              instagram="chalkatom"
              twitch="chalkatom"
              twitter="atttom"
            />
            <PlayerCard
              alias="DjAshTray "
              name="Ashvin S."
              role="Damage"
            />
            <PlayerCard
              alias="WarHaterSam "
              name="Sam J."
              role="Support"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
