import Image from 'next/image'
import Backdrop from './assets/images/backdrop.gif'
import MaxWidthWrapper from './components/MaxWidthWrapper';
import Logo from './assets/images/UTESLogo.svg'

export default function Home() {
  return (
    <main>
      <div className='w-full h-[75vh] max-sm:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%'></div>
        <Image src={Backdrop} alt='hero banner' className='w-full h-full object-cover' quality={100} loading='lazy'/>
      </div>

      <MaxWidthWrapper>
        <div className='bg-primary text-white p-20 rounded-3xl -translate-y-10 shadow-lg shadow-cyan-500 relative overflow-hidden'>
          <h1 className='text-7xl font-bold'>Gear Up for Victory!</h1>
          <p className='text-xl py-5'>Unleash timeless style and unbeatable comfort with the 2024 Cloud9 Pro Kit! Carefully selected for durability and functionality, each product empowers you to represent Cloud9 in any environment.</p>
          <button className='bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold'>CTA</button>
          <Image src={Logo} alt='logo' className='absolute opacity-10 -z-10 h-[150%] w-fit -top-5 -right-20'/>
        </div>

      </MaxWidthWrapper>
    </main>
  );
}
