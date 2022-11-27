import React, { useContext } from 'react';
import cartContext from '../../storage/CartContext';

function CartView() {
    const { cart } = useContext(cartContext);
    console.log(cart)
    return (
        <div>
            {cart.map((cartItem) => (
                <div>
                    <h3>{cartItem.nombre}</h3>
                    <h4>$ {cartItem.precio}.00</h4>
                    <h4>{cartItem.quantity}</h4>
                </div>
            ))}
        </div>
    )
}

export default CartView