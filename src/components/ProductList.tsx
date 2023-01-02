import React ,{ useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState,AppDispatch } from "../redux/store";
import { ProductType } from "../types/type";
import ProductItem from "./ProductItem";
import "./ProductItem.css";
import { fetchProductDetail } from "../redux/Thunk/product";
import  productActions  from "../redux/slice/product";

//import CircularProgress from '@mui/material/CircularProgress';


export default function ProductList() {
  const products= useSelector((state:RootState)=>state.product.productList);
console.log(products,"products");
  //const loading = useSelector((state: RootState) => state.product)
  const dispatch = useDispatch<AppDispatch>();
  //const dispatchLoading = useDispatch();
 // console.log(loading)
 useEffect(() => {
  dispatch(fetchProductDetail());
}, [dispatch])
  return <div>ProductList
    <h1>products are </h1>
    {
  products? products.map((item:ProductType)=>
  <ProductItem item={item} key={item.id}></ProductItem>
  ):""
    }
  
  </div>;
}







 