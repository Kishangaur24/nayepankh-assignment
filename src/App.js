
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navbar from './Component/Navbar/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Component/AboutUs/AboutUs';
import SignUp from './Component/SignUp/SignUp';
import SignIn from './Component/SignIn/SignIn';
import FeedbackForm from './Component/Feedback/Feedback';
// import Header from './Component/Navbar/Header';

function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     {/* <Header/> */}
      <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/feedback' element={<FeedbackForm/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
