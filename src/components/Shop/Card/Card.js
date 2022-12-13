import { CartContext } from '../Context'
import { useContext } from 'react'
import './ShopCard.css';

const Card = (props) => {
    const product = props.product
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
  return (
     <div className='shop-card-all'>
    <div className='shop-card-container'>
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
      <div className='shop-btn'>
      {productQuantity > 0 ? 
        <div>
          <h3>Item in Cart: {productQuantity}</h3>
          <button onClick={() => cart.addOneToCart(product.id)}>+</button>
          <button onClick={() => cart.removeOneFromCart(product.id)}>-</button>
          <button onClick={() => cart.deleteFromCart(product.id)}>Remove</button>
        </div>
        :
        <button onClick={() => cart.addOneToCart(product.id)}>Add to Cart</button>
      }
      </div>
    </div>
    </div>
  )
}

export default Card;