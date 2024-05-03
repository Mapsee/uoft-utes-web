import React from 'react'
import Kovaak from '../assets/images/kovaaks_logo.svg'
import Image from 'next/image'
import Discord from '../assets/images/icons/discord.svg'
import Twitter from '../assets/images/icons/twitter.svg'
import Insta from '../assets/images/icons/instagram.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex justify-center absolute bottom-0 w-screen flex-col'>
            <div className='flex flex-col gap-3 py-20 justify-center items-center'>
                <h1 className='uppercase text-primary text-center text-xl'>Proud partners of</h1>
                <Image src={Kovaak} alt="Kovaak logo" width={250} />
            </div>

            <div className='py-20 flex flex-col justify-center items-center text-center uppercase bg-primary text-white'>
                <div className='flex space-x-12 pb-6'>
                    <Link href={"discord"} target='_blank'>
                        <Image src={Discord} alt="Discord logo" width={40} />
                    </Link>
                    <Link href={"https://twitter.com/UofTEsports"} target='_blank'>
                        <Image src={Twitter} alt="Twitter logo" width={40} />
                    </Link>
                    <Link href={"https://www.instagram.com/uoftesports/"} target='_blank'>
                        <Image src={Insta} alt="Instagram logo" width={40} />
                    </Link>
                </div>
                <h1 className='text-xl'>@2023 University of Toronto</h1>
            </div>
        </footer>
    )
}

export default Footer

