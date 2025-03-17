import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Basic/Header/Header';
import Footer from './Components/Basic/Footer/Footer';

import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Components/HomePage/Home'));
const AboutMe = lazy(() => import('./Components/AboutMePage/AboutMe'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
export default App;
