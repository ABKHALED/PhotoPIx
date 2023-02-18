import React, { useEffect, useState } from 'react'
import {motion} from'framer-motion'
import './overlay.css'
import { MutatingDots } from 'react-loader-spinner'
function Overlay() {
    const [loed , setLoad] = useState(true)
    useEffect(() =>{
        setTimeout(() => {
            setLoad(false)
        }, 1000);
    } ,[])
    const [showOver, setShowOver] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowOver(false);
    }, 2200);
  }, []);
  return (
    <>
    {showOver && <div className='overlay'>
    <motion.div className='left'
    whileInView={{left :['0%', '-100%'] }} 
    transition={{duration:2 , ease:'easeInOut' , delay:1}}
    >
    </motion.div>
    {loed && 
    <MutatingDots 
height="120"
width="120"
color="#5bccf6"
secondaryColor= '#fcde67'
radius='20.5'
ariaLabel="mutating-dots-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
className='loader'
/>
}
   
    <motion.div className='right'
     whileInView={{right :['0%', '-100%'] }} 
     transition={{duration:2 , ease:'easeInOut' , delay:1}}
    >
    
    </motion.div>
    <motion.div className='top'
     whileInView={{top :['0%', '-100%'] }} 
     transition={{duration:2 , ease:'easeInOut' , delay:1}}
    ></motion.div>
    <motion.div className='bootom'
     whileInView={{bottom :['0%', '-100%'] }} 
     transition={{duration:2 , ease:'easeInOut' , delay:1}}
    ></motion.div>
</div>}
</>
  )
}

export default Overlay
