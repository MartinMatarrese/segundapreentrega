import Item from "../Item/Item";
function ItemList ({productos}){
    if(!Array.isArray(productos)){
        return <p>No hay productos</p>
    }
    return (
        <div>
        {productos.map(prod=><Item key={prod.id} {...prod}/>)}
      
      </div>
    )
}
export default ItemList;