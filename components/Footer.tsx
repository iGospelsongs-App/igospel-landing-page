import React from 'react'
import instagram from '../public/assets/images/instagram.png'
import linkedin from '../public/assets/images/linkedin.png'
import facebook from '../public/assets/images/Facebook.png'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-black '>
        <div className="px-4 lg:px-[150px] py-3 flex flex-row justify-between items-center">
            <div className='font-sfpro text-white text-xs lg:text-lg'>
                Copyright Information: © iGospel Music
            </div>
            <div className='flex flex-row gap-4'>
                <Image src={instagram} alt='logo' className='w-5 lg:w-8' />
                <Image src={linkedin} alt='logo' className='w-5 lg:w-8' />
                <Image src={facebook} alt='logo' className='w-5 lg:w-8' />
            </div>
        </div>
    </div>
  )
}

export default Footer