'use client'
import React from 'react'
import Logo from '../assets/images/UTESLogo.svg'
import Image from "next/image"
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='sticky inset-x-0 top-0 z-30 w-full shadow-lg shadow-cyan-500/50 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-full items-center justify-between py-6'>
                    <Image src={Logo} alt='UTES logo' height={100} width={100} quality={100} />

                    {/* non mobile nav */}
                    <div className='hidden md:flex space-x-12 font-bold text-2xl uppercase text-primary tracking-widest'>
                        <Link href={"/about"}>
                            about
                        </Link>
                        <Link href={"/staff"}>
                            staff
                        </Link>
                        <Link href={"/teams"}>
                            teams
                        </Link>
                        <Link href={"/contact"}>
                            contact
                        </Link>
                    </div>

                    {/* Mobile nav */}
                    {!open &&
                        <button onClick={() => {
                            setOpen(true)
                        }} className='md:hidden '>
                            <Menu className='h-10 w-10' />
                        </button>
                    }
                </div>
                {open &&
                    <div className='font-bold text-2xl uppercase text-primary tracking-widest flex flex-col z-40 bg-white fixed h-screen right-0 top-0 md:hidden w-2/3 min-w-[320px] p-12'>
                        <button onClick={() => {
                            setOpen(false)
                        }} className='mb-12'>
                            <X className='h-10 w-10' />
                        </button>
                        <Link href={"/about"} className='border-b border-zinc-200 py-6'>
                            about
                        </Link>
                        <Link href={"/staff"} className='border-b border-zinc-200 py-6'>
                            staff
                        </Link>
                        <Link href={"/teams"} className='border-b border-zinc-200 py-6'>
                            teams
                        </Link>
                        <Link href={"/contact"} className='border-b border-zinc-200 py-6'>
                            contact
                        </Link>
                    </div>
                }
            </MaxWidthWrapper>
        </nav >
    )
}

export default Navbar
