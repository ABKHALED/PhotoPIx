import React, { useEffect, useState } from 'react'
import Overlay from '../../components/overlay/Overlay';
import { useContext } from 'react';
import { Context } from '../../ContextProvader';
import { Link } from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './videos.css'
function Videos() {
    const { newVideo ,vlike } = useContext(Context);
   
  return (
    <>
    <Overlay/>
    <div className='video-main'>
      <div className="container">
        <h1 className='text-center mb-5 fw-bold'>Videos</h1>
        <div className="body">
            <div className="row">
                {newVideo.map(ele =>{
                    return <div key={ele.id} className="col-12 col-md-6 col-lg-4 hol mb-4">
                        <img src={ele.image} alt="" />
                        <div className={`icons ${ele.liked ? 'active' : ''}`}>
                          <div onClick={() => vlike(ele.id)}>
                            {ele.liked ? <div className={`haret`} ><FavoriteIcon /></div> : <div className='haret'><FavoriteBorderIcon /></div>}
                          </div>
                            <div className='info'>
                                <Link to={`videos/${ele.id}`}><PlayCircleIcon /></Link>
                            </div>
                            
                        </div>
                        <div className="content">
                                <h3>made by {ele.user.name}</h3>
                        </div>
                    </div>
                })}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Videos
