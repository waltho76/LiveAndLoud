import {useState,useEffect, useContext } from 'react'
import Axios from 'axios'
import { DataContext } from '../DataContext';
import React from 'react';

export default function BandDetail() {
    const {currentVenue, currentBand} = useContext(DataContext)
    const BASE_URL='http://localhost:8000';   
    const [band, setBand] = useState([])

    useEffect(()=>{
        const getBands = async() => {
            try{
                const res = await Axios.get(`${BASE_URL}/band/`)
                console.log(res.data.band)
                setBand(res.data.band)
            }
            catch (error) {
                throw error
            }
        }
    getBands();
    },[])        
    
return (
    <div className='band-detail-container'>
        <h2>band detail</h2>
        <div className='band-banner' 
            style ={{backgroundImage: `url(${currentBand.photo_url})`,
            backgroundSize: 'cover'}}>
            <p className='band-name'>{currentBand.name}</p>
        </div>
        <div className='venue-info-2cards'>                
            <div className='venue-info-card' 
                style ={{backgroundImage: `url(${currentVenue.photo_url})`, 
                backgroundSize: 'cover'}}>
                <p className='venue-name'>{currentVenue.name}</p>
            </div>                              
        </div>
    </div>
    );
}