import './video.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Overlay from '../../components/overlay/Overlay'
import { createClient } from 'pexels';

function Video() {
    const apiKey = "4rgeXM9DqvJxRPnCb62gMP1s8NZR8NAEP6GATLQPbfAhTnfJbgjDoSua";
    const {vid} = useParams()
    const navigat = useNavigate()
    const [video , setVideo] = useState(null)
    const [vidInfo , setVidInfo] = useState({})
    const [vim , setVim] = useState({})
   console.log(video)
    // useEffect(() =>{
    //     fetch(`https://api.pexels.com/videos/videos/${vid}`)
    //     .then(res => res.json())
    //     .then(res => setVideo(res))
    // } , [])
    useEffect(() =>{
        
        const client = createClient(apiKey);
        
        client.videos.show({ id: vid }).then(photo => setVideo(photo))
        
        
    } , [])
    
    // useEffect(() =>{
    //     fetch(`https://api.pexels.com/videos/videos/${vid}`)
    //     .then(res => res.json())
    //     .then(res => setVidInfo(res.user))
    // } , [])
    // useEffect(() =>{
    //     fetch(`https://api.pexels.com/videos/videos/${vid}`)
    //     .then(res => res.json())
    //     .then(res => setVim(res.video_pictures ))
    // } , [])
    
    
  
    
  return (
    <>
    <Overlay />
    {video && <div className='vid'>
      <div className="container">
        <div className="vid__info">
            <p>Photographer Name : <a href={video.user.url} target='_blank'>{video.user.name}</a></p>
            <p>Video Dimensions : {video['video_files'][0].width}X{video['video_files'][0].height}</p>
            <div onClick={() => navigat('/videos')}><ArrowBackIosIcon /> Go back</div>
        </div>
        <dir className='vid__holder'>
            <video controls autoPlay >
                <source src={video['video_files'][0].link} type='video/mp4'  />
            </video>
        </dir>
      </div>
    </div>}
    </>
  )
}

export default Video
