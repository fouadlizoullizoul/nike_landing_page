import React from 'react'
import { offer } from '../assets/images'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div className='flex-1'>
            <img src={offer} width={773} height={687} className='obke object-contain w-full ' alt='style' />
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <span className='text-coral-red'> Special </span>
            Offer 

            <br />
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'> Ensuring premium comfort and style,our meticulously crafted foootwear is designed to elevate your experience ,providding you with unmatched quality , innovation, and a touch of elegance.</p>
            <p className='info-text mt-6 lg:max-w-lg'>Our dedication to details and excellence ensures your satisfaction</p>
            <div className= 'mt-11 flex flex-wrap gap-4'>
               <button className='flex items-center justify-center gap-2 px-7 py-4 border font-montserrat
            text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>shop now
              <img src={arrowRight} alt="arrow right icon " className='ml-2 rounded-full w-5 h-5' />
            </button>
            <button className='bg-white rounded-[50px] border-[1px] px-7 info-text'>Learn more</button>
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer
