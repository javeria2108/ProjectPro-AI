import ArrowRight from '@/assets/arrow-right.svg';
import GalaxyImage from '@/assets/galaxy.png'
import Image from 'next/image';
import Background from '@/assets/background.jpg'
import NebulaImagr from '@/assets/nebula.png'
import Waves from '@/assets/waves.svg'
export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10  overflow-x-clip bg-cover bg-fixed bg-no-repeat'  style={{ backgroundImage: `url(${Background.src})` }}>
      <div className="container">
        <div className='md:flex'>
        <div className='md:w-[478px]'>
          {/* <div className="text-sm text-[#F963F6] inline-flex border border-white/10 px-3 py-1 rounded-lg tracking-tighter">
          Your FYP Command Center
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#390e3f] to-[#3605a1] text-transparent bg-clip-text mt-6">Starship Scholar</h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter bg-[#B8D8FF] text-transparent bg-clip-text mt-6">Innovate, Research, Achieve: Your Final Year Project Companion</h2>
          <p className="text-xl text-[#0E0137] tracking-tight mt-6">
          Discover, organize, and conquer your final year project with AI-powered tools and resources.
          </p>
          <div className=" flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get waitlisted</button>
            <button className="btn btn-text gap-1">
              <span className="text-[#B8D8FF]">
              Learn more
              </span>
              <ArrowRight classname='h-5 w-5 text-[#0E0137]'/>
              </button>
          </div>
        </div>
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
  <div className="relative w-full h-full">
  <Image 
        src={NebulaImagr} 
        alt='nebula image'
        layout="fill"
        objectFit="cover"
        className="z-10"
      />
      <Image 
        src={GalaxyImage} 
        alt="Starship Logo" 
        layout="fill"
        objectFit="contain"
        className='z-20 absolute top-[-100px] md:object-none md:object-left-top'
      />
  </div>
</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
  <Waves/>
</div>
    </section>
  )
};
