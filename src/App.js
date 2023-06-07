
import './App.css';
import Main from "./main";

import Navbar from "./topbar";
import Arrow from "./arrow";
import About from "./About";
import Projects from "./projects";
import ContactMe from "./contact";

import React from 'react';



function App() {

    // const containerRef = useRef(null)
  return (
      <>
          <Navbar/>

    <Main/>
        <Arrow/>

      <About/>
        <Projects/>
        <ContactMe/>

     </>


  );
}

export default App;
