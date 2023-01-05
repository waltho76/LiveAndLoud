import React from 'react'
import Axios from 'axios'
import {useState,useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';
import Band from './Band';
import Modal from './Modal';

export default function Venue() {
    const BASE_URL='http://localhost:8000';
    const navigate = useNavigate();
    // const venue = props.id
    const [venues, setVenues, setCurrentVenue] = useState([{name:"", photo_url:null}])
    const [openModal, toggleModal] = useState(false)
    
    useEffect(()=>{
    const getVenues = async() => {
        try{
            const res = await Axios.get(`${BASE_URL}/venue/`)            
            setVenues(res.data)
            console.log(res.data)
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
            <h3 className='venue-header'>VENUE</h3>
        </div>
         <div className="container">
            {venues.map((venue, band)=>(
                <div className='photoaround'>
                <div key={band.id} 
                className="previewCards" 
                onClick={toggleModal} 
                style={{backgroundImage: `url(${venue.photo_url})`, 
                backgroundSize: 'cover', 
                color: 'rgb(146, 90, 82)',                          
                width:'100%',
                height:'500px',                
                }}>  
                {openModal && <Modal band={Band} />}
                <div className='venue-info'>              
                    <h2 className='venue-name'>{venue.name}</h2>
                    <h5 className='venue-sched'>{venue.band_sched}</h5>
                    <p className='venue-city'>{venue.city}</p>
                    <h5 className='venue-address'>{venue.address}</h5>
                </div>
            </div>
            </div>
            ))
            }
            </div>
    </div>
  ) : <h1>Loading</h1>;
}

     