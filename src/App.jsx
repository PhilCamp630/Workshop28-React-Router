import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Nadeshiko from "./colors/Nadeshiko.jsx";
import Coral from "./colors/Coral.jsx";
import Red from "./colors/Red.jsx";
import Orange from "./colors/Orange.jsx";
import Yellow from "./colors/Yellow.jsx";
import Corn from "./colors/corn.jsx"
import Celadon from "./colors/Celadon.jsx";
import Green from "./colors/Green.jsx"
import Olive from "./colors/Olive.jsx"
import Blue from "./colors/Blue.jsx";
import Cyan from "./colors/Cyan.jsx"
import Cobalt from "./colors/Cobalt.jsx";
import Home from "./Home.jsx";
import Umber from "./colors/Umber.jsx"


function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/Nadeshiko">Nadeshiko</Link>
        <Link to="/coral">Coral</Link>
        <Link to="/red">Red</Link>
        <Link to="/orange">Orange</Link>
        <Link to="/yellow">Yellow</Link>
        <Link to="/corn">Corn</Link>
        <Link to="/celadon">Celadon</Link>
        <Link to="/green">Green</Link>
        <Link to="/olive">Olive</Link>
        <Link to="/cyan">Cyan</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/cobalt">Colbat</Link>
        <Link to="/umber">Umber</Link>
      </div>
      <div id="main-section">
        <Routes>
          {/* Link Tags */}
          <Route path="/" element={<Home />} />
          <Route path="/Nadeshiko" element={<Nadeshiko />} />
          <Route path="/coral" element={<Coral />} />
          <Route path="/red" element={<Red />} />
          <Route path="/orange" element={<Orange />} />
          <Route path="/yellow" element={<Yellow />} />
          <Route path="/corn" element={<Corn />} />
          <Route path="/celadon" element={<Celadon />} />
          <Route path="/green" element={<Green />} />
          <Route path="/olive" element={<Olive />} />
          <Route path="/cyan" element={<Cyan />} />
          <Route path="/cobalt" element={<Cobalt />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/umber" element={<Umber />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
