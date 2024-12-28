import './App.css';
// import { Route, Routes} from 'react-router-dom';
import Header from './Components/Basic/Header/Header';
import Footer from './Components/Basic/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/" element={<Header/>} />
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
