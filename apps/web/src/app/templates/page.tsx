"use client"

import React from 'react'
import { SideNavbar } from '../../components/sidebar/Sidebar';
import { motion } from 'framer-motion'
import AddCardButton from '../../components/ui/AddCardButton';
import image1 from '../../../public/portfolio3d/port1.png'
import image2 from '../../../public/portfolio3d/port2.png'
import { DirectionAwareHover } from '../../components/ui/Direction-aware-hover';
import TemplateCard from '../../components/TemplateCard/TemplateCard';
import SmallTemplateCard from '@/components/TemplateCard/SmallTemplateCard';

export default function page() {
  return (
    <main className='flex  sm:pl-12 sm:pr-20'>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='overflow-hiddenmt-20 hidden sm:block w-full  mt-16 sticky top-20 h-screen sm:w-3/12'>
        <SideNavbar></SideNavbar>
      </motion.div>
      <div className='hidden sm:block p-1 w-5/6	 mt-24'>
        <TemplateCard></TemplateCard>
      </div>
      <div className='sm:hidden w-full flex flex-col mt-36 px-8 gap-9'>
        <SmallTemplateCard></SmallTemplateCard>
      </div>
    </main>
  )
}
