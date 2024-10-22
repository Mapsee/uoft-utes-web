import Image from "next/image";
import Backdrop from "../assets/images/utesbanner.png";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import BoxWrapper from "../components/BoxWrapper";

export default function About() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-9xl max-sm:text-8xl font-bold text-white drop-shadow-2xl z-10">
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
          <h2 className="pt-20 text-primary max-sm:text-4xl max-sm:text-center text-6xl font-bold">
            About UofT Esports (UTES)
          </h2>
          <p className="text-xl py-5">
            We strive to grow the esports scene at the University of Toronto and the gaming community across the city overall. We currently have divisions supporting League of Legends, Counter-Strike 2, Overwatch 2, and VALORANT. We compete at the highest level for each of these games, and also host some of the largest gaming communities in Ontario. Our events include LAN tournaments, socials, professional gamer meetups, and charity fundraisers.
          </p>
          <a href="/contact"><button className="bt text-white bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600">
            Contact Us
          </button></a>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pt-20">
        <h1 className="font-bold text-6xl mb-5 text-primary">What We Do</h1>
        <h1 className="text-2xl font-medium text-secondary">Events</h1>
        <p className="text-xl py-5">
          We run many events year-long, including in-houses, small tournaments, LAN events, watch parties, intramural, irl meetups and more. Join our Discord for more information!
        </p>
        <h1 className="text-2xl font-medium text-secondary">Broadcast</h1>
        <p className="text-xl py-5">
          We have developed our own broadcast unit at UofT Esports (UTES), consisting of many students and volunteers from the esports community interested in esports production. Broadcast at UTES gives many the opportunity to learn about casting, observing, and producing through hands-on experience.
        </p>
        <h1 className="text-2xl font-medium text-secondary">Collegiate</h1>
        <p className="text-xl py-5">
          UofT is home to many of the top esports players in our game titles (Overwatch 2, Valorant, League of Legends, Counter-Strike 2). We offer Varsity teams that represent the school competing year-long in various tournaments, as well as Academy teams for aspiring competitive players.
        </p>
      </MaxWidthWrapper>
    </main>
  );
}
