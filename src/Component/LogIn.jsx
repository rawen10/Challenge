import React, { useState } from "react";
import axios from 'axios';


function LogIn({ onLogin }) { //accept  the callback as a prop 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      // Store the JWT token (in local storage or cookies)
      localStorage.setItem('token', JSON.stringify(response.data));
       // Call the callback on successful login
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div
      style={{
        paddingTop: 150,
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        background:"black"
      }}
      className="App"
    >
      <div className="ring">
        <i style={{ "--clr": "#DA0083" }}></i>
        <i style={{ "--clr": "#3B1C78" }}></i>
        <i style={{ "--clr": "#F9F871" }}></i>
        <div className="login">
          <h2
            style={{
              background:
                "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Inter var, sans-serif",
              fontWeight: "400",
              fontSize: 50,
              marginBottom: 20, // Add margin bottom to create space between h1 and h2
            }}
          >
            Login
          </h2>

          <div className="inputBx">
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="inputBx">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="inputBx">
            <input type="submit" value="Sign in" onClick={handleLogin} />
          </div>

          <div className="links">
            <a href="#">Forget Password</a>
            <a href="signUp">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
