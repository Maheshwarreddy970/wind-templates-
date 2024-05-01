import React from 'react'
import logo from '@/../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import './footer.css'


export default function Footer() {
  return (
    <div className=' mt-28 sm:mt-44'>
    <footer className='w-full mb-12 flex justify-between py-12 pb-8 px-6 sm:px-24 bottom-0 border-t-1 border-black shadow-inner'>
      <div className=''>
        <div className='flex items-center gap-2'>
          <Image src={logo} alt='logo' className='h-10 w-10'></Image>
          <p className="z-100 hidden sm:block sticky font-bold text-xl tracking-tighter mt-2	font-mono text-black">Wind Templates</p>
        </div>
        <div className='my-3'>
        <span className="block ml-1 text-sm tracking-tighter	sm:tracking-normal sm:text-base text-black opacity-80">Wind Templates &copy; 2023</span>
        </div>
        <div className='ml-2 sm:ml-14  flex gap-3'>
          <Link href='https://www.linkedin.com/in/maheshwar-reddy-mutupuri-713927258/' className="Btn h-7 w-7 rounded-md">
            <span className="svgContainer">
            <svg  color='white' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </span>
            <span className="BG bg-[#0077b5]"></span>
          </Link>
          <Link href='https://twitter.com/Maheshw65793810' className="Btn h-7 w-7 rounded-md">
            <span className="svgContainer">
              <svg
              width="15" height="15"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="svgIcon"
                fill="white"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                ></path>
              </svg>
            </span>
            <span className="BG bg-black"></span>
          </Link>

        </div>
       
      </div>
      <div className='flex flex-col  gap-2'>
        <div className='flex gap-2 flex-col'>
          <Link href={'/templates'} className='text-sm text-end hover:text-blue-700'>Templates</Link>
          <Link href={'/services'} className='text-sm text-end hover:text-blue-700'>Services</Link>
        </div>
        <div className='mt-11 ml-9 sm:ml-0'>
      <span  className='text-xs tracking-tighter 	sm:tracking-normal sm:text-sm '>Website and Templates Build by <Link href='https://twitter.com/Maheshw65793810' className='hover:text-blue-700 text-sm opacity-95'>@maheshwarreddy</Link></span>
        </div>
      </div>
    </footer>
    </div>

  )
}
