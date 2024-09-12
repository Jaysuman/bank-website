import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';  // Path to Navbar
import Personal from './Personal';  // Path to Personal
import Business from './Business';  // Path to Business
import Commercial from './Commercial';  // Path to Commercial
import Wealth from './Wealth';  // Path to Wealth
import About from './About';  // Path to About
import Websites from './Websites';  // Path to Websites

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#cac9e5', minHeight: '100vh' }}>
      <Navbar />
      <div className="container-fluid mt-4 px-0"> {/* 'container-fluid' and 'px-0' to remove padding */}
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/wealth" element={<Wealth />} />
          <Route path="/about" element={<About />} />
          <Route path="/websites" element={<Websites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
