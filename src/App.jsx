import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Home from "./pages/Home/index";
import Trainers from "./pages/Trainers/index"
import Pricing from "./pages/Pricing/index"
import Contact from "./pages/Contact/index"
import About from "./pages/About/index"

function App() {
  

  return (
    < >
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
      
    </Router>
  </>
  )
}

export default App
