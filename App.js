import React from "react";
// import Login from "./Components/Login"; 
// import Resgistration from "./Components/Resgistration";
import "./Styles/app.css"
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile/>
      {/* <Home/> */}
      {/* 
      <div style={{height:"100vh",display:"flex",alignItem:"centre"}}>
      <Resgistration/>
      </div> */}
      
    </div>
  );
}

export default App;
