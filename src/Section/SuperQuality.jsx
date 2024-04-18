import React from 'react'
import {arrowRight} from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'>
          <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We Provide You
            <span className='text-coral-red'> Super</span>
            <span className='text-coral-red'> Quality</span> Shoes

            <br />
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'> Ensuring premium comfort and style,our meticulously crafted foootwear is designed to elevate your experience ,providding you with unmatched quality , innovation, and a touch of elegance.</p>
            <p className='info-text mt-6 lg:max-w-lg'>Our dedication to details and excellence ensures your satisfaction</p>
            <div className= 'mt-11'>
               <button className='flex items-center justify-center gap-2 px-7 py-4 border font-montserrat
            text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>shop now
              <img src={arrowRight} alt="arrow right icon " className='ml-2 rounded-full w-5 h-5' />
            </button>
            </div>
        </div>
        <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe" width={570} height={522} className=' object-contain' />
        </div>
    </section>
  )
}

export default SuperQuality
