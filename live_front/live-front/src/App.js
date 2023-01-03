import './App.css';
import Main from './components/Main';
import Venue from './components/Venue';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <h1>LIVE-N-LOUD</h1>
      <div>
        <Main/>
      </div>
    
      <div>
        <City/>
      </div>
  </div>
  );
}

export default App;
