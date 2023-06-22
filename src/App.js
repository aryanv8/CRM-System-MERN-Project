import './App.css';
// import of libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import of components
import { RedButton, BlueButton, TempButton } from './components/TempButton';


function App() {
  return (
    <div className="App">
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
