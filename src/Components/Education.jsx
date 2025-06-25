import React from 'react'
import { EDUCATION, PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Education = () => {
    return (
        <div className='pb-4'>
            <h1 className='my-20 text-center text-4xl font-bold text-purple-400'>Educa<span className='text-blue-400'>tion</span></h1>
            <div>
                {EDUCATION.map((element, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1, x: 20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{element.title}</h6>
                            <p className='mb-4 text-neutral-400'>{element.description}</p>
                            <div className='flex flex-wrap'>
                                {element.technologies.map((tech, index) => (
                                <span key={index} className='m-2 rounded bg-purple-400 px-6 py-2 text-sm font-medium text-purple-800'>{tech}</span>
                            ))}
                            </div>
                            

                        </motion.div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Education