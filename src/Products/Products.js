import React, { useState } from 'react';
import AnimalsOne from "../images/ConcentradoDos.jpg";
import AnimalsTwo from "../images/ConcentradoUno.jpg";
import AnimalsThree from "../images/ConcentradoCuatro.jpg";
import AnimalsFour from "../images/ConcentradoTres.jpg";
import AnimalsFive from "../images/ConcentradoCinco.jpg";
import AnimalsSix from "../images/ConcentradoSiete.jpg";
import AnimalsSeven from "../images/ConcentradoDiez.jpg";
import AnimalsEigth from "../images/ConcentradoOcho.png";
import AnimalsNine from "../images/ConcentradoOnce.jpg";

//Carrito de compras

//Base de datos de los productos que se ofrecen en formato Json
const dataBase = [
    {
        id: 1,
        nombre: 'Chunky Cachorros Cordero',
        descripcion: 'Alimento Completo y Balaceado para tu pequeño cachorro',
        precio: 40000,
        imagen: AnimalsOne,
        cantidad: 5
    },
    {
        id: 2,
        nombre: 'Chunky Cachorro Pollo Raza Grande',
        descripcion: 'Alimento Completo y Balaceado para tu pequeño cachorro',
        precio: 60000,
        imagen: AnimalsTwo,
        cantidad: 5
    },
    {
        id: 3,
        nombre: 'Chunky Adulto Pequeño',
        descripcion: 'Alimento Completo y Balaceado para tu pequeño Adulto',
        precio: 35000,
        imagen: AnimalsThree,
        cantidad: 5
    },
    {
        id: 4,
        nombre: 'Mamá y Cachorro',
        descripcion: 'Pensando en la importancia de la nutrición en los primeros 4 meses de vida de los cachorros',
        precio: 70000,
        imagen: AnimalsFour,
        cantidad: 5
    },
    {
        id: 5,
        nombre: 'Adultos Piel',
        descripcion: 'Agility Gold Piel es un producto diseñado para nutrir la piel y pelaje de perros adultos',
        precio: 80000,
        imagen: AnimalsFive,
        cantidad: 5
    },
    {
        id: 6,
        nombre: 'Adultos Obesos',
        descripcion: 'Sabemos que el sobrepeso y la obesidad son condiciones que afectan la salud y la calidad de vida',
        precio: 100000,
        imagen: AnimalsSix ,
        cantidad: 5
    },
    {
        id: 7,
        nombre: 'Gatos Adulto Pollo',
        descripcion: 'Es un alimento ideal para gatos adultos que contribuye nutrientes necesarios para su vida diaria.',
        precio: 30000,
        imagen: AnimalsSeven ,
        cantidad: 5
    },
    {
        id: 8,
        nombre: 'Gatitos',
        descripcion: 'Es una línea de alimentos súper premium, perfecto para controlar las bolas de pelo de tu gato',
        precio: 40000,
        imagen: AnimalsEigth,
        cantidad: 5
    },
    {
        id: 9,
        nombre: 'Gatitos Pollo',
        descripcion: 'Linea de pollo para gatitos. Ideal también para hembras en etapa de gestación y Lactancia.',
        precio: 45000,
        imagen: AnimalsNine ,
        cantidad: 5
    }
];

function ShoppingCart() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const divisa = '$';

    const addProductToCart = (id) => {
        const productInCart = shoppingCart.includes(id);

        if (productInCart) {
            alert('Este producto ya está en el carrito.');
        } else {
            setShoppingCart([...shoppingCart, id]);
        }
    };

    const deleteItemCart = (id) => {
        const updatedCart = shoppingCart.filter((item) => item !== id);
        setShoppingCart(updatedCart);
    };

    const calculateTotal = () => {
        return shoppingCart.reduce((total, itemId) => {
            const product = dataBase.find((item) => item.id === itemId);
            return total + product.precio;
        }, 0).toFixed(2);
    };

    const acceptPurchase = () => {
        setShoppingCart([]);
        alert('Su compra fue realizada con éxito');
    };

    const emptyCart = () => {
        setShoppingCart([]);
    };

    return (
        <div className="container">
            <div className="row">
                <main id="items" className="col-sm-10 row">
                    {dataBase.map((product) => (
                        <div key={product.id} className="card col-sm-3 my-2 mx-3">
                            <img className="card-img-top" src={product.imagen} width="60" height="300" alt={product.nombre} />
                            <h5 className="card-title text-center">{product.nombre}</h5>
                            <p className="card-description text-center">{product.descripcion}</p>
                            <div className="card-body">
                                <p className="card-text">{`${divisa} ${product.precio}`}</p>
                                <button className="btn btn-warning" onClick={() => addProductToCart(product.id)}>
                                    Agregar Al Carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
                <aside className="col-sm-2">
                    <h2>Carrito de Compras</h2>
                    <ul id="carrito" className="list-group">
                        {shoppingCart.map((id) => {
                            const product = dataBase.find((item) => item.id === id);
                            return (
                                <li key={product.id} className="list-group-item text-right mx-2">
                                    {`${product.nombre} - ${divisa}${product.precio}`}
                                    <button className="btn btn-danger mx-5" onClick={() => deleteItemCart(product.id)}>
                                        Eliminar
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <hr />
                    <p className="text-right">
                        Total: <span id="total">{divisa}{calculateTotal()}</span>
                    </p>
                    <button id="boton-comprar" className="btn btn-success" onClick={acceptPurchase}>
                        Comprar
                    </button>
                    <button id="boton-vaciar" className="btn btn-danger" onClick={emptyCart}>
                        Vaciar
                    </button>
                </aside>
            </div>
        </div>
    );
}

export {ShoppingCart};
