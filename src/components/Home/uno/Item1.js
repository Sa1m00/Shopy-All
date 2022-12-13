import React from 'react'
import Nike from "../../../img/nike.webp"
import Nike2 from'../../../img/nike.gif'
import {Link} from 'react-router-dom';
import './item1.css';


const item1 = () => {
  return (
    <div className='uno'>
      <img src={Nike} className='nike'/>
      <div className='left-home'>
       <h1>SHOPY ALL</h1>
      <h3>Tutti i vestiti che cerchi a portata di click</h3>
      <p>Shopy All è un database internazionale che mette a tua
         disposizione, in maniera Ottimale, le ricette dei più 
         importanti e diffusi Vestiti al mondo.</p>
         <Link to='about' className="button-57" role="button"><span className="text">SHOPY ALL</span><span>Scopri</span></Link>
      </div>
      <div className='right-home'>
          <img src={Nike2} className='gif'/>
      </div>
      </div>
  )
}

export default item1
