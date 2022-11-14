import React, { useState } from 'react';
import Count from '../Count/Count';

// Estilos
import './itemdetail.css';

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);

    function handleAddToCart(cantidad) {
        alert(`Agregadas ${cantidad} unidades de ${product.nombre} al carrito`);
        setIsInCart(true);
    }

    return (
        <div className='detailcontainer'>
            <div className='detailcontainer__nombre'>
                <h2 >{product.nombre}</h2>
            </div>
            <div className='detailcontainer__info'>
                <div className='info__img' >
                    <img src={product.imagen} alt={product.nombre} />
                </div>
                <div className='info__info'>
                    <p className='info__precio'>$ {product.precio}</p>
                    {!isInCart ? (
                        <>
                            <div className='info__contador'>
                                <Count handleAddToCart={handleAddToCart} stock={product.stock}></Count>
                            </div>
                            <p className='info__stock'>* Stock disponible {product.stock} unidades</p>
                        </>
                    ) : (
                        <div className='info__contador'>
                            <button className='btngotocart'>Ir al carrito</button>
                        </div>
                    )
                    }
                    <p className='info__descripcion'>{product.descripcion}</p>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail