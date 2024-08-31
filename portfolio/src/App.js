import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './Components/Basic/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/" element={<Header/>} />
      </Routes> */}
    </div>
  );
}

export default App;
