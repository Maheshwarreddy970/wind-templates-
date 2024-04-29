
import { SideNavbar } from '../../components/sidebar/Sidebar';
import { motion } from 'framer-motion'
import AddCardButton from '../../components/ui/AddCardButton';
import Link from 'next/link';
import { DirectionAwareHover } from '../../components/ui/Direction-aware-hover';
import { Templatelist } from '../../lib/templateslist/templateslist';

export default function TemplateCard() {
    return (
        <>
            {
                Templatelist.map((data) =>
                (<div className='grid grid-cols-3 gap-7 m-7 w-full shadow-md rounded-lg'>
                    <div className=' relative w-60 h-48'>
                        <span className='mt-5 flex justify-center text-xl font-semibold'>
                            {data.Title}
                        </span>
                        <p className=' text-sm text-center ml-3 p-3'>
                            {data.SubTitle}
                        </p>
                        <div className='w-full absolute bottom-4 ml-2 flex gap-3 px-1'>
                            <Link href={data.Link} target='_blank'>
                            <AddCardButton word={"Live Peview"}></AddCardButton>
                            </Link>
                            <AddCardButton word={"Documention"}></AddCardButton>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: [1.1, 1] }}
                        transition={{ duration: 1 }}
                        className=' w-60 h-48'>
                        <DirectionAwareHover imageUrl={data.Image1}></DirectionAwareHover>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: [1.1, 1] }}
                        transition={{ duration: 1 }}
                        className=' w-60 h-48'>
                        <DirectionAwareHover imageUrl={data.Image2}></DirectionAwareHover>
                    </motion.div>
                </div>
                ))}
        </>
    )
}
