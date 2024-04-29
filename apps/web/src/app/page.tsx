"use client"
import React from 'react'
import { BackgroundCellAnimation } from '../components/ui/BackgroundRippleEffect'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import CardAnimatedBorderGradient from '../components/ui/CardAnimatedBorderGradient';
import Link from 'next/link';
import {motion} from 'framer-motion'
 




const words = `Explore high-quality, customizable web templates featuring Framer Motion,Tailwind CSS,React,and Next.js. Perfect for your projects, offering seamless customization.`;

export default function page() {
  return (
    <>
      <BackgroundCellAnimation></BackgroundCellAnimation>
      <div className='w-full mt-5 flex justify-center px-80'>
        <CardAnimatedBorderGradient></CardAnimatedBorderGradient>
      </div>
      <div className='w-full mt-8 px-44'>
        <TextGenerateEffect words={words}></TextGenerateEffect>
      </div>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      className='w-full mt-8 flex justify-center'>
      <Link href={'/templates'} className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
          Get Strated
        </span>
      </Link> 
      </motion.div>
    </>
  )
}
