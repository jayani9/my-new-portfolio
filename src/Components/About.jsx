import React from 'react'
import aboutImg from "../assets/aboutme.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {
  
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl text-blue-400 font-bold tracking-tight'>About <span className='text-purple-400'>Me</span></h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:pl-16 lg:p-8'>
          <motion.div initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1, x: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} className='flex'>
            <img className='rounded-2xl h-100 w-200' src={aboutImg} alt="about" />
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.section initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} className="max-w-xl mx-auto pr-10 py-30 text-blue-200">

            {ABOUT_TEXT.description}
          </motion.section>

        </div>

      </div>
    </div>
  )
}

export default About