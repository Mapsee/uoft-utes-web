import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const TeamCard = ({ img, game, link }: { img: StaticImageData, game: string, link: string }) => {
    return (
        <Link href={`/teams/${link}`} className='relative group min-w-64 h-[60vh] cyan_shadow rounded-3xl hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100'>
            <Image src={img} alt={game} className='rounded-3xl w-full h-full object-cover object-center' />
            <div className='flex justify-center items-center w-full h-full absolute bg-black/0 group-hover:bg-black/70 z-10 top-0 left-0 rounded-3xl duration-100 cursor-pointer'>
                <p className='text-white text-center text-2xl opacity-0 group-hover:opacity-100 font-bold'>{game}</p>
            </div>
        </Link>
    )
}

export default TeamCard

