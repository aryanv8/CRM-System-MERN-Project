import "./App.css";

// import of libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import of react libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import of components
import Navbar from "./components/Navbar";
import {
  RedButton,
  BlueButton,
  TempButton,
  RedOutlineButton,
  WhiteOutlineButton,
} from "./components/TempButton";

// import of pages
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">

<Router>
        
        <Navbar />

        <Routes>
          <Route path='/'  />
          <Route path='/projects'  />
          <Route path='/skills'  />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>

      <RedButton>Ok</RedButton>
      <BlueButton>Stop</BlueButton>
      <TempButton colorClass="btn-info">Temp Info</TempButton>
      <TempButton color="rgb(255, 255, 255)">Temp</TempButton>
      {/* Tempbutton with color yellow in rgb */}
      <TempButton color="rgb(255, 255, 0)">Temp</TempButton>
      {/* RedOutlineButton with text Red Outline Button */}
      <RedOutlineButton>Red Outline Button</RedOutlineButton>
      <WhiteOutlineButton>White Outline Button</WhiteOutlineButton>
    </div>
  );
}

export default App;
