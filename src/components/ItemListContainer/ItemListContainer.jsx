import { useState, useEffect } from "react"
import { getProductos, getProductosCategoria } from "../../Lista";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
export const ItemListContainer = ({bienvenida}) => {
    
    const [productos, setProductos] = useState([]);
    
    const {categoryId} = useParams()
    
        useEffect(() => {
        const asyncFunc = categoryId ? getProductosCategoria : getProductos;
        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error);
            })
    }, [categoryId]);
    return (
        <div>
            <h2>{bienvenida}</h2>
            <ItemList productos={productos}/>
        </div>
    )
}