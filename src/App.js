import './App.scss';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
