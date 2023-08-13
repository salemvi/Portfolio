import './styles/main.css';





import NavBar from './Components/navBar/NavBar';
import Footer from './Components/footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectIsOpen from './pages/ProjectIsOpen';
import Project from './Components/project/Project';
import ScrollToTop from './utils/scrollToTop'; //



function App() {
  return (
   
    <div className="App">
      <Router>
        <ScrollToTop/>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/project/:id' element={<ProjectIsOpen/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
          {/* <Home/> */}
          {/* <Projects/> */}
          {/* <Contacts/> */}
          {/* <ProjectIsOpen/> */}
          <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
