import './navbar.css'
import { Link , NavLink } from 'react-router-dom'
import logo from '../../assets/diaphragm (1).png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdCloseCircle} from 'react-icons/io'
import { useState } from 'react'
import {motion} from'framer-motion'
import { duration } from '@mui/material'
function Navbar() {
    const [open , setOpen] = useState(false)
  return (
    <nav className='navBar d-flex align-items-center justify-content-between '>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
            <Link to='/'>
                <img src={logo} alt="logo" />
                <span>Pixart</span>
            </Link>
        </div>
        <ul className='links d-none d-md-flex align-items-center '>
            <li className='mb-0'>
            <NavLink className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= '/'>
                Home
            </NavLink>
            </li>
            <li className='mb-0'>
            <NavLink className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'photos'>
                Photes
            </NavLink>
            </li>
            <li className='mb-0'>
            <NavLink className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'videos'>
                Videos
            </NavLink>
            </li>
            <li className='mb-0'>
            <NavLink className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'loved'>
                Loved
            </NavLink>
            </li>
            <li className='mb-0'>
            <NavLink className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'contact'>
                Contact
            </NavLink>
            </li>
        </ul>
        <div className='d-md-none open' onClick={() => setOpen(true)}>
            <GiHamburgerMenu />
        </div>
        {open && (
            <motion.div className='pop'
            whileInView={{right:[-200 , 0] , opacity:[0 , 1]}}
            transition={{duration:0.5 , ease:'easeInOut'}}
            >
            <div className="close" onClick={() => setOpen(false)}>
                <IoMdCloseCircle />
            </div>
            <ul className='pop-links'>
            <li>
            <NavLink onClick={() => setOpen(false)} className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= '/'>
                Home
            </NavLink>
            </li>
            <li>
            <NavLink onClick={() => setOpen(false)} className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'photos'>
                Photes
            </NavLink>
            </li>
            <li>
            <NavLink onClick={() => setOpen(false)} className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'videos'>
                Videos
            </NavLink>
            </li>
            <li>
            <NavLink onClick={() => setOpen(false)} className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'loved'>
                Loved
            </NavLink>
            </li>
            <li>
            <NavLink onClick={() => setOpen(false)} className={({ isActive }) =>
              isActive ? 'active' : ''
            } to= 'contact'>
                Contact
            </NavLink>
            </li>
        </ul>
        </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
