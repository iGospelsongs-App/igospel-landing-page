import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../public/assets/images/logo.svg'
import Footer from '@/components/Footer';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Features', href: 'features' },
  { name: 'Support', href: 'support' },
  { name: 'Newsletter', href: 'newsletter' },
]

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between m-5 lg:m-9 rounded-full py-2 lg:py-6 border-2 border-[#ffffff08] bg-black bg-opacity-90 px-3 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 flex items-center">
          <Image src={logo} width={37} height={37} alt='logo' />
          <span className="text-xl md:text-3xl ml-2 font-sfpro font-bold">IGospel</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item, i) => (
          <Link to={item.href} smooth duration={500} key={item.name}  className={`text-sm font-normal font-sfpro leading-6 text-white px-5 py-1 ${i === navigation.length - 1 && 'bg-[#E90936] rounded-2xl'}`}>
            {/* <> */}
              {item.name}
            {/* </> */}
            
          </Link>
        ))}
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="">Your Company</span>
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item, i, arr) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${i === navigation.length - 1 && 'bg-[#E90936] rounded-2xl text-white'}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  )
}

export default Navbar