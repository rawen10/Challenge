import React, { useState } from "react";
import figma from "../assets/figma.png"
import axios from "axios";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/signUp", {
       fullName: username,
        email,
        password,
      });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message);
    }
  };

  return (
    <div style={{ paddingTop: 130, height: "130vh", justifyContent:"center", display:"flex"  }}>
    
    <div className="ring" style={{display:"flex", justifyContent:"center",zIndex:1}}>
        <i style={{ "--clr": "#DA0083" }}></i>
        <i style={{ "--clr": "#3B1C78" }}></i>
        <i style={{ "--clr": "#F9F871" }}></i>
        <div className="login">
          <h2    style={{
            background:
              "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Inter var, sans-serif",
            fontWeight: "400",
            fontSize: 50,
            marginBottom: 20, // Add margin bottom to create space between h1 and h2
          }}>SignUp</h2>

          <div className="inputBx">
            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
          </div>

          <div className="inputBx">
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="inputBx">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="inputBx">
            <input type="submit" value="Sign Up"onClick={handleSignUp}/>
          </div>
          <div className="links" style={{display:"flex",justifyContent:"center"}}>
            <a href="/">Sign In</a>
          </div>
        </div>
      </div>
    
      
      {/* <img
        style={{
          width: "80%",
          display: "flex",
          bottom: -220,
          position: "absolute",
          left: 50,
          transform: "translateX(10%)",
          paddingTop: 100,
          zIndex:0
        }}
        src={figma}
      /> */}
      
    </div>
  );
}

export default SignUp;
