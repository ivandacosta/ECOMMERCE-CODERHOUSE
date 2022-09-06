import React from "react";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => { 
    const [Counter, SetCounter] = useState(initial)

    const CountUp = () => {
        if(Counter < stock){
            SetCounter(Counter + 1)
        }
    }

    const CountDown = () => { 
        if(Counter > 1){
            SetCounter(Counter - 1)
        }
    }


    return(
        <div className="ItemCount">
            <div className="ItemButtons">
                <button onClick={CountUp}>+</button>
                <p>Cant:{Counter}</p>
                <button onClick={CountDown}>-</button>
            </div>

            <div className="AddToCart">
                <button onClick={onAdd}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount