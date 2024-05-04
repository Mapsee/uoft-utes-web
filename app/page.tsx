import Image from 'next/image'
import Backdrop from './assets/images/backdrop.gif'
import MaxWidthWrapper from './components/MaxWidthWrapper';
import BoxWrapper from './components/BoxWrapper';
import Overwatch2 from './assets/images/overwatch2.jpg'
import TeamCard from './components/TeamCard';



export default function Home() {
  return (
    <main>
      <div className='w-full h-[75vh] max-sm:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%'></div>
        <Image src={Backdrop} alt='hero banner' className='w-full h-full object-cover' quality={100} loading='lazy' />
      </div>

      <MaxWidthWrapper>
        {/* Hero section */}
        <BoxWrapper className='-translate-y-10 mb-36'>
          <h1 className='text-7xl font-bold'>Gear Up for Victory!</h1>
          <p className='text-xl py-5'>Unleash timeless style and unbeatable comfort with the 2024 Cloud9 Pro Kit! Carefully selected for durability and functionality, each product empowers you to represent Cloud9 in any environment.</p>
          <button className='bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600'>CTA</button>
        </BoxWrapper>

        {/* Team section */}
        <h1 className='uppercase text-primary text-6xl font-bold'>Meet the teams</h1>
        <div className='flex justify-between gap-5 w-full overflow-x-auto p-3 carousel'>
          <TeamCard img={Overwatch2} game='Overwatch2' />
          <TeamCard img={Overwatch2} game='Overwatch2' />
          <TeamCard img={Overwatch2} game='Overwatch2' />
          <TeamCard img={Overwatch2} game='Overwatch2' />
        </div>
      </MaxWidthWrapper>

    </main>
  );
}
