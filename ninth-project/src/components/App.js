import '../style/App.css';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Card from '../components/Card';

function App() {

  const cards = [
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}, 
      {image:'https://pokeres.bastionbot.org/images/pokemon/1.png'}
  ];

  return (
    <div className="App">
        <Navbar />
        <div className="main">
          <div className='hero-container'>
              <Search />
          </div>
          <div className='cards-container'>
            {cards.map((card) => <Card {...card}/>)}
          </div>
        </div>
    </div>
  );
}

export default App;
