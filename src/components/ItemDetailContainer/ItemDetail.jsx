import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import cartContext from '../../storage/CartContext';
import { Link } from 'react-router-dom';

// Estilos
import './itemdetail.css';

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const { addItem } = useContext(cartContext);

    function handleAddToCart(quantity) {
        const itemForCart = {
            ...product,
            quantity
        }
        setIsInCart(true);
        addItem(itemForCart);
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
                    {!isInCart ? (
                        <>
                            <p className='info__precio'>$ {product.precio}.00</p>
                            <div className='info__contador'>
                                <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}></ItemCount>
                            </div>
                            <p className='info__stock'>* Stock disponible {product.stock} unidades</p>
                            <p className='info__descripcion'>{product.descripcion}</p>
                        </>
                    ) : (
                        <div className='info__btns'>
                            <Link to='/cart'><button className='btngotocart'>Ir al carrito</button></Link>
                            <button className='btngotocart'>Quitar del carrito</button>
                            <Link to='/'><button className='btngotocart'>Volver al catalogo</button></Link>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;