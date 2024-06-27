import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import JobDesc from './Components/JobDesc/JobDesc';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Aside from './Components/Aside/Aside';

import './App.css';

function App() {
  return (
    <div className="App">
     < Navbar />
     < Header />
     < JobDesc />
     < Skills />
     < About />
     < Footer />
     < Aside/>
    </div>
  );
}

export default App;
