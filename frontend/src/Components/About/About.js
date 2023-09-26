import React, { useState } from "react";
import "./About.scss";                            
function About() {
  const [para,setpara]=useState('I am just a witty man with curious brain and a zeal to know about new technologies in the world of web. I have a passion for crafting art with great precision and details. It will be a pleasure for me to apply all my knowledge and skills on your imagination and turn them into a reality.')
  function handleClick(e){
    const l1=document.getElementById("1");
    const l2=document.getElementById("2");
    const l3=document.getElementById("3");
    if(l1.className=='lnk sel'){
      l1.classList.remove('sel')
    }
    else if(l2.className=='lnk sel'){
      l2.classList.remove('sel')
    }
    else if(l3.className=='lnk sel'){
      l3.classList.remove('sel')
    }
    const selectedId=e.target.id
    if(selectedId=='1'){
      l1.classList.add('sel')
    }
    else if(selectedId=='2'){
      l2.classList.add('sel')
    }
    else if(selectedId=='3'){
      l3.classList.add('sel')
    }
    
    const t=e.target.textContent
    if(t=='My Story'){
      setpara('I am just a witty man with curious brain and a zeal to know about new technologies in the world of web. I have a passion for crafting art with great precision and details. It will be a pleasure for me to apply all my knowledge and skills on your imagination and turn them into a reality.')
    }
    else if(t=='Experience'){
      setpara('When it comes to experience, I have been working on several projects and technologies from the last one year. I have worked on projects based on MERN Stack, some of them are Social Media Application, Full Stack To Do Application, Online ID Card generation and many more. I have also contributed towards combining Machine learning and ReactJS in Movie Recommendation Site and currently planning to make Chat Application from ReactJS with auto predict and auto translate functionality. In backend, I have good experience with MongoDB, NodeJS, ExpressJS and Strapi for CMS Speaking of job/internship, I am on the look out for them, if you are a recruiter do not hesitate to contact me.')
    }
    else{
     
      setpara('Speaking of my education, I first learned HTML and CSS in High School , the idea of writing some lines of code and displaying result in the form of visuals, it just fascinated me ,just ignited a spark in me and from there, the never-ending dive into the world of web began. As I delve deeper into it and learned many fascinating techs like ReactJS, SASS, CSS , HTML and a lot more, the spark only turned into a fire. Currently, I am a CSE24 student at GLA University, Mathura with a 7.91 pointer. ')
    }
  }

  return (
    <div className="about" id="about">
      <div className="abt">About me</div>
      
      
      <div className="info">
        <span className="c1"></span>
        <span className="c2"></span>
        <span className="c3"></span>
        <span className="c4"></span>
        <div className="nav-info">
          <ul>
            <li className="lnk sel" id='1' value='my story' onClick={handleClick}>My Story</li>
            <li className="lnk" id="2" value='exp' onClick={handleClick}>Education</li>
            <li className="lnk" value='edu' id="3" onClick={handleClick}>Experience</li>
          </ul>
        </div>
        <div className="abt-info">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
