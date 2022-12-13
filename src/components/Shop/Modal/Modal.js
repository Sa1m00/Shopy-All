import React, { useState } from 'react'
import './Modal.css'
import { useContext } from 'react';
import { CartContext } from '../Context';
import ModalContent from './ModalContent';

const Modal = ({setModal}) => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
      <p onClick={() => setModal(false)} className='btnClose'>✖️</p>

        <h1 className='title'>Your Cart</h1>
          <div className='body'>
            {productsCount > 0 ? 
    
            <div>
            {cart.items.map((product, idx) => (
              <ModalContent key={idx} id={product.id} quantity={product.quantity}/>
            ))}
            <h2 className='modal-total-cost'>Total:  ${cart.getTotalCostShop().toFixed(2)}</h2>
            <button className='button-48'><span classname="text">Purchase All Items</span></button>
            </div>

            :
          <p>Your cart is empty!!</p>
            }
          </div>
      </div>
      </div>
  )
}

export default Modal