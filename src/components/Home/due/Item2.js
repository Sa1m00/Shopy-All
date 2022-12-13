import React from 'react'
import './Item2.css';
import { productsArray } from '../../../DatiCarrello';
import Card from './Card';

const item2 = () => {
  return (
    <div>
      <h1 className='name'>Alcuni dei nostri prodotti</h1>
      <div className='flex'>
       {productsArray.map(product => (
        <div  key={product.id}>
          <Card product={product}/>
        </div>
      ))}
    </div>
    <div className='homefooter'>
      <p>all © reserved to SOPY ALL team.</p>
    </div>
    </div>
  )
}

export default item2




