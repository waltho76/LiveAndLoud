import './App.css'
import {Routes, Route} from 'react-router-dom'
import {useContext, useState} from 'react'
import {DataContext} from './DataContext'
import Header from './components/Header'
import Main from './components/Main'
import Venue from './components/Venue'
import City from './components/City'
import CityDetails from './components/CityDetails'
import CarouselBootstrap from './components/CarouselBootstrap'
import VenueDetail from './components/VenueDetail'
import Band from './components/Band'
import BandDetail from './components/BandDetail'

function App() {

  const [currentVenue, setCurrentVenue] = useState({})
  const [currentBand, setCurrentBand] = useState({})

  return (
    <DataContext.Provider value = {{
      currentVenue, setCurrentVenue,
      currentBand, setCurrentBand
    }}>
      <div className="App">
        <Header/>
        <div>
          <CarouselBootstrap />
        </div>
        <City/>
        <Venue/>
        <Band/>
        <BandDetail/>
        <CityDetails/>
        <VenueDetail/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
