import React from 'react'
import img from '../../assets/about.jpg'
import  './about.css'
import {motion} from'framer-motion'
function About() {
  return (
    <div className='about  mb-5 mt-5'>
      <div className="container">
        <h1 className='text-center fw-bold mb-5 mt-5'>About Us</h1>
        <div className="row">
            <div className="tt col-12 col-lg-6 mb-4 ">
            <motion.div 
            whileInView={{marginLeft:[-500 , 0], opacity:[0 , 1]}}
            transition={{duration:1, ease:'easeInOut'}}
            className="left-side text-center">
            <img src={img} alt="im" />
            </motion.div>
            </div>
            <div className="col-12 col-lg-6">
            <div
            
             className="right-side  text-black-50">
            <p>You may support TemplateMo website by making a small contribution via PayPal. This will be helpful for us. We hope you like this Catalog-Z photo / video template for your website. We are making new templates regularly for you. Please come back and visit our TemplateMo website again.</p>
            <p>Credits go to Pexels and Unsplash for photos and video used in this template. Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template designed for video and photo websites.</p>
            <p>You are allowed to use this template for your commercial or non-commercial websites. You can integrate it with any kind of CMS website. You are NOT allowed to redistribute the downloadable template ZIP file on any template collection website. Please contact us for more information. Thank you.</p>
           </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
