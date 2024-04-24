import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import App from "./App";
import Profile from "./Component/Profile";
import About from "./Component/About";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/LogIn";
import Train from "./Component/Train";
import Settings from "./Component/Settings";
import Edit from "./Component/Edit";

function Main() {
  const [user, setUser] = useState(''); // état initial: déconnecté
 const token = JSON.parse(localStorage.getItem("token"))
 console.log(token ,"this is the token")
  const handleLogin = () => {
    setUser(true); // Simulate login by setting user to true
  };

  useEffect(() => {
    if(token){
      setUser(true)
    }
    else {
      setUser(false); // Simulate login by
    }
  },[token])

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="train" element={<Train />} />
            <Route path="settings" element={<Settings />} />
            <Route path="editProfile" element={<Edit />} />
          </Route>
        ) : 
         
          <>
            <Route path="/" element={<LogIn onLogin={handleLogin}/>} />
            <Route path="signUp" element={<SignUp />} />
          </>
        }
         
       
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
