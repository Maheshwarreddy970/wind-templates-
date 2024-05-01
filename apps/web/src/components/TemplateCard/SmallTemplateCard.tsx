import Link from 'next/link';
import { Templatelist } from '../../lib/templateslist/templateslist';
import Image from 'next/image';
import AddCardButton from '../../components/ui/AddCardButton';
import { motion } from 'framer-motion'


export default function SmallTemplateCard() {
    return (
        <>
            {
                Templatelist.map((data) => (
                    <div className='px-4 shadow-xl mt-14 rounded-lg overflow-visible'>
                        <Link href={data.Link} >
                            <Image src={data.Image1} alt={`template ${data.Title}`} className='-mt-9 w-full rounded-lg'></Image>
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: [1.1, 1] }}
                            transition={{ duration: 1 }}

                            className=''>
                            <span className='flex justify-center text-lg mt-1 font-semibold'>
                                {data.Title}
                            </span>
                            <p className=' text-center text-sm mt-1'>
                                {data.SubTitle}
                            </p>
                            <div className='w-full mb-4 mt-4 flex justify-around gap-3 px-1'>
                                <Link href={data.Link} target='_blank'>
                                    <AddCardButton word={"Live Peview"}></AddCardButton>
                                </Link>
                                <AddCardButton word={"Documention"}></AddCardButton>
                            </div>
                        </motion.div>
                    </div>
                ))
            }
        </>
    )
}
