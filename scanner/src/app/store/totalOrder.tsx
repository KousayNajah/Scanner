import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootState } from '.';
import { clearAllQuantity } from './counterSlice';
import { clearBasket } from './basketSlice';



const TotalOrder = () => {
    const order = useSelector((state: RootState) => state.basket.order);
    const dispatch=useDispatch();
    const Abandonner= () =>  {
    dispatch(clearAllQuantity())
    dispatch(clearBasket())
  }
    return (
        <div className='panier-container-total'>
            <div className='panier-total'>
                <div>Total: {order.total}</div>
                <div>Total Items: {order.globalQuantities}</div>

               
            </div>
            <div className='button-container-abandonner'>
            <button type="button" className="btn btn-secondary" onClick={Abandonner}>Abandonner</button></div>
        </div>
    );
}

export default TotalOrder;