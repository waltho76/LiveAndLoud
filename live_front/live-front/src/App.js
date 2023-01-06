import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [currentVenue, setCurrentVenue] = useState({})
  const [currentBand, setCurrentBand] = useState({})

  return (    
      <div className="App">
        <Header/>                
        <Main/>        
        <Footer/>
      </div>    
  );
}

export default App;
