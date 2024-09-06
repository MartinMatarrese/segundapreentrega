import {useState} from "react";
 function Contador ({stock, iniciar, onAdd}){
    const [cantidad, setCantidad] = useState(iniciar);
    const incrementar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    const decrementar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <div>
            <div>
            <button onClick={incrementar}>Agregar</button>
            <p>{cantidad}</p>
            <button onClick={decrementar}>Quitar</button>
            </div>
            <div>
                <div>
                    <button onClick={() => onAdd(cantidad)} disabled={stock < 0}>Agregar al carrito</button>                    
                </div> 
            </div>
        </div>
    )
 }
 export default Contador;