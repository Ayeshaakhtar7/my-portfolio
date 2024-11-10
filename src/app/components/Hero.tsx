import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'


const Hero = () => {
  return (
   <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/pic1.png)] bg-left lg:bg-[10%] bg-cover'
   style={{backgroundSize:"35%",backgroundPosition:"left 100px top 100px"}} >
     
    
  <Navbar/>

    <div className='container grid lg:grid-colos-2 h-[calc(100vh-60px)'>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items center'>
        <div>
          <p data-aos="zoom-in-up">I'am </p>
          <p data-aos="zoom-in-up">Ayesha</p>
          <p data-aos="zoom-in-up">Rana</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
