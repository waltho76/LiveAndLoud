import React from 'react'
import Axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Carousel } from "react-bootstrap"
import Venue from './Venue'
import {Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { DataContext } from '../DataContext';

export default function CarouselBootstrap () {

  const BASE_URL='http://localhost:8000';
  const [cities, setCities, setCurrentCity,] = useState([{name:"", photo_url:null}])
  const navigate=useNavigate()
  const [venues, setVenues] = useState([])
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

  const handleClick = (city) => {
    setCurrentCity(city)
    navigate('cityDetail')
}
  

return cities[0].photo_url ? (
    <div className='carousel-container'> 
        <div className='carousel'>
    <Carousel>
      <Carousel.Item>
        <a onClick={()=>handleClick(`${BASE_URL}/city/1`)}>
         <img 
          className="d-block w-100"
          src="https://content.r9cdn.net/rimg/dimg/14/93/fb583943-city-11123-162bfe335ec.jpg"
          alt="first slide"
        /> </a>               
        <Carousel.Caption>
          <h3>ATLANTA</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://travellersworldwide.com/wp-content/uploads/2021/05/shutterstock_313883429.jpg.webp"
          alt="Second slide"
        />
        <div className='carouselCaption'>
        <Carousel.Caption>
          
          <h3>NEW ORLEANS</h3>          
        </Carousel.Caption>
        </div>
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
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h3>NEW YORK</h3>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="http://cdn.cnn.com/cnnnext/dam/assets/180313182911-01-las-vegas-travel-strip.jpg"          
          alt="fifth slide"
        />
        <Carousel.Caption>
          <h3>LAS VEGAS</h3>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  ): <h1>Loading</h1>;
}
