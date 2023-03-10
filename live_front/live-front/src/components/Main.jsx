import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Venue from './Venue'
import City from './City'
import VenueDetail from './VenueDetail'
import Band from './Band'
import BandDetail from './BandDetail'
import CarouselBootstrap from './CarouselBootstrap'
import Modal from './Modal'

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path = '' element ={<Home/>}/>
        <Route path ='/city' element = {<City/>}/>
        <Route path ='/venue' element ={<Venue/>}/> 
        <Route path ='venueDetail' element ={<VenueDetail/>}/>             
        <Route path = '/band' element ={<Band/>}/>
        <Route path ='/bandDetails' element={<BandDetail/>}/>
        <Route path ='/carouselBootstrap' element={<CarouselBootstrap/>}/>
        <Route path="/modal" element={<Modal/>}/>
      </Routes>
    </div>
  )
}
