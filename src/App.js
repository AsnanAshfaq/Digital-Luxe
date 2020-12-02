import React from "react";
import Logo from "./logo.png";
import "./App.css";
// icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
// Typing Animation
import Typing from "react-typing-animation";
// Wave Animation
import Wave from "react-wavify";

function App() {
  return (
    <div className="App container-fluid">
      {/* company logo and name  */}
      <div className="row  d-flex flex-row h-25">
        <div className="col">
          <div className="container-fluid h-50  d-flex m-0 p-0">
            <img
              src={Logo}
              className="img-responsive h-50 justify-content-start"
              alt=""
            />
            <h1
              style={{
                color: "#B1ADAD",
                marginTop: "25px",
                fontFamily: "Sansita Swashed cursive",
                userSelect: "none",
              }}
            >
              Digital Luxe
            </h1>
          </div>
        </div>
      </div>

      {/* title & subtitle of the company  */}
      <div className="row d-flex h-50">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <Typing speed={60}>
            <h1
              style={{
                userSelect: "none",
                color: "#B1ADAD",
                fontFamily: "Sansita Swashed cursive",
              }}
            >
              Digital Luxe
            </h1>
          </Typing>

          <Typing speed={10}>
            <h4 style={{ fontSize: 15, userSelect: "none", color: "#B1ADAD" }}>
              <i> For all your software needs</i>
            </h4>
          </Typing>
        </div>
      </div>
      {/* social media icons  */}
      <div className="row h-25 d-flex">
        {/* blank space  */}
        <div className="col-xs-3 col-lg-4 col-md-3 col-sm-3"></div>
        <div className="col-xs-6 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-between">
          <FacebookIcon
            className="d-flex justify-content-between hover-animation"
            style={{ fontSize: 50, color: "#B1ADAD" }}
          />
          <InstagramIcon
            className="d-flex justify-content-between  hover-animation"
            style={{ fontSize: 50, color: "#B1ADAD" }}
          />
          <TwitterIcon
            className="d-flex justify-content-between hover-animation"
            style={{ fontSize: 50, color: "#B1ADAD", backgroundColor: "none" }}
          />
        </div>
        <div className="col-xs-3 col-lg-4 col-md-3 col-sm-3"></div>
        <Wave
          fill="#292A28"
          paused={false}
          options={{
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  );
}

export default App;
