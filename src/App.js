import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import {Switch, Route} from 'react-router-dom';
// import { Routes ,Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
        <Switch>
          {/* Routes for pages */}
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
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App
