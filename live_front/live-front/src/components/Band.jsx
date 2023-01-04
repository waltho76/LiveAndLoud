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
                console.log(res.data)
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
        navigate('bandDetails')
    }
console.log(bands)
    return bands[0].photo_url ? (
      <div className='list-of-events'>            
        <div>
            <p className='venue-header'> EVENTS</p>
        </div>

        <div className="home-grid">
        {
        bands.map((band, index)=>(            
            <div style ={{backgroundImage: `url(${band.photo_url})`, backgroundSize: 'cover'}} key={index} className="home-venue-card" onClick={()=>handleClick(band)}>
                <p className='band-name'>{band.name}</p>
                <p classname='band-genre'>{band.genre_id}</p>
            </div>
          ))
        }
        </div>
      </div>
    ):<h1>LOADING</h1>
}