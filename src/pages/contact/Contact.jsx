import './contact.css'
import Overlay from '../../components/overlay/Overlay'
import { useEffect, useState } from 'react'
function Contact() {
  const [ im , setIm] = useState(null)
  const [rend , setRend] = useState('')
  useEffect(() =>{
    fetch("https://api.pexels.com/v1/curated?page=3&per_page=80")
        .then((res) => res.json())
        .then((res) => setIm(res.photos));
  } , [])
  useEffect(() =>{
    if(im){
      const rendom = Math.floor(Math.random() * im.length)
      setRend(im[rendom].src.large)
    }
  } ,[im])
  console.log(rend)
  return (
   <>
   <Overlay />
    <div className='contact'>
      <div className="or">
        <div className="v"></div>
        <img src={rend} alt='hh' />
      </div>
        <div className="container">
            <div className="form">
            <div className="row">
  <div className="col-12 col-md-6 mb-4 mb-md-0">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col-12 col-md-6 ">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
  <div className='col-12 mt-4'>
  <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className='col-12 mt-4'>
    <textarea className="form-control " placeholder='Messege' />
  </div>
  <div className="col-12 mt-4">
    <button>submit</button>
  </div>
    </div>
            </div>
        </div>
</div>
   </>
  )
}

export default Contact
