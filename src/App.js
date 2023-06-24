import './App.css';
// import of libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

// import of components
import { RedButton, BlueButton, TempButton } from './components/TempButton';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

<Router>
        
        <Navbar />
        
        <Routes>
          <Route path='/'  />
          <Route path='/projects'  />
          <Route path='/skills'  />
          <Route path='/contact' />
        </Routes>

      </Router>

      <RedButton >Ok</RedButton>
      <BlueButton >Stop</BlueButton>
      <TempButton colorClass="btn-info">Temp</TempButton>
      <TempButton color="rgb(255, 255, 255)">Temp</TempButton>
      {/* Tempbutton with color yellow in rgb */}
      <TempButton color="rgb(255, 255, 0)">Temp</TempButton>
    </div>
  );
}

export default App;
