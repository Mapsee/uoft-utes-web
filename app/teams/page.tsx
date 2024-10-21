import Image from "next/image";
import Backdrop from "../assets/images/utesbanner.png";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Overwatch2 from "../assets/images/overwatch2.jpg";
import CSGO from "../assets/images/cs.png";
import League from "../assets/images/league.png";
import Valorant from "../assets/images/val.png";
import TeamCard from "../components/TeamCard";

export default function Teams() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl max-sm:text-8xl font-bold text-white drop-shadow-2xl z-10">
            TEAMS
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

      {/* Team section */}

      <section className="py-20">
        <MaxWidthWrapper>
          <h1 className='max-sm:text-4xl max-sm:text-center uppercase text-primary text-6xl font-bold mb-12'>Meet the teams</h1>
          <div className="flex justify-between gap-5 w-full overflow-x-auto pr-3 pb-3 carousel">
            <TeamCard img={Overwatch2} game="Overwatch 2" link="Overwatch2"/>
            <TeamCard img={League} game="League of Legends" link="LeagueOfLegends"/>
            <TeamCard img={CSGO} game="Counter-Strike 2" link="CounterStrike2"/>
            <TeamCard img={Valorant} game="Valorant" link="Valorant"/>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
