import React from 'react'
import { FaPhone } from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaDiscord} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import GmailIcon from '../assets/gmail_icon.svg';


const Footer = () => {
  return (
    <div className='bg-gray-900 px-4 md:px-16 lg:px-28'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 pb-4 pt-4'>
            <div>
              
               <h2 className='text-lg font-bold mb-4 font-inter'>Get in touch</h2>
                <div className='flex flex-1/2'>
                 <img src={GmailIcon} alt="Gmail Icon" className="w-6 h-6 pr-2" />
                 <p className='text-gray-400 font-inter'>jayani135@gmail.com</p>
                </div>

                <div className='flex flex-1/2 pt-2'>
                  <div className='pt-1'><FaPhone /></div>
                  <p className='text-gray-400 font-inter pl-2'>+358417225397</p>
                </div> 
            </div>
            <div>
              <h2 className='text-lg font-bold font-inter mb-4'>Quick Links</h2>
              <ul className='pb-4 flex space-x-4'>
                <li className='pb-4'><a href="https://www.linkedin.com/in/jayani9476/" className='hover:text-purple-500'><FaLinkedin/>LinkedIn</a></li>
                <li className='pb-4'><a href="https://github.com/jayani9" className='hover:text-purple-500'><FaGithub/>GitHub</a></li>
                <li className='pb-4'><a href="" className='hover:text-purple-500'><FaDiscord/>Discord</a></li>
                <li className='pb-4'><a href="https://www.instagram.com/jayanikothalawala?igsh=Ymp4dHVkdWdna3Jt&utm_source=qr" className='hover:text-purple-500'><FaInstagram/>Instagram</a></li>
              </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Footer