'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Manuell() {
    
    const [inputValue, setInputValue] = useState<string>('');
    const router=useRouter();
    
    const goToVerifie=()=>{
        router.push('/promotion/methode/verifieSolde')
    }


    const handleNumberClick = (number: number) => {
        setInputValue((prev) => prev + number.toString());
    };

    const handleBackspace = () => {
        setInputValue((prev) => prev.slice(0, -1));
    };

    const handleClear = () => {
        setInputValue('');
    };
    return (
        <div className='background'>
            <div className='container'>
                <p className="title">
                    AuresKonnect
                </p>
                <input
                    type="text"
                    value={inputValue}
                    readOnly
                    className='input'
                    placeholder="Enter your code postal"
                />
                <div className='keyboard1'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                        <button key={number}
                             onClick={() => handleNumberClick(number)} className='key'>
                            {number}
                        </button>
                    ))}
                    <button onClick={handleBackspace} className='key'>
                        &larr;
                    </button>
                    <button onClick={handleClear} className='key'>C</button>
                </div>
                <button type="button" className="btn btn-success termin-button" onClick={goToVerifie}>Terminer</button>

            </div>
        </div>
    );
}
