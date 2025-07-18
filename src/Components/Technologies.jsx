import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import pythonlogo from "../assets/pythonlogo.svg"
import { FaNodeJs } from "react-icons/fa"
import sqlimg from "../assets/sql.svg"
import androidimg from "../assets/android.png"
import flutterimg from "../assets/flutter.png"
import { motion } from "framer-motion"

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center font-inter font-bold text-4xl text-purple-400'>Techno<span className='text-blue-400'>logies</span></h1>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-7xl' />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img
                        src={pythonlogo}
                        alt="Python"
                        className="w-[72px] h-[72px]"
                    />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img
                        src={sqlimg}
                        alt="Python"
                        className="w-[72px] h-[72px]"
                    />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img
                        src={androidimg}
                        alt="Vue"
                        className="w-[72px] h-[72px]"
                    />
                </motion.div>
                <motion.div whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.9 }} className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img
                        src={flutterimg}
                        alt="Angular"
                        className="w-[72px] h-[72px]"
                    />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies