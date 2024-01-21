import React from 'react'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
   <nav className=" bg-red-600 flex w-full">
<div className="navbar">
     {/* {sidebar} */}
     <Sidebar/>
    <div className="wrapper">
         {}
        <motion.span initial={{opacity:0,scale:0.5}}
     animate={{opacity:1,scale:1}} 
     transition={{duration:0.5}}
     >CHEMCON-2023-24</motion.span>
        <div className="social">

    <p><FontAwesomeIcon icon={faPhone} />+91-9888895253</p>
    <p><FontAwesomeIcon icon={faEnvelope}/> chemcon2024@gmail.com</p>


        </div>
        </div>
    </div>
   
    
   
    {/* <a href="#"  className="font-bold text-xl">Logo</a> */}
   </nav>
  )
}

export default Navbar
