import React from 'react'
import { PROJECTS } from '../constants'
import { useState } from "react";
import { motion } from "framer-motion"


const Pro = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className='pb-4'>

            <h1 className='my-20 text-center text-4xl font-bold text-purple-400'>Pro<span className='text-blue-400'>jects</span></h1>
            <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }} className='flex flex-wrap justify-center gap-5 pb-10'>
                {PROJECTS.map((project, index) => (
                    <div key={index} onClick={() => setSelectedProject(project)} className='cursor-pointer bg-[#5d306b] rounded-[20px] sm:w-[400px] px-6 py-10 text-center transition-transform duration-300 hover:-translate-y-1'>
                        <div>
                            <img src={project.image}
                                width={150} height={150}
                                alt={project.title}
                                className='object-cover w-32 h-32 mx-auto mb-4 rounded-full' />

                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-purple-400 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                            ))}

                        </div>
                    </div>

                ))}
            </motion.div>

        </div >
    )
}

export default Pro