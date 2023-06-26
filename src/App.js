import "./App.css";

// import of libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import of react libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import of components
import Navbar from "./components/Navbar";

// import of pages
import Contact from "./pages/Contact";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" />
          <Route path="/projects" />
          <Route path="/skills" />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<FeedbackPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
