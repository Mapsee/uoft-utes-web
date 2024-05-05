import { cn } from "../lib/utils"
import { ReactNode } from "react"
import Image from 'next/image'
import Logo from '../assets/images/UTESLogo.svg'

const BoxWrapper = ({
    className,
    children
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div className={cn("text-white bg-primary relative overflow-hidden p-8 md:p-20 rounded-3xl border-4 border-cyan-500", className)}>
            {children}
            <Image src={Logo} alt='logo' className='absolute opacity-10 -z-10 h-[150%] w-fit -top-5 -right-20' />
        </div>
    )
}

export default BoxWrapper
