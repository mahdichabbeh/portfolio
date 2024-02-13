import {BrowserRouter} from 'react-router-dom';
import Navbar  from './components/Navbar';
import About from './components/About';
import Journey from './components/Journey';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Certifs from './components/Certifs';

function App() {
  return (
    <BrowserRouter>
      <div className=' bg-white w-full h-full overflow-hidden'>
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
