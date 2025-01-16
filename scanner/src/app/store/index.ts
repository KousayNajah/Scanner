import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import basketSlice from "./basketSlice";
 
const store=configureStore({
    reducer:{
        counter:counterReducer,
        basket:basketSlice,
        
    },
});
export  type RootState=ReturnType<typeof store.getState>; 
export type AppDispatch =typeof store.dispatch;


export default store;