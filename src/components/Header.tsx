import React from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image'
import MenuIcon from '@/assets/menu.svg'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0'>
        <div className='flex justify-center items-center py-3 bg-black text-white text-sm'>
            <div className='inline-flex gap-1 items-center'>
                <p>Join our waitlist</p>
                <ArrowRight classname='h-4 w-4 inline-flex justify-center items-center'/>
            </div>

        </div>
        <div className='py-5'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                <Image src={Logo} alt="Starship Logo" height={40} width={40}/>
                <MenuIcon className='h-6 w-6'/>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header