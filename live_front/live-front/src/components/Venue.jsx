import React from 'react'
import Axios from 'axios'
import {useState,useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

export default function Venue() {
    const BASE_URL='http://localhost:8000';
    const navigate = useNavigate();
    const [venues, setVenues, setCurrentVenue] = useState([{name:"", photo_url:null}])
    
    
    useEffect(()=>{
    const getVenues = async() => {
        try{
            const res = await Axios.get(`${BASE_URL}/venue/`)            
            setVenues(res.data)
        }
        catch (error) {
            throw error
        }
    }
    getVenues();
    },[])
    
    const handleClick = (venue) => {
        setCurrentVenue(venue)
        navigate('/venueDetails')
    }

  return  venues[0].photo_url ? (
    <div className='venue-container'>
        <div>
            <p className='venue-header'>VENUE</p>
        </div>
         <div className="container">
            {venues.map((venue, index)=>(
                <div className='photoaround'>
                <div key={index} 
                className="previewCards" 
                onClick={()=>handleClick(venue)} 
                style={{backgroundImage: `url(${venue.photo_url})`, 
                backgroundSize: 'cover', 
                color: 'rgb(146, 90, 82)',                          
                width:'100%',
                height:'500px',
                
                }}>                
                <h1 className='venue-name'>{venue.name}</h1>
                <p className='venue-city'>{venue.city}</p>
                <h5 className='venue-address'>{venue.address}</h5>
            </div>
            </div>
            ))
            }
            </div>
    </div>
  ) : <h1>Loading</h1>;
}

     