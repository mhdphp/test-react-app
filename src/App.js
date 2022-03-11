import logo from './logo.svg';
import './App.css';

function moreInfo() {
  return window.alert('For more info call 444-555-5689');
}

function App() {
  return (
    <div className='App' >
      
      <div style={{width: '75%', 
                  backgroundColor: '#e6e6ff', 
                  padding: '50px'}}>
        <div>
          <h1 id='pageHeader'>Landing Page Title</h1>
        </div>
        <div>
          <img 
            src="https://www.catsforafrica.co.za/wp-content/uploads/2017/05/CofA-BFCat-Walking-Square-400x400.jpg" 
            alt="Cats"
            style={{width:'500px'}} />
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore necessitatibus et rerum ab vel, om</p>
        </div>
          <br />
        <div>
          <button onClick={moreInfo}>Click Here for More Info</button>
        </div>
          <br />
      </div>
        
    </div>);
}

export default App;