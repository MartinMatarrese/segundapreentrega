import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar (){
    return (
        <nav>
            <Link to="/">INICIO</Link>
            <div>
                <Link to="/category/camisetas">CAMISETAS</Link>
                <Link to="/category/camperas">CAMPERAS</Link>
                <Link to="/category/botines">BOTINES/</Link>
                <Link to="/category/shorts">SHORTS</Link>
                <CartWidget/>
            </div>
        </nav>    
    );
}
export default NavBar;