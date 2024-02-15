import {BrowserRouter} from 'react-router-dom';
import Navbar  from './components/Navbar';
import About from './components/About';
import Journey from './components/Journey';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Certifs from './components/Certifs';
import { useState,useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/PacmanLoader"
import "./index.css";

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>
    {setLoading(false)}
    ,3000)
  },[])
  return (
    loading ? 
      <div className='App bg-black h-fit w-full'>
      <ClimbingBoxLoader
      color={"#52D3D8"}
      loading={loading}
      size={20}
      />
      </div> :
      <BrowserRouter>
      <div className=' bg-white w-full h-full overflow-x-hidden'>
          <Navbar/>
          <Landing/>
          <About/>
          <Journey/>
          <Skills/>
          <Projects/>
          <Certifs/>
          <Contact/>
      </div>
    </BrowserRouter>
  

  );
}

export default App;
