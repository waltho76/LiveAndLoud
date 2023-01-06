import React from 'react'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Modal } from 'react-bootstrap'

export default function City() {
  const BASE_URL='http://localhost:8000';
  const [cities, setCities] = useState(null)
  const [openModal, toggleModal] = useState(false)
  
  
  useEffect(()=>{
    const getCities = async() => {      
        const res = await Axios.get(`${BASE_URL}`)
        console.log(res.data)
        setCities(res.data)      
    }

  getCities();
  },[])
console.log(cities)

if (!cities) {
  return <h2> Loading Page </h2>
} else{
  return (
    <div className='city-container'>
    <h4>CITIES</h4>
      <div className="container">
      {cities.map((city)=>( 

        <div className='photoaround'>  
               
            <div key={city} 
              className="previewCards"
              onClick={toggleModal}
              style={{backgroundImage: `url(${city.photo_url})`, 
              backgroundSize: 'cover', 
              color: 'rgb(146, 90, 82)',                          
              width:'100%',
              height:'500px'}}>                                   
                                                
              {openModal && <Modal city={cities} />}
              <h2 className='city-name'>{city.name}</h2>
            </div>
            
          </div>
        ))
      }       
    </div>   
    </div> 
  )
}
}