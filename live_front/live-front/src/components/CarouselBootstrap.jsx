import React from 'react'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Carousel } from "react-bootstrap"
import Venue from './Venue'

export default function CarouselBootstrap () {

  const BASE_URL='http://localhost:8000';
  const [cities, setCities, setCurrentCity,] = useState([{name:"", photo_url:null}])

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
        
    <Carousel>
      <Carousel.Item>
         <img
          className="d-block w-100 h-90"
          src="https://content.r9cdn.net/rimg/dimg/14/93/fb583943-city-11123-162bfe335ec.jpg"
          alt="first slide"
        />
                
        <Carousel.Caption>
          <button>ATLANTA</button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://travellersworldwide.com/wp-content/uploads/2021/05/shutterstock_313883429.jpg.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>NEW ORLEANS</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://img2.10bestmedia.com/Images/Photos/7804/p-beale-street-cropped_54_990x660_201404181501.jpg"
                    alt="Third slide"
        />

        <Carousel.Caption>
          <h3>MEMPHIS</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://www.beneschlaw.com/images/content/1/4/v1/14735/NewYork-1100x900.jpg"          
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>NEW YORK</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  {
        cities.map((city, index)=>(
            <div 
            
            style ={{backgroundImage: `url(${city.photo_url})`, backgroundSize: 'cover'}} key={index} className="city-card" onClick={()=>handleClick(city)}>
            <p className='city-name'>{city.name}</p>
            </div>
          ))
        }

    </div>
  ): <h1>Loading</h1>;
}