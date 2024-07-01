import Image from 'next/image'
import React from 'react'

function FeaturesSection({
  image,
  title,
  description,
  rev,
  support,
}: {
  image: any
  title: string
  description: string
  rev?: boolean
  support?: boolean
}) {
  return (
    <div
      className={`${
        !support && 'pt-[103px]'
      } lg:pb-[150px] mx-8 lg:mx-[60px] flex flex-col ${
        rev ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } flex-wrap items-center justify-center gap-6 lg:gap-24 relative`}
    >
      <div className="">
        <Image src={image} width={400} height={300} alt="feature-img" />
      </div>

      <div className="lg:flex-[0.5] pb-6 lg:pb-0">
        <div
          className={`${
            support ? 'text-black' : 'text-white'
          } text-[20px] lg:text-[36px] font-sfpro font-bold mb-[19px]`}
        >
          {title}
        </div>
        <div
          className={`${
            support ? 'text-black' : 'text-white'
          } text-[14px] lg:text-[16px] font-sfpro`}
        >
          {description}
        </div>
        {support && (
          <div>
            <div className="py-3 rounded-lg px-7 cursor-pointer bg-[#FF375F] text-white font-sfpro text-lg inline-block mt-6">
              <a
                href="https://paystack.com/pay/igospel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeaturesSection
