import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './Components/Basic/Header/Header';
import Footer from './Components/Basic/Footer/Footer';
import Home from './Components/HomePage/Home.js';
import AboutMe from './Components/AboutMePage/AboutMe.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
