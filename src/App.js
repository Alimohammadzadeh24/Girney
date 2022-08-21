import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import VerifyLogin from './Pages/Verify_login/VerifyLogin'
import Visa from './Pages/Visa/Visa'
import FinalStep from './Pages/Final/Final'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/verify_login' element={<VerifyLogin/>}/>
        <Route path='/visa' element={<Visa/>}/>
        <Route path='/final_step' element={<FinalStep/>}/>
      </Routes>
    </div>
  );
}

export default App;
