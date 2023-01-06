import {useState, useEffect} from 'react'
import Axios from 'axios'
import Modal from './Modal'
import React from 'react';

export default function Band () {
    
    const BASE_URL='http://localhost:8000';
    const [bands, setBands] = useState(null)
    const [openModal, toggleModal] = useState(false)
    
    useEffect(()=>{
        const getData = async() => {
                const res = await Axios.get(`${BASE_URL}/band/`)
                setBands(res.data)            
        }

    getData();
    }, [])
console.log(bands)

if (!bands) {
    return <h2> Loading Page </h2>
} else{
    return (
    <div className='band-container'>            
        <div>
            <p className='bands-header'> BANDS</p>
        </div>

        <div className="container">
        {bands.map((band)=>(

        <div className='photoaround'>
            <div key={band} 
                className="previewCards" 
                onClick={toggleModal} 
                style={{backgroundImage: `url(${band.photo_url})`, 
                backgroundSize: 'cover', 
                color: 'rgb(146, 90, 82)',                          
                width:'100%',
                height:'500px',
                }}> 
                {openModal && <Modal band={bands} />}               
                <h3 className='band-name'>{band.name}</h3>            
                <h5 className='band-genre-name'>{band.genre_name}</h5>
                <h4 className='band-venue'>{band.venue_name}</h4>
            </div>   
        </div>
        ))
        }
    </div>
    </div>
) 
}}       
            