'use client'

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

export default function Payment() {
  const router=useRouter();

  const goToPromotion=()=>{
    router.push('/promotion');
  };
  const goToHome=()=>{
    router.push('/');
  }
  return (
    <div className='background'>

      <div className='container'>

        <h1 className="title ">AuresKonnect</h1>


      
        <p>Total commande</p>


        <p>Choissez votre mode de paiement</p>

        
        <div className="card text-center">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Especes</h5>
 
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Carte bancaire</h5>
          </div>
        </div>

        <div className='pay-buttons'>
          <button className="btn btn-secondary" onClick={goToPromotion}>Retour</button>
          <button className="btn btn-primary " onClick={goToHome}> Abandonner</button>
        </div>
      </div>
  
</div>

  );
}