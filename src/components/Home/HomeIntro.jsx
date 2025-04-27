import React from 'react'
import CustomButton from '../CustomButton'
import heroImg from '../../assets/heroImg.png'
import heroBg from '../../assets/heroBg.png'

const HomeIntro = () => {
  return (
    <div className="bg-[#0C1B18]">
        <div className="relative items-center flex flex-col py-16">
            <img src={heroBg} alt="" className="absolute right-0 top-0" />
            <h1 className="pt-4 pb-4 font-bold"><span className="text-[#B7DC38]">Clean </span>Energy, Powering Tomorrow.</h1>
            <p className="pb-10">[ Healthcare | Business | Households ]</p>
            <div className="flex gap-10 justify-between">
                <CustomButton text='Explore Innovations' bgColor="bg-[#B7DC38]" textColor ="text-black" />
                <button className="py-1 px-4 border border-[#264941] rounded-[10px] text-[#B7DC38]">Learn about Green Energy</button>
            </div>
        </div>
        <img src={heroImg} alt="" />
        
    </div>
  )
}

export default HomeIntro;