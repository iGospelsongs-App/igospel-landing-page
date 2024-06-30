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
                Copyright Information: © iGospel Inc
            </div>
            <div className='flex flex-row gap-4'>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt='logo' className='w-5 lg:w-8' /></a>
                <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt='logo' className='w-5 lg:w-8' /></a>
                <a href="https://facebook.com/igospelapp" target="_blank" rel="noopener noreferrer">
                <Image src={facebook} alt='logo' className='w-5 lg:w-8' /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
