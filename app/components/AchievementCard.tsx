import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const AchievementCard = ({ img, event, date, team }: { img: StaticImageData, event: string, date: string, team: string }) => {
    return (
        <Link href={`/teams/${team}`} className='min-w-[150px] w-1/5 flex flex-col justify-center items-center text-center text-white text-xl duration-300 hover:opacity-60'>
            <Image src={img} alt={event} className='aspect-square w-full max-w-42 object-cover object-center' />
            <p className='font-bold'>{date}</p>
            <p>{event}</p>
        </Link>
    )
}

export default AchievementCard
