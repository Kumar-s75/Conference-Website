import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import './App.scss'
// import "./hero.scss"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
function App() {


  return (
 <section id="Homepage">

   <Navbar/>
      <Hero/>
 </section>
     
    
  )
}

export default App
