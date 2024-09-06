import imagen1 from "./image/imagen1.jpg"
import imagen2 from "./image/imagen2.png";
import imagen3 from "./image/imagen3.jpeg";
import imagen4 from "./image/imagen4.jpeg";
import imagen5 from "./image/imagen5.webp";
import imagen6 from "./image/imagen6.webp";
import imagen7 from "./image/imagen8.webp";
import imagen8 from "./image/imagen8.webp";
import imagen9 from "./image/imagen9.webp";
import imagen10 from "./image/imagen10.webp";
const lista = [
    {
        id: 1,
        title: "Camiseta titutal de Independiente",
        image: imagen1,
        price: 40500,
        stock: 20,
        category: "camisetas"
    },
    {
        id: 2,
        title: "Camiseta suplente de Independeinte",
        image: imagen2,
        price: 40000,
        stock: 30,
        category: "camisetas"
    },
    {
        id: 3,
        title: "Short de Independiente",
        image: imagen3,
        price: 30500,
        stock: 10,
        category: "shorts"
    },
    {
        id: 4,
        title: "Campera de Independiente",
        image: imagen4,
        price: 30000,
        stock: 40,
        category: "camperas"
    },
    {
        id: 5,
        title: "Camiseta titular de la Selección Argentina",
        image: imagen5,
        price: 30500,
        stock: 45,
        category: "camisetas"
    },
    {
        id: 6,
        title: "Camiseta suplente de la Selección Argentina",
        image: imagen6,
        price: 30200,
        stock: 50,
        category: "camisetas"
    },
    {
        id: 7,
        title: "Botines para cancha de 11",
        image: imagen7,
        price: 20500,
        stock: 35,
        category: "botines"
    },
    {
        id: 8,
        title: "Botines para cancha de 5",
        image: imagen8,
        price: 20000,
        stock: 25,
        category: "botines"
    },
    {
        id: 9,
        title: "Short de la Selección Argentina",
        image: imagen9,
        price: 30800,
        stock: 15,
        category: "shorts"
    },
    {
        id: 10,
        title: "Campera de la selección Argentina",
        image: imagen10,
        price: 50500,
        stock: 55,
        category: "camperas"
    },
]
export default lista;

export const getProductos = () => {
    return (
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(lista)
            }, 500)
        })
    )
}
export const getProductosId = (listaid) => {
    return (
        new Promise((resolve) => {
            setTimeout (() => {
                resolve(lista.find (prod => prod.id === listaid))
            }, 500)
        })
    )
};

export const getProductosCategoria = (listaCategoria) => {
    return (
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(lista.filter(prod => prod.category ===listaCategoria))
            })
        })
    )
};
