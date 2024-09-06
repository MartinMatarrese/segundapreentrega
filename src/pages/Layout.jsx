import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout (){
    return (
        <div>
            <header>
                <Inicio/>    
            </header>
            <NavBar/>
            <Outlet/>        
            <footer>
                <p>@Todos los derechos reservados</p>        
            </footer> 
        </div>
    );
}
export default Layout;