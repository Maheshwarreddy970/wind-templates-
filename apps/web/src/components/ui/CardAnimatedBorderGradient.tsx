"use client";


import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import {motion} from "framer-motion"



const List = [
    <TbBrandFramerMotion strokeWidth={1} className=' text-black w-full h-full'></TbBrandFramerMotion>,
    <TbBrandNextjs strokeWidth={1} className=' text-black w-full h-full' />,
    <FaReact strokeWidth={0.5} className=' text-black w-full h-full' />,
    <SiTailwindcss strokeWidth={0.7} className=' text-black w-full h-full' />

]

const CardAnimatedBorderGradient = () => {
    return (
        <div className="flex gap-6 scale-75 md:scale-100 md:gap-32">
            {
                List.map((icons) => (
                    <motion.div
                        initial={{opacity:0,scale:0.5}}
                        animate={{opacity:1,scale:1}}
                        transition={{duration:1}}
                     className='relative h-12 w-12 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
                        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                        <div className='inline-flex h-full w-full items-center justify-center rounded-xl p-1 bg-white text-sm font-medium backdrop-blur-3xl' >
                            {icons}
                        </div>
                    </motion.div>
                ))
            }
        </div>
    );
};



export default CardAnimatedBorderGradient;
