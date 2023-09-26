import React, { useState } from "react";
import "./About.scss";
function About() {
  const [para,setpara]=useState('Self-taught since my youngest age, I love learning new things to improve my skills. Very curious by nature, I love the world of the web and new technologies, what I like most is the art and the precision behind each design. With all my skills and knowledge, I will have the pleasure to devote myself fully to the development of your ideas in order to make them great projects.')
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
      setpara('Self-taught since my youngest age, I love learning new things to improve my skills. Very curious by nature, I love the world of the web and new technologies, what I like most is the art and the precision behind each design. With all my skills and knowledge, I will have the pleasure to devote myself fully to the development of your ideas in order to make them great projects')
    }
    else if(t=='Experience'){
      setpara('During my experiences, I participated in several hackathons organized by my school. These events were intensive periods of one to two weeks during which we had to develop a project meeting the requirements of the client. As a self-taught person, I worked hard to improve my skills and become more independent. I focused on developing my programming and design skills to be more efficient. As a freelancer, I have worked on various projects to satisfy my clients request. I enjoy listening to their needs and finding solutions to meet their expectations. Thanks to this experience, I have acquired a good understanding of the clients needs in order to create viable projects that meet their expectations.')
    }
    else{
      setpara('As for my education, I started in my last year of high school with python and I loved it, the way of thinking, optimizing and displaying things only with lines of codes immediately fascinated me. So I decided to go to a computer science school: ETNA. The good thing is that there is alternance and autonomy. You learn by doing exciting projects that stimulate your creativity and your desire to learn. It was when I realized that I wanted to learn more that I started freelancing, a mysterious challenge that opened up to me and made me want to go beyond my limits.')
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
            <li className="lnk" id="2" value='exp' onClick={handleClick}>Experience</li>
            <li className="lnk" value='edu' id="3" onClick={handleClick}>Education</li>
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
