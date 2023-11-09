// code written by omatsola sunday - october 2023
"use client";

import Image from 'next/image'
import Navbar from '@/components/Navbar';
import heroImg from '../public/assets/images/hero.svg'
import newReleaseImg from '../public/assets/images/newrelease.svg'
import music from '../public/assets/images/music.svg'
import song from '../public/assets/images/song.svg'
import sermon from '../public/assets/images/sermon.svg'
import devotion from '../public/assets/images/devotion.png'
import FeaturesSection from '@/components/FeaturesSection';
import sermonImage from '../public/assets/images/sermon.png'
import foodImage from '../public/assets/images/food.png'
import shape from '../public/assets/images/shape.png'
import google from '../public/assets/images/google.svg'
import apple from '../public/assets/images/apple.svg'
import phone from '../public/assets/images/phone2.svg'
import Footer from '@/components/Footer';
import { Element } from 'react-scroll';
import { useState } from 'react';
import axios from 'axios';
import { Puff } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const features = [
  {
    title: 'Music Library',
    desc: 'A comprehensive library of gospel music, covering various sub-genres of songs you would love',
    image: music
  },
  {

    title: 'Offline Listening',
    desc: 'Enjoy offline mode. Download your favorite songs, playlists, and sermons to listen to anytime, anywhere.',
    image: song
  },
  {
    title: 'Sermons and Devotional',
    desc: 'Dive deeper into your faith and spiritual growth through solid teaching ministrations',
    image: sermon
  },
]

const subscribeEndpoint = 'https://igospelsongs.onrender.com/api/subscribe/';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const notify = () => toast("You have joined the waitlist")

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
    setError('')
  }

  const handleSubmit = async () => {
    if (email !== '' && emailPattern.test(email)) {
      setLoading(true)
      try {
        const response = await axios.post(subscribeEndpoint, { email });
        setLoading(false);
        setEmail('');
        notify();
      } catch (error: any) {
        setLoading(false)
        console.log(error.response.data.error);
        setError(error.response.data.error)
      }
    } else {
      setError('Enter a valid email')
    }

  }

  return (
    <main className="bg-black relative">
      {/* hero section starts here */}
      <Element name="newsletter"></Element>
      <div className='sticky top-10 z-50'>
        <Navbar />
      </div>
      <div className='h-[100%] w-full'>
        <div className=''>
          <div className='flex align-center flex-col lg:flex-row m-4 lg:mt-0 md:ml-6 mr-0 md:mr-0 mb-0 md:mb-0 overflow-hidden h-[100%] relative'>
            {/* left section  */}
            <div className='lg:flex-[0.5] flex-col mt-[80px] pb-0 md:pb-20 my-5 ml:0 px-4 lg:px-0 lg:ml-9 z-10'>
              <div className='text-[34px] text-center lg:text-left lg:text-[64px] text-white leading-[50px] lg:leading-[70px] pb-5 font-sfpro'>Enjoy soul-lifting music, sermons, and devotionals in one app.</div>
              <div className='font-sfpro font-[300] text-center text-[#F1F1F1] lg:text-left pb-7 text-sm lg:text-xl'>Join millions of aspiring people anticipating getting the app</div>
              <form className='flex lg:flex-[0.5] pb-24 flex-1 flex-col items-center md:items-start'>
                <input type="text" placeholder='Email' value={email} onChange={handleEmailChange} className={`pl-2 outline-none text-white mb-4 text-[12px] w-full lg:w-[300px] h-[40px] bg-transparent border-[1px] ${error ? 'border-red-500' : 'border-gray-500'} rounded-lg`} />
                <div onClick={handleSubmit} className='text-center py-[12px] lg:py-[8px] text-white bg-[#FF375F] hover:bg-[#ff375fd2] w-full lg:w-[300px] text-xs lg:text-base rounded-lg cursor-pointer'>
                  {
                    loading ? (
                      <div className='flex items-center justify-center'>
                        <Puff
                          height="24"
                          width="24"
                          radius={1}
                          color="white"
                          ariaLabel="puff-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>

                    ) : 'Join waitlist'
                  }
                </div>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </form>
            </div>

            {/* right section  */}
            <div className='flex-[0.5] lg:h-[800px] top-52 md:top-4 absolute right-0 z-0 backdrop-brightness-50'>
              <Image src={heroImg} alt='hero-img' width={650} height={700} className='' />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-80 md:opacity-70 lg:opacity-10"></div>
            </div>
          </div>
          <Element name="about"></Element>
        </div>
      </div>

      {/* next section here  */}
      <div className='bg-white'>
        <div className='pt-[103px] mx-[60px] flex flex-col-reverse lg:flex-row flex-wrap items-center justify-between relative'>
          <div className='lg:flex-[0.5] relative'>
            <Image src={newReleaseImg} width={400} height={400} alt='new release' />
            <div className="absolute inset-0">
              <div className="h-[250px] w-full md:w-[400px] absolute bottom-0 left-[0%] lg:left-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
          </div>

          <div className='lg:flex-[0.5] pb-6 lg:pb-0'>
            <div className='text-black text-2xl lg:text-[36px] text-center lg:text-left font-sfpro font-bold mb-[19px]'>Your journey to strengthen your faith through edifying content begins here.</div>
            <div className='text-black text-xs lg:text-[16px] text-center lg:text-left font-sfpro'>iGospel is the ultimate gospel music app designed to connect devout music enthusiasts
              with soul-stirring songs, powerful sermons, and inspirational devotionals. Rooted in the
              rich tradition of gospel contents, this app offers a diverse and extensive collection of
              gospel songs and spiritual contents.</div>
          </div>
        </div>
        {/* <Element name="features"></Element> */}
      </div>

      {/* experience the beauty section  */}
      <div className='pt-[162px] bg-white pb-20 px-4 lg:px-0'>
        <div className='text-center text-black font-sfpro text-2xl lg:text-[40px] font-bold'>
        Explore a vast music library with a user-friendly interface and a great user  <span className='text-[#ff375fd2]'>experience</span>
        </div>
        <div className='text-center text-[#A1A1A1] font-sfpro text-xs lg:text-[14px] pt-4'>
        Get on the go alongside edifying contents
        </div>

        {/* features cards here  */}
        <div>
          <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                  {features.map((feature) => (
                    <div key={feature.title} className="group relative">
                      <div className="relative w-full overflow-hidden rounded-lg bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 p-8">
                        <div className='flex flex-col items-center gap-3'>
                          <Image src={feature.image} alt='img' />
                          <div className='font-sfpro text-[15px] lg:text-[26px] text-white text-center font-bold '>{feature.title}</div>
                          <div className='font-inter text-[7px] lg:text-[13px] text-center text-[#898CA9]'>{feature.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* different sections here  */}
      <Element name="features"></Element>
      <div className='pt-[100px] pb-10 bg-black'>
        <div className='text-center text-white font-sfpro text-2xl lg:text-[40px] mx-8 lg:mx-[60px] font-bold'>
          Interesting features of the IGospel app
        </div>
        <div className='text-center text-[#A1A1A1] font-sfpro text-xs lg:text-[14px] mx-8 lg:mx-[60px] pt-4'>
        This app is rooted in the rich tradition of gospel contents, offers a diverse and extensive collection of gospel songs, sermons, and devotionals.
        </div>

        {/* different sections start  */}
        <FeaturesSection
          title='Listen on-the-go to your favorite gospel music.'
          description='Get access to over 20 million songs from all over the world while enjoying unlimited
          listening time and a quality music library.'
          image={devotion}
        />
        <FeaturesSection
          title='Get fortified anywhere, anytime!'
          description='Boost your faith through inspirational preaching and the teaching of Gods word.'
          image={sermonImage}
          rev
        />

        <FeaturesSection
          title='Fellowship with Your Maker'
          description='Consume a multitude of Christian devotions daily.'
          image={foodImage}
        />
      </div>

      {/* shape the future section here  */}
      <Element name="support"></Element>
      <div className=' bg-white pt-[150px]'>
        <div className='text-center text-black font-sfpro mb-8 lg:mb-[70px] text-2xl lg:text-[40px] mx-8 lg:mx-[60px] font-bold'>
          iGospel App is a groundbreaking endeavor
        </div>
        <FeaturesSection
          title='It is designed to connect devout music enthusiasts with soul-lifting songs. '
          description='With your support, we can elevate our collective impact and pave the way for spreading the gospel through spiritual content.'
          image={shape}
          support
        />
      </div>

      {/* app coming soon section  */}
      <div className='bg-white pb-10 pt-24 lg:pt-0 px-'>
        <div className='flex flex-row items-center justify-center gap-[50px] lg:gap-[100px] flex-wrap'>
          {/* left section  */}
          <div>
            <div className='text-left text-black font-sfpro text-2xl lg:text-[40px] font-bold'>
              The <span className='text-[#ff375fd2]'>IGospel</span> App, <br /> coming soon on
            </div>
            <div className='flex mt-[40px] flex-col lg:flex-row gap-5 lg:gap-2 items-center'>
              <Image src={apple} alt='img' className='w-[140px] lg:w-[200px]' />
              <Image src={google} alt='img' className='w-[140px] lg:w-[200px]' />
            </div>
          </div>
          {/* right section */}
          <div>
            <Image src={phone} alt='img' width={600} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Home