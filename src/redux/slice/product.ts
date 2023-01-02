import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {ProductType } from "../../types/type";


type stateType=
{
    productList:ProductType[];
};
const initialState:stateType={
    productList:[],
};
const productSlice=
                createSlice(
{
name:"productApi",
initialState,
reducers:{
    getProductData:(state,action)=>
    {
state.productList=action.payload;
console.log("actionpayload",action.payload);
    },
        
},
}
);
export const productActions=productSlice.actions;
const reducer=productSlice.reducer;
export default reducer;
    

