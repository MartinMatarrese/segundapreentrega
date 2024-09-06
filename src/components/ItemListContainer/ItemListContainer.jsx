import { useState, useEffect } from "react";
import {getProductos, getProductosCategoria} from "../../Lista";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer ({greeting}){
    
    const [productos, setProductos] = useState([]);

    const [error, setError] = useState(null);
    
    const {categoryid} = useParams()
    
    useEffect(() => {
        
        const asyncFunc = categoryid ? getProductosCategoria : getProductos
        
        asyncFunc(categoryid)
          
        .then(response => {
            setProductos(response)
          })
        .catch(() => {
           setError("Producto no encontrado")
        })
    }, [categoryid])
    if (error) {
        return (
            <p>{error}</p>
        )
    }
    
    return (
        <div>
            <h1>{greeting}</h1>
            {productos.length > 0 ? (
                <ItemList productos={productos}/>
            ):(
                <p>No hay productos disponibles</p>
            )}
        </div>
    );
}
export default ItemListContainer;