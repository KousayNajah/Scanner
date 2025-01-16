import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';
import { clearProductFromBasket } from './basketSlice';
import { clearProductQuantity } from './counterSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Panier () {
  
    const order = useSelector((state: RootState) => state.basket.order);
    const dispatch = useDispatch();

    const handleDelete = (product: Product) => {
      dispatch(clearProductFromBasket(product));
      dispatch(clearProductQuantity(product.id))
  };
    
    return (

      <div className='panier-container' >
        <h2>Panier</h2>
        <div className='panier-header'>
        <div>Item</div>
        <div>Quantity</div>
        <div>Price</div>
        </div>
        <ul className="panier-list">
        {order.products.map((productInBasket) => (
          <li key={productInBasket.product.id} className="panier-item">
            <img src={productInBasket.product.image}/>
            <div>{productInBasket.product.title}</div>
            <div>{productInBasket.quantites}</div>
            <div>{productInBasket.product.price * productInBasket.quantites}</div>
            <div>
              <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(productInBasket.product)}
                    >x</button>
            </div>

          </li>
         
        ))}
      
      </ul>
      </div>
    );
};


