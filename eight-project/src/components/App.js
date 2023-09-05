import '../style/App.css';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import places from '../data';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="Cards">
          {places.map((place) => <Card {...place}/>)}
        </div>
    </div>
  );
}

export default App;
