import React from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image'
import MenuIcon from '@/assets/menu.svg'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
        <div className='flex justify-between items-center py-3 bg-[#0E0137] text-white text-sm'>
            <div className='px-5'>
                <Image src={Logo} alt="Starship Logo" height={40} width={40} />
            </div>
            <div className='flex items-center'>
                <span className='whitespace-nowrap'>Join our waitlist</span>
                <ArrowRight className='h-4 w-4 ml-1'/>
            </div>
            <div className='px-5'>
                <MenuIcon className='h-6 w-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header