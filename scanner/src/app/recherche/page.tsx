'use client';

import { useState, useEffect } from 'react';
import Public from '../Public';
import { Provider, useDispatch } from 'react-redux';
import store from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';

export default function Recherche() {
  const [inputValue, setInputValue] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const router=useRouter();

  const goToHome=()=>{
    router.push('/');
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/fileJson/products.json');
        const data = await response.json();
        setProducts(data);
        setInitialProducts(data);  
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  

  const handleKeyClick = (key: string) => {
    setInputValue((prev) => prev + key.toString());
  };



  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInputValue('');
    setProducts(initialProducts); 

  };

  const handleSpace = () => {
    setInputValue((prev) => prev + ' ');
  };

  const handleEnter = () => {
  
    if (inputValue.trim() === '') {
      setProducts(initialProducts); 
    } else {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  };
 
        return (
          <Provider store={store}>
          <div className='background'>
            <div className='container'>
              <p className="title">AuresKonnect</p>
              <input
                type="text"
                value={inputValue}
                readOnly
                className='input'
                placeholder=""
              />


        <div className='product-list-wrapper'>
          <Public products={products} />
        </div>


        <div className='keyboard-container'>
          <div className='keyboard'>
            <button onClick={() => handleKeyClick('A')} className='key'>A</button>
            <button onClick={() => handleKeyClick('Z')} className='key'>Z</button>
            <button onClick={() => handleKeyClick('E')} className='key'>E</button>
            <button onClick={() => handleKeyClick('R')} className='key'>R</button>
            <button onClick={() => handleKeyClick('T')} className='key'>T</button>

            <button onClick={() => handleKeyClick('Y')} className='key'>Y</button>
            <button onClick={() => handleKeyClick('U')} className='key'>U</button>
            <button onClick={() => handleKeyClick('I')} className='key'>I</button>
            <button onClick={() => handleKeyClick('O')} className='key'>O</button>
            <button onClick={() => handleKeyClick('P')} className='key'>P</button>

            <button onClick={() => handleKeyClick('Q')} className='key'>Q</button>
            <button onClick={() => handleKeyClick('S')} className='key'>S</button>
            <button onClick={() => handleKeyClick('D')} className='key'>D</button>
            <button onClick={() => handleKeyClick('F')} className='key'>F</button>
            <button onClick={() => handleKeyClick('G')} className='key'>G</button>

            <button onClick={() => handleKeyClick('H')} className='key'>H</button>
            <button onClick={() => handleKeyClick('J')} className='key'>J</button>
            <button onClick={() => handleKeyClick('K')} className='key'>K</button>
            <button onClick={() => handleKeyClick('L')} className='key'>L</button>

            <button onClick={() => handleKeyClick('M')} className='key'>M</button>
            <button onClick={() => handleKeyClick('W')} className='key'>W</button>
            <button onClick={() => handleKeyClick('X')} className='key'>X</button>
            <button onClick={() => handleKeyClick('C')} className='key'>C</button>
            
            <button onClick={() => handleKeyClick('V')} className='key'>V</button>
            <button onClick={() => handleKeyClick('B')} className='key'>B</button>
            <button onClick={() => handleKeyClick('N')} className='key'>N</button>

            <button onClick={handleSpace} className='key spaceKey' >Space</button>
            <button onClick={handleEnter} className='key'>Enter</button>
            <button onClick={handleBackspace} className='key'>&larr;</button>
            <button onClick={handleClear} className='key'>Clear</button>
          </div>
        </div>
        
                <button type="button" className="btn btn-primary termin-button" onClick={goToHome}>Terminer</button>
              
            </div>
          </div>
      </Provider>
        );
      }
      

