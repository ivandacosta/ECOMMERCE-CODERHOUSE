import React from "react";
import "./Item.css"
import ItemCount from "../ItemCount/ItemCount";

const Item = ({product}) => { 
    const onAdd = (Counter) => { 
        alert(`Agregar ${Counter}`)
    }
    return(
        <div className="Item">
            <img src={product.images} alt="hola" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
    )
}

export default Item