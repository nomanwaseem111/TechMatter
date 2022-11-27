import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import Solution from './Components/Solution.jsx/Solution';
import About from './Components/About/About';
import Contact from './Components/Contact.jsx/Contact';
import Blog from './Components/Blog/Blog';
import Navbar from './Components/Navbar/Navbar';
import './index.css'


const App = () => {
  return (
    <div>
 <Router>
      <div>
       <Navbar/>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App