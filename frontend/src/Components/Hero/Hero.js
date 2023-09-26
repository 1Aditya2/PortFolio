import React from "react";
import "./Hero.scss";
import img from '../../Assets/myImg.png'
function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="cont">
        <div className="left">
          <span className="intro">Hi ! I am</span>
          <h2>Aditya <br />Yadav</h2>
          <span className="prof">MERN Stack Developer</span>
        
          <p>
            My mission is to help you build your projects with my versatility
            and my ability to adapt to different situations. Together, let's
            turn your ideas into great projects!
          </p>
        </div>
        <div className="right">
          <div className="my-img ">
            <img src={img} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Hero;
