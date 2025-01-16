'use client'
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';


export default function ConfSolde() {
    const router=useRouter();
  const goToPayment=()=>{
    router.push('/payment')
  }
    return (
        <div className='background'>

            <div className='container'>

                <h1 className="title">
                    AuresKonnect
                </h1>
                <p className='message'>Souhaitez vous acceder a votre compte fidélite ?</p>
                <div className="button-container">
                        <button type="button" className="btn btn-danger btn-big" onClick={goToPayment}>NON</button>
                        <button type="button" className="btn btn-success btn-big" onClick={goToPayment}>OUI</button>
                </div>

            </div>
        </div >



    );
}