import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addProductToBasket } from "./basketSlice";

type CounterState = {
    quantities: Record<number, number>;
}

const initialState: CounterState = {
    quantities: {},
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            if (!state.quantities[id]) {
                state.quantities[id] = 0;
            }
            state.quantities[id]++;
        },
        decrement: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            if (state.quantities[id] > 0) {
                state.quantities[id]--;
            }
            if (state.quantities[id] === 0) {
        delete state.quantities[id];
    }
        },
        incrementByAmount: (state, action: PayloadAction<{ id: number; amount: number }>) => {
            const { id, amount } = action.payload;
            if (!state.quantities[id]) {
                state.quantities[id] = 0;
            }
            state.quantities[id] += amount;
        },
        clearProductQuantity: (state, action: PayloadAction<number>) => {
            const id = action.payload;
           delete state.quantities[id];
        },
        clearAllQuantity:(state)=>{
           state.quantities = {};
        },
    },
});

export const { increment, decrement, incrementByAmount ,clearProductQuantity,clearAllQuantity} = counterSlice.actions;

export default counterSlice.reducer;
