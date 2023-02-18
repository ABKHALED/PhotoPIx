import './photos.css'
import { useContext } from 'react';
import { Context } from '../../ContextProvader';
import Overlay from '../../components/overlay/Overlay'
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
function Photos() {
    const { photoData ,lik } = useContext(Context);
    
  return (
    <>
    <Overlay />
    <div className='main'>
      <div className="container">
        <h1 className='text-center mb-5 fw-bold'>Photos</h1>
        <div className="body">
            <div className="row">
                {photoData.map(ele =>{
                    return <div key={ele.id} className="col-12 col-md-6 col-lg-4 hol mb-4">
                        <img src={ele.src.large} alt="" />
                        <div className={`icons ${ele.liked ? 'active' : ''}`}>
                          <div onClick={() => lik(ele.id)}>
                            {ele.liked ? <div className={`haret`} ><FavoriteIcon /></div> : <div className='haret'><FavoriteBorderIcon /></div>}
                          </div>
                            <div className='info'>
                                <Link to={`photos/${ele.id}`}><InfoIcon /></Link>
                            </div>
                            
                        </div>
                        <div className="content">
                                <h3>made by {ele.photographer}</h3>
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

export default Photos
