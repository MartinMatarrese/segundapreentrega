import Contador from "../Contador/Contador";
function Detalles (id, title, image, category, price, stock) {

    return (
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title}/>
            </picture>
            <section>
                <p>{id}</p>
                <p>Categoria: {category}</p>
                <p>Precio: ${price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer>
                <Contador iniciar={1} stock={10} onAdd={(cantidad) => ("cantidad agregada: ", cantidad) } />
            </footer>
        </article>
    );
}
export default Detalles;