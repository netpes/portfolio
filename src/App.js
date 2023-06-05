
import './App.css';
import Main from "./main";

import Navbar from "./topbar";
import Arrow from "./arrow";
import About from "./About";
import Projects from "./projects";
import ContactMe from "./contact";


function App() {
  return (
    <div className="App  flex flex-col justify-center items-center ">
      <Navbar/>

    <Main/>
        <Arrow/>
      <About/>
        <Projects/>
        <ContactMe/>

    </div>
  );
}

export default App;
