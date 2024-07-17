import logo from './logo.svg';
import './App.css';
import pic from './20240625_145155.jpg' 
import anime from './Screenshot 2024-07-17 142136.png'
import haz from './Screenshot 2024-07-17 142059.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="top-left">
      <img id="top-left-img" src={pic} alt="Top Left Image" />  
      <div>Scott Premo  </div>    
        <div>372 Golden Eagle St. NW  </div>
        <div>Salem, OR 97304 </div>
        <div>(503) 716-6070 </div>
        <div>scpremo@hotmail.com </div>
        <h3><a href='https://github.com/scpremo'>All other projects/source code</a></h3>
      </div>
      <div id='live'>
        <h1 id='title'>
          Currently Hosted Projects
        </h1>
        <p id='desc'>Git hub pages has some issues when some of the cites are loaded for the first time, you might need to refresh your page if it doesnt load.</p>
        <div className='project' onClick={() => {
            window.open('https://scpremo.github.io/Corvallis-Hazard-Watch/'); // Replace 'your-link-here' with your actual URL
          }}>
          <img className="cover" src = {haz}/>
          <p>This projects goal was to create a website using react where users can create and view hazards around their area. This project won the Industry Choice Award from Pacific Power during the 2024 Oregon State Univeristy expo  Click to view.</p>
        </div>
        <div className='project'onClick={() => {
            window.open('https://scpremo.github.io/Anime-Browser/'); // Replace 'your-link-here' with your actual URL
          }}>
          <img className= "cover" src = {anime}/>
          <p>This projects goal was to create a react app that heavily utilized a rest api, the application allows people to browse shows and has two small games added to it. A large challenge with this project was the rate limiting that the api gave us, which limited what we could do, and how fast we could do things. Click to view.</p>
        </div>
        </div>

    
        
      </header>
    </div>
  );
}

export default App;
