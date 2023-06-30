import "./App.css";

// import of libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import of react libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import of components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// import of pages
import Contact from './pages/Contact';
import FeedbackPage from "./pages/FeedbackPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserProfilePage from "./pages/UserProfilePage";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<UserProfilePage/> } />

          <Route path='/edit-user' element={<EditUser />}></Route>
        </Routes>
        
      </Router>

      <Footer />
      {/* <RedButton>Ok</RedButton>
      <BlueButton>Stop</BlueButton>
      <TempButton colorClass="btn-info">Temp Info</TempButton>
      <TempButton color="rgb(255, 255, 255)">Temp</TempButton> */}

      {/* Tempbutton with color yellow in rgb */}
      {/* <TempButton color="rgb(255, 255, 0)">Temp</TempButton> */}

      {/* RedOutlineButton with text Red Outline Button */}
      {/* <RedOutlineButton>Red Outline Button</RedOutlineButton>
      <WhiteOutlineButton>White Outline Button</WhiteOutlineButton> */}
    </div>
  );
}

export default App;
