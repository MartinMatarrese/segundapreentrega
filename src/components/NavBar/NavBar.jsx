import { Link, NavLink } from "react-router-dom";

function NavBar (){
    return (
        <nav>
            <Link to="/">INICIO</Link>
            <div>
                <NavLink to={"/category/camisetas"}>CAMISETAS</NavLink>
                <NavLink to={"/category/camperas"}>CAMPERAS</NavLink>
                <NavLink to={"/category/botines"}>BOTINES/</NavLink>
                <NavLink to={"/category/shorts"}>SHORTS</NavLink>
            </div>
        </nav>    
    );
}
export default NavBar;