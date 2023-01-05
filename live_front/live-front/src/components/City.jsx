import React from 'react'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'


export default function City() {
  const BASE_URL='http://localhost:8000';
  const [cities, setCities] = useState([{name:"", photo_url:null}])
  const navigate=useNavigate();
  
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
    
    navigate(`${BASE_URL}/modal/`)
  }

  
  return cities[0].photo_url ? (
    <div className='city-container'>
    <h4>CITIES</h4>
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