import './App.css'
import { useState } from 'react'
import { DataContext } from './DataContext'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const [currentVenue, setCurrentVenue] = useState({})
  const [currentBand, setCurrentBand] = useState({})

  return (
    // <DataContext.Provider value = {{
    //   currentVenue, setCurrentVenue,
    //   currentBand, setCurrentBand
    // }}>
      <div className="App">
        <Header/>
                
        <Main/>
        
        <Footer/>
      </div>
    // </DataContext.Provider>
  );
}

export default App;
