import React from "react";
import { ProductType } from "../types/type";
type propType={
  item:ProductType
}

export default function ProductItem({item}:propType) {
  return <div className="sub">
     <div className="Container"> 
    <p>{item.title} </p>
<p>{item.price} </p>
<p>{item.description} </p>
     </div> 



  </div>;
}
