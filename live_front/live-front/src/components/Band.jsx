import {useState,useEffect, useContext } from 'react'
import Axios from 'axios'
import {useNavigate, useLocation} from 'react-router-dom'
import { DataContext } from '../DataContext'

import React from 'react';



export default function Events () {
    
    const BASE_URL='http://localhost:8000';
    const [bands, setBands, setCurrentBand] = useState([{name:"", photo_url:null}])
    const navigate = useNavigate()
    

    useEffect(()=>{
        const getBands = async() => {
            try{
                const res = await Axios.get(`${BASE_URL}/band/`)
                setBands(res.data)
            }
            catch (error) {
                throw error
            }
        }
        getBands();
        },[])

    
    const handleClick = (band) => {
        setCurrentBand(band)
        navigate('bandDetail')
    }

    return bands[0].photo_url ? (
        <div className='band-container'>            
        <div>
            <p className='bands-header'> BANDS</p>
        </div>

        <div className="container">
            {bands.map((band, index)=>(
                <div className='photoaround'>
            <div key={index} 
            className="previewCards" 
            onClick={()=>handleClick(band)} 
            style={{backgroundImage: `url(${band.photo_url})`, 
            backgroundSize: 'cover', 
            color: 'rgb(146, 90, 82)',                          
            width:'100%',
            height:'500px',
            }}>                
            <h3 className='band-name'>{band.name}</h3>
            <h5 className='band-genre-name'>{band.genre_name}</h5>
         </div>   
        </div>
        ))
        }
        </div>
</div>
) : <h1>Loading</h1>;
}       
            