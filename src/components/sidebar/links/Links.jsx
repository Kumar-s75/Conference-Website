import React from 'react'
import { motion } from 'framer-motion'
// import { ReactDOM } from 'react'
const variants={
    open:{
        transition:{
            staggerChildren:0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        },
    },
}


const itemvariants={
    open:{
        y:0,
        opacity:1,
    },
    closed:{
     y:50,
     opacity:0,
    },
}

function Links() {
const items=[
"Home",
"Events",
"Sponsors",
"Committees",
"Location",
"Accommodation",
"Souvenir",
"Registration Fee"
]





  return (
    <motion.div className='links' variants={variants}>
      {items.map((item)=>(
        <a href={`#${item}`} key={item} variants={itemvariants} whilehover={{scale:1.1}} whiletap={{scale:0.95}}>
            {item}
        </a>
      ))}
    </motion.div>
  )
}

export default Links
