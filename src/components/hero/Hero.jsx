import { Link } from 'react-router-dom'
import video from '../../assets/Pexels Videos 2795400.mp4'
import {motion} from'framer-motion'
import './hero.css'
function HERO() {
  return (
    <div className='hero'>
        <div className="over"></div>
        <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>
        <div className="container">
            <motion.h1
            whileInView={{marginLeft:[-500 , 0], opacity:[0 , 1]}}
            transition={{duration:1 , delay:2 , ease:'easeInOut'}}
            >Welcome to our <span>Pixart</span></motion.h1>
            <motion.p
            whileInView={{marginRight:[-500 , 0], opacity:[0 , 1]}}
            transition={{duration:1 , delay:2 , ease:'easeInOut'}}
            >Here you can find whate you are looking for</motion.p>
            <motion.div className='bts'
            whileInView={{opacity:[0 , 1]}}
            transition={{duration:1 , delay:3 , ease:'easeInOut'}}
            >
                <Link to='photos' >Get Photes</Link>
                <Link to='videos' >Get Videos</Link>
            </motion.div>
        </div>
    </div>
  )
}

export default HERO
