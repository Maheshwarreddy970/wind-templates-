import { ServiceCard } from '@/components/ServiceCard.tsx/ServiceCard'
import { BackgroundBox } from '@/components/ui/BackgroundBox'
import { ServicesList } from '@/lib/serviceslist/serviceslist'
import React from 'react'

export default function pages() {
  return (
    <div>
      <BackgroundBox></BackgroundBox>
      <div className='w-full justify-around px-11 flex items-center'>
        {
          ServicesList.map((data)=>(
            <ServiceCard data={data}></ServiceCard>
          ))
        }
      </div>
    </div>
  )
}
