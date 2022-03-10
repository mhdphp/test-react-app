import logo from './logo.svg';
import './App.css';

function moreInfo() {
  return window.alert('For more info call 444-555-5689');
}

function App() {
  return (
    <div>
      <div>
        <h1>Landing Page Title</h1>
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
      <div>
        <img src="https://www.catsforafrica.co.za/wp-content/uploads/2017/05/CofA-BFCat-Walking-Square-400x400.jpg" alt="Cats" />
      </div>
        
    </div>);
}

export default App;