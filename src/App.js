import React from "react";
import Logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      {/* company logo and name  */}
      <div className="row h-25">
        <div className="col d-flex flex-row">
          <div className="container-fluid h-50  d-flex m-0 p-0">
          <img
            src={Logo}
            className="img-responsive h-50 justify-content-start"
            alt=""
          />
          <h1 style={{color:'#B1ADAD',marginTop:'20px',fontFamily: 'Sansita Swashed cursive',userSelect:'none'}}>Digital Luxe</h1>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
