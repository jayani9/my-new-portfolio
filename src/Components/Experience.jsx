import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl font-bold text-blue-400'>Experi<span className='text-purple-400'>ence</span></h1>
            <motion.div initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1, x: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {experience.role} - {" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}

                                </span>
                            </h6>
                            <ul>{experience.description.map((item, i) =><li key={i}>{item}</li>)}</ul>
                        </motion.div>
                    </div>
                ))}
            </motion.div>

        </div>
    )
}

export default Experience