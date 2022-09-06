import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import products from "../products/ItemProducts";
import "./ItemContainer.css"
import ItemList from "../ItemList/ItemList";

const ItemLIstContainer = () =>  {
    const [Products, Setproducts] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
            resolve(products);
          }, 2000);      
        });
        getData.then(res => Setproducts(res));
      }, [])

    return(
        <div className="ItemContainer">
            <ItemList Products={Products} />
        </div>
    )
}

export default ItemLIstContainer