import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion'


const textVariants={
  initial:{
    x:-500,
    opacity:0,
},
animate:{
  x:0,
  opacity:1,
  transition:{
    duration:1,
    staggeredChildren:0.1,
  }

},
scrollButton:{
opacity:0,
y:10,
transition:{
  duration:2,
  repeat:Infinity
}
},
};



const sliderVariants={
  initial:{
    x:0,
   
},
animate:{
  x:"-220%",
transition:{
    duration:20,
    repeat:Infinity,
    repeatType:"mirror",
  },},};



function Hero() {
  return (
    <div className='hero'>
       <div className="wrapper">
        < motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
         <motion.h2 variants={textVariants}>Indian Chemical Engineering Congress</motion.h2>  
         <motion.h2 variants={textVariants}>CHEMCON 2024</motion.h2>
         <motion.h2 variants={textVariants}>Role of Chemical Engineering towards Sustainable Development and Atmanirbhar bharat</motion.h2>
         <motion.h3 variants={textVariants}>December 27-30, 2024</motion.h3>
         <motion.h4 variants={textVariants}>Organized by</motion.h4>
         <img src="./Logo_of_NIT_Jalandhar.png" alt="" />
         <motion.h2 variants={textVariants}>Indian Institute of Chemical
         Doaba Regional <br />
 NIT Jalandhar </motion.h2>


<motion.div className="Buttons" variants={textVariants}>
    <motion.button variants={textVariants}>Register</motion.button>
</motion.div>
<motion.img src="scroll.png" alt="" animate="scrollButton" variants={textVariants}/>
</motion.div> 
</div>
<motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
Welcome To CHEMCON 2023-24
</motion.div>
{/* <div className="imageContainer">
        <img src="https://chemcon2024.com/main.webp" alt="" />
      </div> */}
    </div>
  );
};


export default Hero
