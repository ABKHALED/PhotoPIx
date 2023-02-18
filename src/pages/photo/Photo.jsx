import './photo.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Overlay from '../../components/overlay/Overlay'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Photo() {
  const navigat = useNavigate()
    const {id} = useParams()
    const [info , setInfo] = useState({})
    const [photo , setPhote] = useState({})
    console.log(id)
    useEffect(() =>{
        fetch(`https://api.pexels.com/v1/photos/${id}`)
        .then(res => res.json())
        .then(res => setPhote(res.src))
    } ,[])
    useEffect(() =>{
        fetch(`https://api.pexels.com/v1/photos/${id}`)
        .then(res => res.json())
        .then(res => setInfo(res))
    } ,[])
    console.log(photo)

  return (
    <> 
    <Overlay />
     <div className='photo'>
     <div className="container">
        <div className="info">
            <p>Photographer Name : <a href={info.photographer_url} target='_blank'>{info.photographer}</a></p>
            <p>Photo Dimensions : {info.width} X {info.height}</p>
            <div onClick={() => navigat('/photos')}><ArrowBackIosIcon /> Go back</div>
        </div>
        <div className='image'>
            <img src={photo.original} alt="" />
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Photo
