import { Link } from "react-router-dom";
function Item ({id, title, image, price, stock}) {
    return (
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title}/>
            </picture>
            <p>${price}</p>
            <p>stock disponible {stock}</p>
            <section>
                <footer>
                    <Link to={`item/${id}`}>Ver detalle</Link>
                </footer>
            </section>
        </article>
    )
}
export default Item;