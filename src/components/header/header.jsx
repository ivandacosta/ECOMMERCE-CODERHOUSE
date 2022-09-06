import React from "react";
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return(
        <header>
                <div className="logo">
                    <h2>GO</h2>
                </div>

                <nav>
                    <a href="home">Home</a>
                    <a href="home">Home</a>
                    <a href="home">Home</a>
                </nav>

                <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>0</p>
                </div>
        </header>
        
    )
}

export default Header