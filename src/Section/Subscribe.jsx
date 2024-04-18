import React from 'react'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between max-lg:flex-col gap-10    items-center'>
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up from <span className='text-coral-red'>Updates </span>& Newsletter</h3>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          <input type="text" placeholder='Subscribe@nike.com' className='input' />
          <div className='flex max-sm:justify-end items-center  '>
          <button className=' items-center   px-7 py-4 border font-montserrat
            text-lg leading-none bg-coral-red rounded-full text-white  border-coral-red'>Sign Up 
            </button>
          </div>
        </div>
    </section>
  )
}

export default Subscribe
