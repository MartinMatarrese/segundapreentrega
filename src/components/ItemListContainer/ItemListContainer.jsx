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
          
        .then(respmse => {
            setProductos(respmse)
          })
        .catch(error => {
           setError(error, "Producto no encontrado")
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
                <ItemList/>
            )}
        </div>
    );
}
export default ItemListContainer;