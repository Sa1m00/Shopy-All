import React from 'react'
import './Card.css';
import {Link} from 'react-router-dom';

const Card = (props) => {
    const product = props.product;
  return (
    <div className='container'>
    <div className='card-container'>
      <div className='image-container'>
        <img src={product.img}/>
      </div>
      <div className='card-content'>
      <div className='card-title'>
        <h3>{product.title}</h3>
      </div>
      <div className='card-body'>
       <p>{product.desc}</p>
      </div>
      <div className='card-price'>
       <p>$ {product.price}</p>
      </div>
      </div>
      <div className='btn'>
        <button>
        <Link to='shop'>View More</Link>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Card
