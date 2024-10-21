import React from 'react'
import BMO from '../assets/images/BMO_Logo.png'
import BMONL from '../assets/images/BMONXTLVL_Blue_E.png'
import Image from 'next/image'
import Discord from '../assets/images/icons/discord.svg'
import Twitter from '../assets/images/icons/twitter.svg'
import Insta from '../assets/images/icons/instagram.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex justify-center bottom-0 w-full flex-col'>
            <div className='flex flex-col gap-3 py-20 justify-center items-center'>
                <h1 className='uppercase text-primary text-center text-xl'>Proudly sponsored by</h1>
                <Image src={BMONL} alt="BMO logo" width={250} />
                <Image src={BMO} alt="BMO NXT LVL logo" width={200} />
            </div>

            <div className='py-20 flex flex-col justify-center items-center text-center uppercase bg-primary text-white'>
                <div className='flex gap-12 pb-6'>
                    <Link href={"https://discord.gg/EyjrqZyjh8"} target='_blank' className='hover:opacity-60 duration-300'>
                        <Image src={Discord} alt="Discord logo" width={40} className='aspect-square'/>
                    </Link>
                    <Link href={"https://twitter.com/UofTEsports"} target='_blank' className='hover:opacity-60 duration-300'>
                        <Image src={Twitter} alt="Twitter logo" width={40} className='aspect-square'/>
                    </Link>
                    <Link href={"https://www.instagram.com/uoftesports/"} target='_blank' className='hover:opacity-60 duration-300'>
                        <Image src={Insta} alt="Instagram logo" width={40} className='aspect-square' />
                    </Link>
                </div>
                <h1 className='text-xl'>@2024 University of Toronto</h1>
            </div>
        </footer>
    )
}

export default Footer

