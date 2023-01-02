import {AppDispatch} from "../store";
import { productActions } from "../slice/product";
//middleware for fetch async 
const url=`https://api.escuelajs.co/api/v1/products`;
export function fetchProductDetail()
{
    return async (dispatch:AppDispatch)=>
    {
const response=await fetch(url);
const productDetails=await response.json();
dispatch(productActions.getProductData(productDetails));
    } 

    ;
}