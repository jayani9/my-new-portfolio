import React from 'react'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaDiscord} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 lg:pl-14 items-center font-bold'>
              <div className='max-w-20'>
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <a href="https://www.linkedin.com/in/jayani9476/"><FaLinkedin/></a>
              <a href="https://github.com/jayani9"><FaGithub/></a>
              <a href=""><FaDiscord/></a>
              <a href="https://www.instagram.com/jayanikothalawala?igsh=Ymp4dHVkdWdna3Jt&utm_source=qr"><FaInstagram/></a>
              
              
            </div>
        </nav>

    </div>
  )
}

export default Navbar