'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

export default function Scann() {
    const router=useRouter();
    
    const goToVerifie=()=>{
        router.push('/promotion/methode/verifieSolde')
    }

    return (
        <div className='background'>

            <div className='container'>
                <h1 className="title">
                    AuresKonnect
                </h1>
                <p className='message'>
                    Veuillez Scanner votre Code Promo
                </p>

              <button type="button" className="btn btn-success" onClick={goToVerifie}>Terminer</button>
            </div>
        </div>





    );
}