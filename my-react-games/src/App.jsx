import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/home.jsx";
import Login from "./Pages/login.jsx";
import Registration from "./Pages/registration.jsx";
import SimpleFun from "./Pages/simpleFun.jsx";
import Navbar from './Components/Navbar.jsx';
import LocalStorageExercise from './Pages/localStorageExercise.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/simplefun' element={<SimpleFun/>}/>
        <Route path='/localstorageexercise' element={<LocalStorageExercise/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
