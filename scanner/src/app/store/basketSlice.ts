import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConvertPrice } from "../helpers";


const initialState: BasketState = {
    order: {
        total: 0,
        products: [],
        globalQuantities: 0,
    },
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProductToBasket: (state, action: PayloadAction<Product>) => {
            const id = action.payload.id;
            const findedProduct = state.order.products.find((productInBasket) => productInBasket.product.id === id);
      
            if (findedProduct === undefined) {
                state.order.products.push({ product: action.payload, quantites: 1 })
                state.order.total += action.payload.price;
                state.order.globalQuantities += 1
            }
            else {
                const newTab = state.order.products.map((product) => {
              
                    if (product.product.id === id) {
                        product.quantites += 1
                    }
                    return product
                })
        
                state.order.products = newTab
                state.order.total +=action.payload.price
                state.order.globalQuantities += 1
            }
        },
        removeProductFromBasket: (state, action: PayloadAction<Product>) => {
            const id = action.payload.id
            const productPrice = action.payload.price
            const convertedPrice = ConvertPrice(productPrice)
            const findedProduct = state.order.products.find((productInBasket) => productInBasket.product.id === id)
        
            if (findedProduct === undefined) {
                return
            }
        
            if (findedProduct.quantites <= 0) {
                return
            }
            findedProduct.quantites -= 1
        
  
            if (findedProduct.quantites === 0) {
                state.order.products = state.order.products.filter(product => product.product.id !== id);
            }
            state.order.total -= convertedPrice
            state.order.globalQuantities -= 1
            state.order.total = parseFloat(state.order.total.toFixed(2))
        },
        clearProductFromBasket: (state, action: PayloadAction<Product>) => {
            const id = action.payload.id
            const index = state.order.products.findIndex(productInBasket => productInBasket.product.id === id)

            if (index !== -1) {
                const removedProduct = state.order.products.splice(index, 1)[0]
                let removedTotal= removedProduct.product.price * removedProduct.quantites
                state.order.total -= removedTotal
                state.order.globalQuantities -= removedProduct.quantites

                state.order.total = parseFloat(state.order.total.toFixed(2))
            }
        },
        clearBasket:(state)=>{
            state.order.products = []
            state.order.total = 0
            state.order.globalQuantities = 0
        },

        


    }
})

export const { addProductToBasket,removeProductFromBasket , clearProductFromBasket, clearBasket} = basketSlice.actions;

export default basketSlice.reducer;
