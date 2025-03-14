import React from 'react'
import heroImg from '../assets/hero.webp'
import { MdArrowCircleRight } from "react-icons/md";

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white  pt-28 '>
      <div className='container mx-auto flex flex-col md:flex-row  justify-between items-center p-8  gap-12'>
        {/* left site   */}
        <div className='md:w-1/2'>
            <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start Your Journey to Mental Wellness</h1>
            <p className='text-lg mb-12 md:pr-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, expedita aliquid. Mollitia sunt odio accusantium similique! Facere repudiandae sed quaerat quidem in sequi laudantium quas!</p>
            <button className='bg-Primary py-2 px-4 text-white border-none rounded hover:bg-Primary/90'>
              <a className='flex items-center gap-1 ' href=""><span>Get Started</span> <span className='text-2xl'><MdArrowCircleRight /></span></a> 
            </button>

        </div>

        {/* right site  */}
        <div className='md:w-1/2 h-full'>
            <img className='w-96 object-cover' src={heroImg} alt="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
