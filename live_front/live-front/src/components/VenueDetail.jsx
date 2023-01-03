import React from 'react'
import {useState,useEffect, useContext } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';


export default function VenueDetail() {
  const {currentVenue, setCurrentBand, currentBand} = useContext(DataContext)
    const BASE_URL='http://localhost:8000';
    const navigate=useNavigate();
    const [bands, setBands] = useState([])
    // const [counter, setCounter] = useState(0)

  useEffect(()=>{
    const getBands = async() => {
        try{
            const res = await Axios.get(`${BASE_URL}/venue/${currentVenue.name}`)
            console.log(res.data)
            setBands(res.data.bands)
        }
        catch (error) {
            throw error
        }
    }
    getBands();
    },[])

  const handleClick = (bands) => {
    setCurrentEvent(bands)
    navigate('bandDetails')
  }
  
  const changeCounter = () =>
  {setCounter(counter+1)}

  return (
    <div className='venue-detail-container'>

            <div className='venue-banner' style ={{backgroundImage: `url(${currentVenue.photo_url})`, backgroundSize: 'cover'}}>
                <p className='venue-banner-name'>{currentVenue.name}</p>
            </div>

            <div className='venue-banner-info'>
                <p className='venue-location'>{currentVenue.address}</p>                
            </div>

            <div>
                <p className='venue-header'>BAND</p>
            </div>

            <div>
            {bands.length>0?(
            
            <div className="home-grid">
            {
                bands.map((band, index)=>(
                    <div style ={{backgroundImage: `url(${band.photo_url})`, backgroundSize: 'cover'}} key={index} className="home-venue-card" onClick={()=>handleClick(band)}>
                        <p className='venue-name'>{band.name}</p>
                    </div>
                ))
            }</div>
            ):<div><h1>Loading</h1><button onClick={changeCounter}>Reload</button></div>}
            
            </div>
        </div>
  );
}