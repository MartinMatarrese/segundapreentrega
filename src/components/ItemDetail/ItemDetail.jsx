
import { ItemCount } from "../ItemCount/ItemCount"
import "./ItemDetail.css";

export const ItemDetail = ({title, image, category, price, stock}) => {
    return (
            <div className="itemdetail">
             <article>
            <header>
                <h2 className="itemdetail-header">{title}</h2>
            </header>
            <picture>
                <img className="itemdetail-img" src={image} alt={title} />
            </picture>
            <section>
                <p className="itemdetail-datos">Categoria: {category}</p>
                <p className="itemdetail-datos">Precio: ${price}</p>
            </section>
            <footer>
                <ItemCount iniciar={1} stock={stock} onAdd={(cantidad) => console.log("cantidad agregada", cantidad)}/>   
            </footer>
        </article>
        </div>
    )
}