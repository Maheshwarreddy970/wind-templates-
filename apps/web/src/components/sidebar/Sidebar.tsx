
"use client"
import { motion } from 'framer-motion';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command"
import Link from 'next/link';
import { Mina } from 'next/font/google';

const fugaz = Mina({ subsets: ['latin'], weight: ['400'] })

const componentlist=[
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
  "portfolio",
]

export function SideNavbar() {
  return (
    <Command className=" overflow-hidden h-full px-5 w-full top-80">
      <CommandInput className="" placeholder="Search..." />
      <CommandList className='h-full max-h-full'>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandGroup className='pb-11'>
          <span className=' font-bold tracking-wider  w-full ml-6 text-sm'>All Components</span>
          {componentlist.map((data, i) => (
            <CommandItem className='group flex justify-center' key={i}>
              <div
                className='w-full h-full flex items-center'
              >
                <button className=" ml-9 relative hover:translate-x-1 text-black text-sm after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] font-medium hover:after:origin-bottom hover:after:scale-x-100 opacity-80 hover:scale-110 hover:opacity-100">{data}</button>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}