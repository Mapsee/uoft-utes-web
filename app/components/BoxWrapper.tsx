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
        <div className={cn("text-white bg-primary relative overflow-hidden p-20 rounded-3xl cyan_shadow", className)}>
            {children}
            <Image src={Logo} alt='logo' className='absolute opacity-10 -z-10 h-[150%] w-fit -top-5 -right-20' />
        </div>
    )
}

export default BoxWrapper
