import React from 'react'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import Carousel from './CarouselBootstrap';
import CarouselBootstrap from './CarouselBootstrap';
// import {useNavigate} from 'react-router-dom'
// import { DataContext } from '../DataContext';

export default function City() {
  const BASE_URL='http://localhost:8000';
  const [cities, setCities, setCurrentCity,] = useState([{name:"", photo_url:null}])
  // const navigate=useNavigate();
  // const {setCurrentCity} = useContext(DataContext)

  useEffect(()=>{
    const getCities = async() => {
      try{
        const res = await Axios.get(`${BASE_URL}`)
        console.log(res.data)
        setCities(res.data)
      }
      catch (error) {
        throw error
      }
    }
  getCities();
  },[])

  const handleClick = (cities) => {
    setCurrentCity(cities)
    // navigate('/cityDetails')
  }

console.log(cities)  
  return cities[0].photo_url ? (
    <div>
      {/* <CarouselBootstrap /> */}
      {
        cities.map((cities, index)=>(
            <div 
            
            style ={{backgroundImage: `url(${cities.photo_url})`, backgroundSize: 'cover'}} key={index} className="home-venue-card" onClick={()=>handleClick(cities)}>
                <p className='city-name'>{cities.name}</p>
            </div>
        ))
      } 
      
    </div>
  ): <h1>Loading</h1>;
}