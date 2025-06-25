import React from "react";
import { HERO_CONTENT } from "../constants";
import jayani from "./../assets/jay.jpg";
import { motion } from "framer-motion";
import { saveAs } from 'file-saver';
import resumePdf from './../assets/jayani-cv.pdf';


const Hero = () => {
  const handleDownload = () => {
    saveAs(resumePdf, 'jayani-cv.pdf'); 
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col text-start lg:pl-16"
        >
          <h1 className="pb-16 text-6xl font-bold bg-clip-text bg-gradient-to-bl from-purple-600 via-red-200 to-blue-500 text-transparent tracking-tight lg:mt-8 lg:text-8xl">
            Jayani Kothalawala
          </h1>
          <span className="text-purple-400 text-4xl font-bold tracking-tight">
            Full Stack / Mobile / Android{" "}
            <span className="text-blue-400">Developer</span>
          </span>
          <p className="my-2 max-w-xl text-blue-200">{HERO_CONTENT}</p>
          
            
            <button
              onClick={handleDownload}
              className="mb-20 bg-gradient-to-r from-purple-900 to-blue-400 text-white font-bold mt-5 py-2 px-6 rounded-lg transition duration-300 ease-in-out w-36"
            >
              Hire me
            </button>
          
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full lg:w-1/2 lg:p-12"
      >
        <div className="flex justify-center lg:pl-34">
          <img className="h-130 w-130" src={jayani} alt="profpic" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
