import { useEffect, useState } from "react";
import { getProductosId } from "../../Lista";
import ItemDetalles from "../ItemDetalles/ItemDetalles"
import { useParams } from "react-router-dom";

function ItemDetallesContainer (){

    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);
    
    const {itemId} = useParams();

    useEffect(() =>{
        getProductosId(itemId)
        .then(response => {
            setProducto(response)
        })
        .catch(() =>{
            setError("Producto no encontrado")
        })
    }, [itemId])
    return (
        <div>
            {error ? (
                <p>{error}</p>
            ): (
                producto && <ItemDetalles {...producto}/>
            )}
        </div>
    )
}
export default ItemDetallesContainer;