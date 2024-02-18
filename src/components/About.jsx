import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {services} from '../constants'
import {fadeIn,textVariant,slideIn} from '../utils/motion'

import { SectionWrapper } from '../hoc'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h1 className={styles.sectionHeadText}>What is Devzone</h1>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis sapiente repellendus soluta esse quisquam, dolores sed magnam eveniet similique rerum qui corporis aperiam tenetur modi nostrum, sunt ratione? </motion.p>
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeIn("right", "spring", index*0.2, 0.3)} className='flex  flex-col items-center  gap-4'>
            <Tilt options={{ max: 30, scale: 1.2 ,speed:450 }}>
              <div className='bg-tertiary green-pink-gradient shadow-card p-[1px] w-auto rounded-3xl min-w-[250px]  gap-10 h-auto flex flex-col justify-center items-center'>
                <div className='w-full h-full min-h-[300px] gap-10 rounded-3xl flex flex-col justify-evenly items-center bg-tertiary'>
                  <div className='w-20 h-20 rounded-full bg-[#915eff] flex justify-center items-center'>
                    <img src={service.icon} alt={service.title} className='w-10 h-10' />
                  </div>
                  <p className='text-secondary text-[17px]'>{service.title}</p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")