'use client'
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';


export default function Methode() {
   const router=useRouter();

   const goToManuell=()=>{
    router.push('/promotion/methode/manuell')
   }
   const goToScann=()=>{
    router.push('/promotion/methode/scann')
   }
   const goToPromotion=()=>{
    router.push('/promotion')
  }
    return (
        <div className='background'>

            <div className='container'>

                <h1 className="title">
                    AuresKonnect
                </h1>





                <p className='message'>Veuillez choisir votre mode d identification !</p>
                <div className="buttons">
                    <button className="btn btn-primary scanner-button" onClick={goToScann}>Scanner carte</button>  
                    <button className="btn btn-primary scanner-button" onClick={goToManuell}>Saisir n° Tel</button> 
                    <button className="btn btn-secondary retour-button" onClick={goToPromotion}>Retour</button>                
                </div>
                
            </div></div>

    );

}