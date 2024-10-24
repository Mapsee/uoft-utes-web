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
        <nav className='sticky inset-x-0 top-0 z-30 w-full shadow-lg shadow-cyan-500/80 bg-white/90 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-full items-center justify-between py-6'>
                    <Link href={"/"}><Image src={Logo} alt='UTES logo' height={100} width={100} quality={100} className='duration-300 hover:scale-105 active:scale-95'/></Link>
                    <Link href={"/"}><h1 className='-ml-20 text-primary duration-300 hover:scale-105 active:scale-95'>University of Toronto Esports</h1></Link>
                    {/* non mobile nav */}
                    <div className='hidden md:flex space-x-12 font-bold text-2xl uppercase text-primary tracking-widest'>
                        <Link href={"/about"} className='duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            about
                        </Link>
                        <Link href={"/staff"} className='duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            staff
                        </Link>
                        <Link href={"/teams"} className='duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            teams
                        </Link>
                        <Link href={"/contact"} className='duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
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
                {open && <div className='fixed top-0 left-0 w-screen h-screen bg-black/80'></div>}
                {open &&
                    <div className='font-bold text-2xl uppercase text-primary tracking-widest flex flex-col z-40 bg-white fixed h-screen right-0 top-0 md:hidden w-2/3 min-w-[320px] p-12'>
                        <button onClick={() => {
                            setOpen(false)
                        }} className='mb-12'>
                            <X className='h-10 w-10' />
                        </button>
                        <Link href={"/about"} className='border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            about
                        </Link>
                        <Link href={"/staff"} className='border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            staff
                        </Link>
                        <Link href={"/teams"} className='border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            teams
                        </Link>
                        <Link href={"/contact"} className='border-b border-zinc-200 py-6 duration-300 hover:scale-105 active:scale-95 hover:text-cyan-500'>
                            contact
                        </Link>
                    </div>
                }
            </MaxWidthWrapper>
        </nav >
    )
}

export default Navbar
