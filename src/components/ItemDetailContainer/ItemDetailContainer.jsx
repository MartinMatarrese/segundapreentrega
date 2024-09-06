import { useEffect, useState } from "react"
import { getProductosId } from "../../Lista";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null);

    const {itemId} = useParams();

    useEffect(() => {
        getProductosId(Number(itemId))
            .then(response => {
                setProductos(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [itemId]);
    return (
        <div>
            <ItemDetail {...productos}/>
        </div>
    )
}