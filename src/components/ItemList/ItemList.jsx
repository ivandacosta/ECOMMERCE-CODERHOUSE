import React from "react";
import Item from "../Item/Item";

function ItemList({Products}){
    return(
        <>
        {Products.map((product) => { 
                return(
                    <Item key={product.id} product={product}/>
                )
            })}
        </>
    )
}

export default ItemList