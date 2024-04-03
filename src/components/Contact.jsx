import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import MainForm from './form/MainForm'





const Contact = () => {

  const formRef=useRef()
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })
  const [loading,setLoading]=useState(false)
  const handleChanges = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit=(e)=>{}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse justify-center items-center flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn("left","tween",0.2,1)}
      className='rounded-2xl bg-black-100 p-8 '
      >
       
        <MainForm />
        
        {/* <h1 className={`${styles.sectionHeadText}`} >Registrations opening <br /> soon ...</h1> */}
      </motion.div>

      
    </div>
  )
}

export default SectionWrapper(Contact,"contact")