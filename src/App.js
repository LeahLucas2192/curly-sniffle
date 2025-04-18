import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
// import { FiInstagram } from "react-icons";

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        {/* <Skills /> */}
        {/* <Services /> */}
        <Resume />
        <Portfolio />
        {/* <Pricing /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
