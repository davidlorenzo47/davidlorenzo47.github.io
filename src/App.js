import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import {Switch, Route} from 'react-router-dom';

import { useState } from 'react';
// import { Routes ,Route } from "react-router-dom";
import RouteChangeTracker from './Components/RouteChangeTracker'
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-219566512-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle);
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
      <Navbar/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
        <Switch>
          {/* Routes for pages */}
          <Route path="/dhruvanggondalia-portfolio/" exact>
                <HomePage />
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutMe />
              </Route>
              <Route path="/projects" exact>
                <Projects />
              </Route>
              <Route path="/skills" exact>
                <Skills />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="*" component={HomePage} />
        </Switch>
        </div>
      </div>
      <div>
        <RouteChangeTracker />
      </div>
    </div>
  );
}

export default App
