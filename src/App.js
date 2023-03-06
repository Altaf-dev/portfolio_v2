import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './navigate/Navigate'
import Main from './main/Main'



function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </Router>
  );
}

export default App;
