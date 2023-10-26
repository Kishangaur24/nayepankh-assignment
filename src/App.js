
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Navbar/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
