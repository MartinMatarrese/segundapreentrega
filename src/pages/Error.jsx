import { Link } from "react-router-dom";
function Error (){
    return (
        <main>
            <h1>ERROR 404</h1>
            <p>Página no encontrada</p>
            <Link to="/">Volver</Link>
        </main>
    )
}
export default Error;