import {useState} from 'react'
import './Shop.css';
import Card from './Card/Card';
import { products } from './DatiShop';
import Modal from './Modal/Modal';
import { useContext } from 'react';
import { CartContext } from './Context';
import { FaRegHandPointer } from "react-icons/fa";

const Shop = () => {
  const [modal, setModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const words = [
    {id:1, value: 'I member hanno diritto a spedizione e resi gratuiti entro 30 giorni.'},
    {id:2, value:'I member hanno diritto a spedizione con pacchetto esclusivo.'},
    {id:3, value:'Member SHOPY ALL, usa GOBIG22 avrai un ulteriore sconto del 5%.'},
  ];
  const [wordData, setWordData] = useState(words[0].value)
  const click = (index) => {
    const wordSlider = words[index].value;
    setWordData(wordSlider);
  }
  return (
    <div className='shop'>
      <h1 className='title-shop'>Welcome To The Shop!!</h1>
      <div className='cart-items'>
      <input type='text' className='search-shop' placeholder='Search...'
       onChange={e => {setSearchTerm(e.target.value)}}/>
      <button className="button-59" onClick={() => setModal(true)}>Cart items : {productsCount}</button>
      </div>
       <div className='sconti-shop'>
        <p className='words'>{wordData}</p>
      <div className='cont-dito'>
        {words.map((id, i) =>  
          <h4 key={i} className='dito-shop' onClick={() => click(i)}><FaRegHandPointer className='oasi' /></h4>
         )} 
      </div>
      </div>
       {modal && <Modal setModal={setModal} />}
      <div className='shop-container'>
      {products.filter((val) => {
        if(searchTerm == ''){
          return val;
        } else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val;
        }
      }).map(product => (
        <div key={product.id}>
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

export default Shop
