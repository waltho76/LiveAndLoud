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
            console.log(res.data)
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

console.log(venues)
  return  venues[0].photo_url ? (
    <div>
        
        <div className="home-grid">
            {
            venues.map((venue, index)=>(
                <div style ={{backgroundImage: `url(${venue.photo_url})`, backgroundSize: 'cover'}} key={index} className="home-venue-card" onClick={()=>handleClick(venue)}>
                    <p className='venue-name'>{venue.name}</p>
                    <p className='venue-city'>{venue.city}</p>
                    <p className='venue-address'>{venue.address}</p>
                </div>
            ))
            }
            </div>
    </div>
  ) : <h1>Loading</h1>;
}
