import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Login from "./Pages/Login/Login";
import VerifyLogin from "./Pages/Verify_login/VerifyLogin";
import Visa from "./Pages/Visa/Visa";
import FinalStep from "./Pages/Final/Final";
import { route_login , route_loginVerify , route_visa , route_final } from "./defz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={route_login} element={<Login />} />
        <Route path={route_loginVerify} element={<VerifyLogin />} />
        <Route path={route_visa} element={<Visa />} />
        <Route path={route_final} element={<FinalStep />} />
      </Routes>
    </div>
  );
}

export default App;
