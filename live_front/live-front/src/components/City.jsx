import React from 'react'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import Carousel from './CarouselBootstrap';
import CarouselBootstrap from './CarouselBootstrap';
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

export default function City() {
  const BASE_URL='http://localhost:8000';
  const [cities, setCities] = useState([{name:"", photo_url:null}])
  const navigate=useNavigate();
  const {setCurrentCity} = useContext(DataContext)

  useEffect(()=>{
    const getCities = async() => {
      try{
        const res = await Axios.get(`${BASE_URL}`)
        
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
    navigate('/city')
  }

  
  return cities[0].photo_url ? (
    <div className='city-container'>
      <div className="container">
      {cities.map((cities, index)=>( 
        <div className='photoaround'>     
            <div key={index} 
            className="previewCards" 
            onClick={()=>handleClick(cities)} 
            style={{backgroundImage: `url(${cities.photo_url})`, 
            backgroundSize: 'cover', 
            color: 'rgb(146, 90, 82)',                          
            width:'100%',
            height:'500px',
          }}>           
                
              <h2 className='city-name'>{cities.name}</h2>
              
            </div>
            </div>
        ))
      } 
      
    </div>
    
   
    </div> 
  ): <h1>Loading</h1>;
}