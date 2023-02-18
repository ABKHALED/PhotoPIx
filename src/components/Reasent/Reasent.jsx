import { useState ,useContext, useEffect } from 'react'
import './reasent.css'
import { Context } from '../../ContextProvader'
import { createClient } from 'pexels';
import {motion} from'framer-motion'
import { Link } from 'react-router-dom';
import Modul from '../modul/Modul';
function Reasent() {
    const apiKey = "4rgeXM9DqvJxRPnCb62gMP1s8NZR8NAEP6GATLQPbfAhTnfJbgjDoSua";
    const [ data , setData] = useState([])
    const [vdata , setVdata] = useState([])
    const [modul , setModul] = useState(true)
    useEffect(() =>{
        fetch("https://api.pexels.com/v1/curated?page=1&per_page=4" ).then(res => res.json())
    .then(res => setData(res.photos))
   
    } ,[])
    useEffect(() =>{
      // fetch('https://api.pexels.com/videos/popular?per_page=4').then(res => res.json())
      // .then(res => setVdata(res.videos))
      const client = createClient(apiKey);

client.videos.popular({ per_page: 4 } ).then(videos => setVdata(videos.videos))

    } ,[])
  return (
    <div className='resnt pt-5 pb-5'>
      <div className="container">
        <h1 className='text-center fw-bold mb-5'>Our New Photos</h1>
        <div className='row'>
            {data.map(ele =>{
                return (
                    <motion.div
                    whileInView={{opacity:[0 , 1]} }
                    transition={{duration:1 , ease:'easeInOut' }}
                     key={ele.id} className="col-12 col-sm-6 col-lg-3 mb-4 parent">
                        <motion.div 
                        whileHover={{scale:1.2 , rotate:'5deg'}}
                        transition={{duration:1 , ease:'easeInOut' }}
                        className="holder">
                            <div className="image">
                                <img src={ele.src.large} alt={ele.alt} />
                            </div>
                        </motion.div>
                          <div className="but">
                            <Link to='photos'>See More</Link>
                            <Link to={`photos/photos/${ele.id}`}>Read More</Link>
                          </div>
                   </motion.div>
                )
            })}
        </div>
        <h1 className='text-center fw-bold mb-5 mt-5'>Our New Videos</h1>
       
        <div className='row'>
            {vdata.map(ele =>{
                return (
                    <motion.div
                    whileInView={{opacity:[0 , 1]} }
                    transition={{duration:1 , ease:'easeInOut' }}
                     key={ele.id} className="col-12 col-sm-6 col-lg-3 mb-4 parent">
                        <motion.div 
                        whileHover={{scale:1.2 , rotate:'5deg'}}
                        transition={{duration:1 , ease:'easeInOut' }}
                        className="holder">
                            <a href={ele.url} target='_blank' className="vid">
                               <img src={ele.image} alt={ele.id} />
                            </a>
                        </motion.div>
                          <div className="but">
                            <Link to='videos'>See More</Link>
                            <Link to={`videos/videos/${ele.id}`}>Read More</Link>
                          </div>
                   </motion.div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Reasent
