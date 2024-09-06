import { useState } from "react"
import { Link } from "react-router-dom";
import "./ItemCount.css";
export  const ItemCount = ({stock, iniciar, onAdd}) => {
    const [cantidad, setCantidad] = useState(iniciar);
    const incrementar = () =>{
        if(cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const decrementar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div>
            <div className="contador">
                <button onClick={incrementar} className="contador-boton">Agregar</button>
                <p className="contador-cantidad">{cantidad}</p>
                <button onClick={decrementar} className="contador-boton">Quitar</button>
            </div>
            <div>
                <button onClick={() => onAdd(cantidad)} disabled={!stock} className="contador-agregar">Agregar al carrito</button>
            </div>
            <div>
                <Link to="/" className="contador-volver">Volver</Link>
            </div>
        </div>
    )
}