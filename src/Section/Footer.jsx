import React from 'react'
import footerLogo from '../assets/images/footer-logo.svg'
import { copyrightSign } from '../assets/icons'
import {socialMedia ,footerLinks} from '../constants'
const Footer = () => {
  return (
    <footer className='max-container'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
            <div className='flex flex-col items-start'>
              <a href="/">
                <img src={footerLogo} alt=""  width={150}
                height={46}/>
              </a>
              <p className='text-white-400 sm:max-w-sm mt-6 text-base leading-7 font-montserrat'>Get shoes ready for the new term at your nearset Nike store. find Your perfect size In Store. get Rewards</p>
              <div className='flex items-center gap-5 mt-8'>
                {socialMedia.map((icon)=>(
                  <div className='bg-white flex justify-center items-center w-12 h-12 rounded-full'>
                    <img src={icon.src} alt={icon.alt} />
                  </div>
                ))}
              </div>
            </div>
             <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {footerLinks.map((section)=>(
                <div key={section.title} className=' '>
                  <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li className='mt-3' key={link.name}>
                        <a href='/' className=' text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray'>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
             </div>
        </div>
        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                  <img src={copyrightSign} alt="" width={20} height={20} className='rounded-full' />
                  <p>Copyright.All rights reserved</p>
          </div>
          <p className=' font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer
