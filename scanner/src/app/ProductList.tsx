import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { increment, decrement } from './store/counterSlice';
import { addProductToBasket,removeProductFromBasket } from './store/basketSlice';
import {ConvertPrice} from './helpers/index';

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
    const quantities = useSelector((state: RootState) => state.counter.quantities);
    const order = useSelector((state: RootState) => state.basket.order);
    const dispatch = useDispatch();
    const handleAddToBasket = (product: Product) => {
        dispatch(addProductToBasket(product))
        dispatch(increment(product.id))
    }
    const handleUpdateBasket=(product:Product)=>{
        dispatch(removeProductFromBasket(product))
        dispatch(decrement(product.id))
    }
    return (
        <div className="">

            {products.map((product) => (
                <div key={product.id} className="product-item product-list">
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <img src={product.image}/>
                    <div className="quantity-controls">
                    <button
                            className={`btn ${quantities[product.id] > 0 ? 'btn-danger' : 'btn-secondary'}`}
                            onClick={() => handleUpdateBasket(product)}
                            disabled={quantities[product.id] === 0}
                        >-</button>

                        <h1>{quantities[product.id] ?? 0 }</h1>
                        <button 
                        className={`btn ${quantities[product.id] >= 10 ? 'btn-secondary' : 'btn-primary'}`} 
                        onClick={() => handleAddToBasket({...product,price : ConvertPrice(product.price)})}
                        disabled={quantities[product.id] == 0}>+</button>  
                    </div>
                </div> 
            ))}
        </div>
    );
}

export default ProductList;
