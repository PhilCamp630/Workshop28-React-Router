import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from"./Red.jsx";
import Blue from "./Blue.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          {/* Link Tags */}
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
