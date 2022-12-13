import React from 'react'
import './About.css';
import Nike from "../../img/nike.webp";
import Video from "../../img/VideoUff.mp4";
import Marco from "../../img/Marco.webp";
import Chloe from "../../img/Chloe.jpg";
import William from "../../img/William.jpg";
import Liam from "../../img/Liam.webp";
import Nike2 from "../../img/Nikeshop.webp";
import { FaRegHandPointer, FaMedal, FaRegLightbulb } from "react-icons/fa";

const About = () => {
  return (
     <div className='about'>
     <img src={Nike2} className='nike'/>
     <div>
      <h1 className='about-text'>
      “ Lo stile è qualcosa che ognuno di noi già possiede, 
      tutto ciò che abbiamo bisogno di fare è trovarlo . “
      </h1>
     </div>

     <div className='info-about'>
      <h1 className='info-title'>IL NOSTRO PROGETTO </h1>
      <div className='about-cards'>
        <div className='about-card'>
          <h3 className='card-title'>Crescere</h3>
          <FaRegHandPointer />
          <p className='info-text'>
            È da un po’ che non pubblichi qualcosaÈ da un po’ che non pubblichi qualcosa
            I post recenti che condividi o commenti appariranno qui
          </p>
        </div>
        <div className='about-card'>
          <h3 className='card-title'>Insegnare</h3>
          <FaMedal />
          <p className='info-text'>
            È da un po’ che non pubblichi qualcosaÈ da un po’ che non pubblichi qualcosa
            I post recenti che condividi o commenti appariranno qui
          </p>
        </div>
        <div className='about-card'>
          <h3 className='card-title'>Aiutare</h3>
          <FaRegLightbulb />
          <p className='info-text'>
            È da un po’ che non pubblichi qualcosaÈ da un po’ che non pubblichi qualcosa
            I post recenti che condividi o commenti appariranno qui
          </p>
        </div>
      </div>
     </div>

     <div className='team'>
     <video src={Video} width='100%' autoPlay loop muted/>
        <h2>IL NOSTRO TEAM</h2>
      <div className='container-team'>
        <div className='card-team'>
        <img src={Liam} className='team-person' />  
        <h4>Liam Smith</h4>
        <p>bfekekj</p>
        </div>
        <div className='card-team'>
        <img src={William} className='team-person' />  
        <h4>William Jones</h4>
        <p>bfekekj</p>
        </div>
        <div className='card-team'>
        <img src={Chloe} className='team-person' />  
        <h4>Chloe Perez</h4>
        <p>bfekekj</p>
        </div>
        <div className='card-team'>
        <img src={Marco} className='team-person' />  
        <h4>Marco Andrei</h4>
        <p>bfekekj</p>
        </div>
      </div>
     </div>
     <div className='homefooter'>
      <p>all © reserved to SOPY ALL team.</p>
    </div>
    </div>
  )
}

export default About
