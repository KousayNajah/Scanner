'use client'

import React from 'react';
import {Provider, useDispatch} from 'react-redux';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panier from './store/panier';
import TotalOrder from './store/totalOrder';
import store from './store';





export default function Home() {

  const router=useRouter();


  const goToRecherch=()=>{
    router.push('/recherche');
  };
  const goToPromotion=()=>{
    router.push('/promotion');
  };
  const goToPayment=()=>{
    router.push('/payment')
  }


 
  return (
    <Provider store={store}>
    <div className='background'>

      <div className='container'>
        <p className="title">
          AuresKonnect
        </p>
        <div className="button-container">
        
          <button type="button" className="btn btn-secondary" onClick={goToRecherch}>Rechercher article</button>
        
        </div>

        <div className='button-Pay-container'>
            <button type='button' className='btn btn-dark buttonPay' onClick={goToPayment}>Payer</button>
        </div>
        <div className='panier-list-wrapper'>
           <Panier ></Panier>
        </div>
        <TotalOrder></TotalOrder>
      </div>
    </div>
  </Provider>
  );
}
function dispatch(arg0: { payload: Product; type: "basket/removeProductFromBasket"; }) {
  throw new Error('Function not implemented.');
}

/* line 43 <button type="button" className="btn btn-secondary"  >Code Promo</button>*/ 