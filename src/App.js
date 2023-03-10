import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Certificate from "./components/certificate/Certificate";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";


function App() {
  return (
      <Router>
          <Header/>
            <Routes>
              <Route exact path="/portfolio_v2" element={<Main/>}/>
              <Route path={"/certificate"} element={<Certificate/>}/>
              <Route path={"/portfolio"} element={<Portfolio/>}/>
              <Route path={"/contacts"} element={<Contacts/>}/>
            </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
