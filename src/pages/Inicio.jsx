import { Outlet } from "react-router-dom";
function Inicio (){
    return (
        <div>
            <header>
            <h2>Tienda de ropa deportiva</h2>
            </header>
            <Outlet/>
            <footer>
                <p>@Todos los derechos reservados</p>
            </footer>
        </div>
    );
}
export default Inicio;