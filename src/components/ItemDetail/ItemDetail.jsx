
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({title, image, category, price, stock}) => {
    return (
        <article>
            <header>
                <h2 style={{color: "black"}}>{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section>
                <p>Categoria: {category}</p>
                <p>Precio: ${price}</p>
            </section>
            <footer>
                <ItemCount iniciar={1} stock={stock} onAdd={(cantidad) => console.log("cantidad agregada", cantidad)}/>   
            </footer>
        </article>
    )
}