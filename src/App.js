import './App.css';
import image from './images/1.jpg';

function App() {
  return (
    <div className="App">
      <nav className="head">
     
        
          <div className="main">Home page</div>
        
        <ul className="nav_list">
          <li className="nav_items left">
            <a href="#" className="nav_link">Home</a>
            <ul className="dropdown">
              <li><a href="#">Buy Cars</a></li>
              <li><a href="#">Rent Cars</a></li>
              <li><a href="#">Rent Bikes</a></li>
            </ul>
          </li>
          <li className="nav_items left">
            <a href="#" className="nav_link">Sedan Cars</a>
            <ul className="dropdown">
              <li><a href="#">Skoda</a></li>
              <li><a href="#">Tata</a></li>
              <li><a href="#">Honda</a></li>
              <li><a href="#">Volkswagen</a></li>
            </ul>
          </li>
          <li className="nav_items left">
            <a href="#" className="nav_link">XUV Cars</a>
            <ul className="dropdown">
              <li><a href="#">Skoda</a></li>
              <li><a href="#">Tata</a></li>
              <li><a href="#">Honda</a></li>
              <li><a href="#">Volkswagen</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>KRD Auto Consulting</h1>
        <p>Driving isn t just transport;
               It’s an experience.
              The thrill is in the journey.</p>
              <p>We offer a car rentals and bike rentals </p>
              <div className="buttons">
              <button className="buy">Buy Car</button>
              <button className="rent">Rent Car</button><br></br>
              <button className="bike">Rent Bike</button>
             </div>
      </div>
     
    </div>
  );
}

export default App;
