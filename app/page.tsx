import Image from 'next/image'
import Backdrop from './assets/images/backdrop.gif'
import MaxWidthWrapper from './components/MaxWidthWrapper';
import BoxWrapper from './components/BoxWrapper';
import Overwatch2 from './assets/images/overwatch2.jpg'
import TeamCard from './components/TeamCard';
import AchievementCard from './components/AchievementCard';
import Discord from './assets/images/icons/discord.svg'
import Twitter from './assets/images/icons/twitter.svg'
import Twitch from './assets/images/icons/twitch.svg'
import Youtube from './assets/images/icons/youtube.svg'

import Temp from './assets/images/tempAchiev.svg'
import Link from 'next/link';



export default function Home() {
  return (
    <main>
      <div className='w-full h-[75vh] max-sm:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%'></div>
        <Image src={Backdrop} alt='hero banner' className='w-full h-full object-cover' quality={100} loading='lazy' />
      </div>

      <MaxWidthWrapper>
        {/* Hero section */}
        <BoxWrapper className='-translate-y-10'>
          <h1 className='max-sm:text-4xl max-sm:text-center text-7xl font-bold'>Gear Up for Victory!</h1>
          <p className='text-xl py-5'>Unleash timeless style and unbeatable comfort with the 2024 Cloud9 Pro Kit! Carefully selected for durability and functionality, each product empowers you to represent Cloud9 in any environment.</p>
          <button className='bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600'>CTA</button>
        </BoxWrapper>
      </MaxWidthWrapper>

      {/* Team section */}

      <section className='py-36'>
        <MaxWidthWrapper>
          <h1 className='max-sm:text-4xl max-sm:text-center uppercase text-primary text-6xl font-bold mb-12'>Meet the teams</h1>
          <div className='flex justify-between gap-5 w-full overflow-x-auto pr-3 pb-3 carousel'>
            <TeamCard img={Overwatch2} game='Overwatch2' />
            <TeamCard img={Overwatch2} game='Overwatch2' />
            <TeamCard img={Overwatch2} game='Overwatch2' />
            <TeamCard img={Overwatch2} game='Overwatch2' />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Achievements */}
      <section className='py-36 bg-primary w-full'>
        <MaxWidthWrapper>
          <h1 className='max-sm:text-4xl max-sm:text-center uppercase text-white text-6xl font-bold'>Achievements</h1>
          <div className='flex flex-wrap gap-5 justify-around items-center'>
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
            <AchievementCard img={Temp} date='04/09/2023' event='LCS 2023 Spring Playoffs' team='league' />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact section */}
      <section className='py-36'>
        <MaxWidthWrapper>
          <h1 className='max-sm:text-4xl max-sm:text-center uppercase text-primary text-6xl font-bold mb-12'>Join our community</h1>
          <div className='flex justify-center md:justify-between items-center flex-wrap gap-5 mr-3'>
            <Link target='_blank' href={"https://discord.gg/EyjrqZyjh8"}
              className='bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500'>
              <Image src={Discord} alt='Discord' className='w-8 md:w-16 aspect-square' />
            </Link>
            <Link target='_blank' href={"https://twitter.com/UofTEsports"} className='bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500'>
              <Image src={Twitter} alt='Twitter' className='w-8 md:w-16 aspect-square' />
            </Link>
            <Link target='_blank' href={"https://www.twitch.tv/uoftesports/videos"} className='bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500'>
              <Image src={Twitch} alt='Twitch' className='w-8 md:w-16 aspect-square' />
            </Link>
            <Link target='_blank' href={"https://www.youtube.com/channel/UCrSS_P3YwBogDOHa9oZnCZw"} className='bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500'>
              <Image src={Youtube} alt='Youtube' className='w-8 md:w-16 aspect-square' />
            </Link>
          </div>

        </MaxWidthWrapper>
      </section>

    </main >
  );
}
