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
            About Us
          </h1>
          <p className="text-xl py-5">
            We strive to grow the esports scene at the University of Toronto and the gaming community across the city overall. We currently have divisions supporting League of Legends, Counter-Strike 2, Overwatch 2, and VALORANT. We compete at the highest level for each of these games, and also host some of the largest gaming communities in Ontario. Our events include LAN tournaments, socials, professional gamer meetups, and charity fundraisers.
          </p>
          <button className="bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600">
            Contact Us
          </button>
        </BoxWrapper>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-20 -mt-20">
        <h1 className="font-bold text-4xl mb-5">What We Do:</h1>
        <h1 className="text-2xl">Creative</h1>
        <p className="text-xl py-5">
          Through our many design teams we offer professional quality media and production to meet our vision for each demographic.
        </p>
        <h1 className="text-2xl">Adaptable</h1>
        <p className="text-xl py-5">
          Despite the pandemic, UTES has delivered on consistent online events and now is transitioning into an in-person model now with our access to a clubroom.
          Community Driven - By running events tailored to our communities' needs, and specific to each game we are able to deliver a nuanced experience for our members.
        </p>
        <h1 className="text-2xl">Community Driven</h1>
        <p className="text-xl py-5">
          By running events tailored to our communities' needs, and specific to each game we are able to deliver a nuanced experience for our members.
        </p>
        
      </MaxWidthWrapper>
    </main>
  );
}
