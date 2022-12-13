import React from 'react'
import './ModalContent.css'
import { useContext } from 'react';
import { CartContext } from '../Context';
import { getProductDataTwo} from '../DatiShop';


const ModalContent = (props) => {
    const cart = useContext(CartContext);
    const id = props.id
    const quantity = props.quantity;
    const productData = getProductDataTwo(id);
  return (
    <div className='modal-content'>
      <img className='modal-content-img' src={productData.img}/>
      <div className='modal-content-container'>
      <h3 className='modal-content-title'>{productData.title}</h3>
      <p className='modal-content-quantity'>Total: {quantity}</p>
      <button size="sm" className='button-48' role="button" onClick={() => cart.deleteFromCart(id)}><span classname="text">Remove</span></button>
      </div>
      </div>
  )
}

export default ModalContent

