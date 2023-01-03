import './App.css';
import Main from './components/Main';
import Venue from './components/Venue';
import City from './components/City';
import CarouselBootstrap from './components/CarouselBootstrap';

function App() {
  return (
    <div className="App">
      <h1>LIVE-N-LOUD</h1>
      <h4>FEATURED CITIES</h4>
      <div>
        <CarouselBootstrap />
      </div>
      <div>
        <City />
      </div>
      <div>
        <Venue/>
      </div>
  </div>
  );
}

export default App;
