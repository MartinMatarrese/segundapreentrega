import { Link } from "react-router-dom"
import "./Item.css";

export const Item = ({id, title, image, price, stock}) => {
    return (
        <div className="item"> 
            <article>
            <header>
                <h2 className="item-header">{title}</h2>
            </header>
            <picture>
                <img className="item-img" src={image} alt={title}/>
            </picture>
            <section>
                <p className="item-datos">precio: ${price}</p>
                <p className="item-datos">Stock: ${stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}><h3 className="item-info">INFO</h3></Link>
            </footer>
        </article>
        </div>
    )
}