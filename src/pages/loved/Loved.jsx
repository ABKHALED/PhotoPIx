import './loved.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../ContextProvader';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Overlay from '../../components/overlay/Overlay';
function Loved() {
    const { photoData ,remove , newVideo} = useContext(Context);
    const [lovedArr , setLovedArr] = useState([])
    const [lovedVid , setLovedVid] = useState([])
    useEffect(() =>{
        setLovedArr(prev =>{
            return photoData.filter(ele =>{
                return ele.liked === true
            })
        })
    } ,[photoData])
    useEffect(() =>{
        setLovedVid(prev =>{
            return newVideo.filter(ele =>{
                return ele.liked === true
            })
        })
    } ,[newVideo])
  return (
    <>
    <Overlay/>
    <div className='loved'>
      <div className="container mt-5">
        <div className="loved-photos mb-5">
            <h1>Photos you liked</h1>
            <div className="row">
                {lovedArr.length > 0? 
                lovedArr.map(ele =>{
                    return (
                        <div key={ele.id} className='col-12 col-md-6 col-lg-4 mt-4 hold'>
                            <img src={ele.src.large} alt={ele.id} />
                            <div className="remove" onClick={() => remove(ele.id)}>
                                <DeleteForeverIcon />
                            </div>
                        </div>
                    )
                })
                :<h3 className='text-center mt-5 text-black-50'>You didn t like any photo</h3>
                }
            </div>
        </div>
        <div className="loved-Vieos">
            <h1>Videos you liked</h1>
            <div className="row">
                {lovedVid.length > 0? 
                lovedVid.map(ele =>{
                    return (
                        <div key={ele.id} className='col-12 col-md-6 col-lg-4 mt-4 hold'>
                            <img src={ele.image} alt={ele.id} />
                            <div className="remove" onClick={() => remove(ele.id)}>
                                <DeleteForeverIcon />
                            </div>
                        </div>
                    )
                })
                :<h3 className='text-center mt-5 text-black-50'>You didn t like any Videos</h3>
                }
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loved
